import { readFile } from "node:fs/promises";
import os from "node:os";
import process from "node:process";
import vm from "node:vm";
import { performance } from "node:perf_hooks";
import { loadModules } from "./lib/loadCorpus.mjs";
import { generateRegexWitness } from "./lib/regexWitness.mjs";
import { analyzeRegex } from "../src/base/matching/patternCompilation.js";

const WARMUP_LINES = Number(process.env.NEXSKILLS_BENCH_WARMUP ?? 10_000);
const SAMPLE_LINES = Number(process.env.NEXSKILLS_BENCH_LINES ?? 30_000);
const SAMPLES = Number(process.env.NEXSKILLS_BENCH_SAMPLES ?? 7);

const snapshot = JSON.parse(
  await readFile(
    new URL("./fixtures/legacy-pattern-snapshot.json", import.meta.url),
    "utf8"
  )
);
const [{ actionDefinitions, npcDefinitions }, { createNexSkills }] =
  await loadModules(
    "/src/base/definitionCorpus.js",
    "/src/base/nexSkills.js"
  );

const deserialize = (pattern) => {
  if (pattern.kind === "string") {
    return pattern.value;
  }
  if (pattern.kind === "regex") {
    return new RegExp(pattern.source, pattern.flags);
  }
  return pattern.elements.map(deserialize);
};

const slots = new Map(
  snapshot.patterns.map((record) => [
    `${record.scope}:${record.definitionIndex}:${record.matchType}`,
    deserialize(record.pattern),
  ])
);

const actions = actionDefinitions.map((definition) => ({
  ...definition,
  patterns: definition.patterns,
  profession: [...definition.profession],
  affs: definition.affs ? [...definition.affs] : undefined,
  tags: definition.tags ? [...definition.tags] : undefined,
  reaction: undefined,
}));
const npcs = npcDefinitions.map((definition) => ({
  ...definition,
  patterns: definition.patterns,
  areaId: Array.isArray(definition.areaId)
    ? [...definition.areaId]
    : definition.areaId,
  affs: definition.affs ? [...definition.affs] : undefined,
  tags: definition.tags ? [...definition.tags] : undefined,
  reaction: undefined,
}));

const DEFAULT_BENCH_LOCATION = { areaid: 401, area: "the Underworld" };
const state = {
  profession: "occultist",
  location: DEFAULT_BENCH_LOCATION,
  laterLines: [],
};
const environment = {
  getRawClass: () => state.profession,
  getLocation: () => state.location,
  getLaterLineText: (offset) => state.laterLines[offset - 1],
  raiseEvent: () => {},
  reportReactionError: () => {},
};
const optimized = createNexSkills({ actions, npcs, environment });
const bucketedExact = createNexSkills({
  actions,
  npcs,
  environment,
  exactIndexMode: "bucket",
});

const npcMap = new Map();
const npcIndexes = new Map(npcs.map((npc, index) => [npc, index]));
for (const npc of npcs) {
  const keys = npc.areaId
    ? Array.isArray(npc.areaId)
      ? npc.areaId
      : [npc.areaId]
    : [npc.areaName];
  for (const key of keys) {
    if (!npcMap.has(key)) {
      npcMap.set(key, []);
    }
    npcMap.get(key).push(npc);
  }
}

const evaluateLegacy = (definition, pattern, text, matchType, user, target) => {
  if (pattern === undefined) {
    return false;
  }

  let result = false;
  if (Array.isArray(pattern)) {
    const lines = [text, ...state.laterLines];
    for (let index = 0; index < pattern.length; index += 1) {
      if (lines[index] === undefined) {
        return false;
      }
      result = lines[index].match(pattern[index]);
      if (!result) {
        return false;
      }
    }
  } else {
    result = text.match(pattern);
  }

  if (!result) {
    return false;
  }
  const action = {
    ...definition,
    affs: definition.affs ? [...definition.affs] : [],
    tags: definition.tags ? [...definition.tags] : [],
  };
  action.matchType = matchType;
  action.user = result.groups?.user || user;
  action.target = result.groups?.target || target;
  action.info = result.groups?.info || action.info;
  action.limb = result.groups?.limb || false;
  action.originalLine = result[0];
  action.match = result;
  return action;
};

let legacyAreaKey;
let legacyAreaNpcs = [];
const legacyCheckNpcs = (text) => {
  const key = npcMap.has(state.location.areaid)
    ? state.location.areaid
    : state.location.area;
  if (key !== legacyAreaKey) {
    legacyAreaKey = key;
    legacyAreaNpcs = npcMap.get(key) ?? [];
  }
  for (const npc of legacyAreaNpcs) {
    const index = npcIndexes.get(npc);
    for (const matchType of ["firstPerson", "thirdPerson"]) {
      const result = evaluateLegacy(
        npc,
        slots.get(`npc:${index}:${matchType}`),
        text,
        matchType,
        npc.user,
        "self"
      );
      if (result) {
        return result;
      }
    }
  }
  return false;
};

const legacyCheckSkills = (text) => {
  const profession = state.profession.toLowerCase();
  for (let index = 0; index < actions.length; index += 1) {
    const definition = actions[index];
    if (
      definition.profession.includes(profession) ||
      definition.profession.includes("general")
    ) {
      const result = evaluateLegacy(
        definition,
        slots.get(`action:${index}:firstPerson`),
        text,
        "firstPerson",
        "self",
        ""
      );
      if (result) {
        return result;
      }
    }
    for (const [matchType, user, target] of [
      ["secondPerson", "", "self"],
      ["thirdPerson", "", ""],
    ]) {
      const result = evaluateLegacy(
        definition,
        slots.get(`action:${index}:${matchType}`),
        text,
        matchType,
        user,
        target
      );
      if (result) {
        return result;
      }
    }
  }
  return legacyCheckNpcs(text);
};

const missLines = [
  "A quiet breeze passes through the room.",
  "You see exits leading north, southeast, and up.",
  "The time is dawn on the 14th day of Scarlatan.",
  "Health: 100%, mana: 100%, endurance: 100%.",
  "A traveller says, 'The road ahead is clear.'",
  "Nothing noteworthy happens here.",
  "A map marker appears in the distance.",
  "The room is lit by a pale lantern.",
  "You carefully inspect your surroundings.",
  "A bell rings somewhere far away.",
];
const eligibleHit =
  "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm.";
const zeroPercent = missLines.map((text) => ({ text }));
const fivePercent = Array.from({ length: 20 }, (_, index) => ({
  text: index === 19 ? eligibleHit : missLines[index % missLines.length],
}));

const allCurrentSlots = [...actions, ...npcs].flatMap((definition, index) =>
  ["firstPerson", "secondPerson", "thirdPerson"].flatMap((matchType) => {
    const pattern = definition.patterns[matchType];
    return pattern === false
      ? []
      : [{
          definition,
          definitionIndex: index,
          scope: index < actions.length ? "action" : "npc",
          matchType,
          pattern,
        }];
  })
);

const exactCases = allCurrentSlots
  .filter(
    ({ pattern }) =>
      typeof pattern === "string" ||
      (Array.isArray(pattern) && typeof pattern[0] === "string")
  )
  .filter(
    ({ definition, matchType, scope }) =>
      scope === "npc" ||
      matchType !== "firstPerson" ||
      definition.profession.includes("general") ||
      definition.profession.includes("occultist")
  )
  .map(({ definition, pattern, scope }) => ({
    text: Array.isArray(pattern) ? pattern[0] : pattern,
    laterLines: Array.isArray(pattern)
      ? pattern.slice(1).map((element) =>
          typeof element === "string"
            ? element
            : generateRegexWitness(element)
        )
      : [],
    profession: "occultist",
    location:
      scope === "npc"
        ? {
            areaid: Array.isArray(definition.areaId)
              ? definition.areaId[0]
              : definition.areaId,
            area: definition.areaName,
          }
        : state.location,
  }));

const regexCasesByKind = new Map([
  ["prefix", []],
  ["substring", []],
  ["ungated", []],
]);
for (const { definition, pattern, scope, matchType } of allCurrentSlots) {
  if (
    !(pattern instanceof RegExp) ||
    (scope === "action" &&
      matchType === "firstPerson" &&
      !definition.profession.includes("general") &&
      !definition.profession.includes("occultist"))
  ) {
    continue;
  }
  const analysis = analyzeRegex(pattern);
  const kind = analysis.prefix
    ? "prefix"
    : analysis.substring
      ? "substring"
      : "ungated";
  regexCasesByKind.get(kind).push({
    text: generateRegexWitness(pattern),
    profession: "occultist",
    location:
      scope === "npc"
        ? {
            areaid: Array.isArray(definition.areaId)
              ? definition.areaId[0]
              : definition.areaId,
            area: definition.areaName,
          }
        : DEFAULT_BENCH_LOCATION,
  });
}

const stratify = (items, count = 9) => {
  if (items.length <= count) {
    return items;
  }
  return Array.from({ length: count }, (_, index) =>
    items[Math.round((index * (items.length - 1)) / (count - 1))]
  );
};

const corpora = {
  unmatched: zeroPercent,
  eligible5Percent: fivePercent,
  exactHits: stratify(exactCases),
  regexHits: [...regexCasesByKind.values()].flatMap((items) =>
    stratify(items, 3)
  ),
  burstReplay: Array.from({ length: 1_000 }, (_, index) =>
    index % 20 === 19
      ? { text: eligibleHit }
      : { text: missLines[index % missLines.length] }
  ),
};

const prepareCase = (testCase) => {
  state.profession = testCase.profession ?? "occultist";
  state.location = testCase.location ?? DEFAULT_BENCH_LOCATION;
  state.laterLines = testCase.laterLines ?? [];
};

const runLines = (check, corpus, count) => {
  let matched = 0;
  for (let index = 0; index < count; index += 1) {
    const testCase = corpus[index % corpus.length];
    prepareCase(testCase);
    if (check(testCase.text)) {
      matched += 1;
    }
  }
  return matched;
};

const percentile = (values, fraction) =>
  values[Math.min(values.length - 1, Math.ceil(values.length * fraction) - 1)];

const measure = (check, corpus, lines = SAMPLE_LINES) => {
  runLines(check, corpus, WARMUP_LINES);
  const samples = [];
  let matches = 0;
  for (let sample = 0; sample < SAMPLES; sample += 1) {
    const start = performance.now();
    matches = runLines(check, corpus, lines);
    samples.push(((performance.now() - start) * 1_000) / lines);
  }
  samples.sort((a, b) => a - b);
  return {
    medianUsPerLine: percentile(samples, 0.5),
    p95UsPerLine: percentile(samples, 0.95),
    matchesPerSample: matches,
  };
};

const countRegexExecutions = (check, corpus, count) => {
  const original = RegExp.prototype.exec;
  let executions = 0;
  RegExp.prototype.exec = function instrumentedExec(text) {
    executions += 1;
    return original.call(this, text);
  };
  try {
    runLines(check, corpus, count);
  } finally {
    RegExp.prototype.exec = original;
  }
  return executions / count;
};

const results = {};
for (const [name, corpus] of Object.entries(corpora)) {
  const lines = name === "burstReplay" ? corpus.length : SAMPLE_LINES;
  const legacy = measure(legacyCheckSkills, corpus, lines);
  const current = measure(optimized.checkSkills, corpus, lines);
  results[name] = {
    legacy,
    optimized: current,
    speedup: legacy.medianUsPerLine / current.medianUsPerLine,
  };
}
results.unmatched.regexExecutionsPerLine = {
  legacy: countRegexExecutions(legacyCheckSkills, zeroPercent, 1_000),
  optimized: countRegexExecutions(optimized.checkSkills, zeroPercent, 1_000),
};

const endToEndExactIndexAblation = {
  fullTextMap: {
    unmatched: results.unmatched.optimized,
    exactHits: results.exactHits.optimized,
  },
  firstCharacterBucket: {
    unmatched: measure(bucketedExact.checkSkills, zeroPercent),
    exactHits: measure(bucketedExact.checkSkills, corpora.exactHits),
  },
};

const exactStrings = allCurrentSlots
  .flatMap(({ pattern }) =>
    typeof pattern === "string" ? [pattern] : []
  );
const exactMap = new Map(exactStrings.map((text) => [text, true]));
const exactBuckets = new Map();
for (const text of exactStrings) {
  const key = text[0] ?? "";
  if (!exactBuckets.has(key)) {
    exactBuckets.set(key, []);
  }
  exactBuckets.get(key).push(text);
}
const lookupInputs = [...missLines, ...stratify(exactStrings, 10)];
const lookupIterations = 1_000_000;
const measureLookup = (lookup) => {
  const start = performance.now();
  let found = 0;
  for (let index = 0; index < lookupIterations; index += 1) {
    found += lookup(lookupInputs[index % lookupInputs.length]) ? 1 : 0;
  }
  return {
    nsPerLookup:
      ((performance.now() - start) * 1_000_000) / lookupIterations,
    found,
  };
};
const exactLookupAblation = {
  fullTextMap: measureLookup((text) => exactMap.has(text)),
  firstCharacterBucket: measureLookup((text) =>
    (exactBuckets.get(text[0] ?? "") ?? []).includes(text)
  ),
};
const literalComparisonText =
  "A representative exact definition line with punctuation.";
const literalComparisonRegex =
  /^A representative exact definition line with punctuation\.$/;
const directComparisonIterations = 5_000_000;
const measureDirectComparison = (match) => {
  const start = performance.now();
  let found = 0;
  for (let index = 0; index < directComparisonIterations; index += 1) {
    found += match(literalComparisonText) ? 1 : 0;
  }
  return {
    nsPerMatch:
      ((performance.now() - start) * 1_000_000) / directComparisonIterations,
    found,
  };
};
const literalVsRegex = {
  equality: measureDirectComparison(
    (text) => text === literalComparisonText
  ),
  regex: measureDirectComparison((text) => {
    literalComparisonRegex.lastIndex = 0;
    return literalComparisonRegex.test(text);
  }),
};

let productionBundle = false;
let savedGlobals = false;
try {
  const bundle = await readFile(
    new URL("../dist/nexskills.min.js", import.meta.url),
    "utf8"
  );
  savedGlobals = new Map(
    ["GMCP", "eventStream", "nexusclient", "nexSkills"].map((name) => [
      name,
      {
        existed: Object.hasOwn(globalThis, name),
        value: globalThis[name],
      },
    ])
  );
  globalThis.GMCP = {
    Char: { Status: { class: "occultist" } },
    Location: { areaid: 401, area: "the Underworld" },
  };
  globalThis.eventStream = { raiseEvent() {} };
  globalThis.nexusclient = {
    current_block: [],
    current_line: { index: 0 },
  };
  vm.runInThisContext(bundle);
  const productionMatcher = globalThis.nexSkills;
  productionBundle = {
    unmatched: measure(productionMatcher.checkSkills, zeroPercent),
    eligible5Percent: measure(productionMatcher.checkSkills, fivePercent),
    burstReplay: measure(
      productionMatcher.checkSkills,
      corpora.burstReplay,
      corpora.burstReplay.length
    ),
  };
} catch (error) {
  productionBundle = { error: error.message };
} finally {
  if (savedGlobals) {
    for (const [name, saved] of savedGlobals) {
      if (saved.existed) {
        globalThis[name] = saved.value;
      } else {
        delete globalThis[name];
      }
    }
  }
}

const report = {
  environment: {
    node: process.version,
    platform: `${os.type()} ${os.release()} ${os.arch()}`,
    cpu: os.cpus()[0]?.model,
    warmupLines: WARMUP_LINES,
    sampleLines: SAMPLE_LINES,
    samples: SAMPLES,
  },
  results,
  endToEndExactIndexAblation,
  exactLookupAblation,
  literalVsRegex,
  productionBundle,
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
