import { readFile } from "node:fs/promises";
import { loadModules } from "./lib/loadCorpus.mjs";
import { generateRegexWitness } from "./lib/regexWitness.mjs";

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

if (
  snapshot.actionCount !== actionDefinitions.length ||
  snapshot.npcCount !== npcDefinitions.length
) {
  throw new Error("Legacy snapshot no longer aligns with the registered corpus");
}

const deserializeElement = (element) =>
  element.kind === "string"
    ? element.value
    : new RegExp(element.source, element.flags);

const deserializePattern = (pattern) =>
  pattern.kind === "array"
    ? pattern.elements.map(deserializeElement)
    : deserializeElement(pattern);

const legacySlots = new Map(
  snapshot.patterns.map((record) => [
    `${record.scope}:${record.definitionIndex}:${record.matchType}`,
    deserializePattern(record.pattern),
  ])
);

const withoutReactions = (definitions) =>
  definitions.map((definition, definitionIndex) => ({
    ...definition,
    patterns: definition.patterns,
    profession: definition.profession ? [...definition.profession] : undefined,
    areaId: Array.isArray(definition.areaId)
      ? [...definition.areaId]
      : definition.areaId,
    tags: definition.tags ? [...definition.tags] : undefined,
    affs: definition.affs ? [...definition.affs] : undefined,
    reaction: undefined,
    __definitionIndex: definitionIndex,
  }));

const actions = withoutReactions(actionDefinitions);
const npcs = withoutReactions(npcDefinitions);
const state = {
  profession: "unknown",
  location: {},
  laterLines: [],
  events: [],
};
const matcher = createNexSkills({
  actions,
  npcs,
  environment: {
    getRawClass: () => state.profession,
    getLocation: () => state.location,
    getLaterLineText: (offset) => state.laterLines[offset - 1],
    raiseEvent: (name) => state.events.push(name),
    reportReactionError: () => {},
  },
});

const oldMatch = (text, pattern, lines) => {
  if (Array.isArray(pattern)) {
    let result = false;
    for (let index = 0; index < pattern.length; index += 1) {
      if (lines[index] === undefined) {
        return false;
      }
      result = lines[index].match(pattern[index]);
      if (!result) {
        return false;
      }
    }
    return result;
  }
  return text.match(pattern);
};

const processLegacy = (result, definition, matchType, user, target) => {
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

const legacySkills = (text, lines) => {
  const profession = state.profession.toLowerCase();
  for (let index = 0; index < actions.length; index += 1) {
    const definition = actions[index];
    if (
      definition.profession.includes(profession) ||
      definition.profession.includes("general")
    ) {
      const pattern = legacySlots.get(`action:${index}:firstPerson`);
      if (pattern !== undefined) {
        const action = processLegacy(
          oldMatch(text, pattern, lines),
          definition,
          "firstPerson",
          "self",
          ""
        );
        if (action) {
          if (action.target.toLowerCase() === "you") {
            action.target = "self";
          }
          return action;
        }
      }
    }

    for (const [matchType, user, target] of [
      ["secondPerson", "", "self"],
      ["thirdPerson", "", ""],
    ]) {
      const pattern = legacySlots.get(`action:${index}:${matchType}`);
      if (pattern === undefined) {
        continue;
      }
      const action = processLegacy(
        oldMatch(text, pattern, lines),
        definition,
        matchType,
        user,
        target
      );
      if (action) {
        return action;
      }
    }
  }
  return false;
};

const areaDefinitions = new Map();
for (const definition of npcs) {
  const keys = definition.areaId
    ? Array.isArray(definition.areaId)
      ? definition.areaId
      : [definition.areaId]
    : [definition.areaName];
  for (const key of keys) {
    if (!areaDefinitions.has(key)) {
      areaDefinitions.set(key, []);
    }
    areaDefinitions.get(key).push(definition);
  }
}

const legacyNpcs = (text, lines) => {
  const key = areaDefinitions.has(state.location.areaid)
    ? state.location.areaid
    : state.location.area;
  for (const definition of areaDefinitions.get(key) ?? []) {
    const index = definition.__definitionIndex;
    for (const matchType of ["firstPerson", "thirdPerson"]) {
      const pattern = legacySlots.get(`npc:${index}:${matchType}`);
      if (pattern === undefined) {
        continue;
      }
      const action = processLegacy(
        oldMatch(text, pattern, lines),
        definition,
        matchType,
        definition.user,
        "self"
      );
      if (action) {
        return action;
      }
    }
  }
  return false;
};

const witnessFor = (pattern) => {
  const elements = Array.isArray(pattern) ? pattern : [pattern];
  return elements.map((element) =>
    typeof element === "string" ? element : generateRegexWitness(element)
  );
};

const project = (action) =>
  action
    ? {
        definitionIndex: action.__definitionIndex,
        id: action.id,
        matchType: action.matchType,
        user: action.user,
        target: action.target,
        info: action.info,
        limb: action.limb,
        originalLine: action.originalLine,
        match0: action.match[0],
        matchIndex: action.match.index,
        matchInput: action.match.input,
        groups: action.match.groups,
      }
    : false;

const disagreements = [];
let comparisons = 0;

const compare = (label, legacy, current) => {
  comparisons += 1;
  if (JSON.stringify(project(legacy)) !== JSON.stringify(project(current))) {
    disagreements.push({ label, legacy: project(legacy), current: project(current) });
  }
};

for (const record of snapshot.patterns) {
  const pattern = deserializePattern(record.pattern);
  const lines = witnessFor(pattern);
  const text = lines[0];
  state.laterLines = lines.slice(1);
  state.events.length = 0;

  if (record.scope === "action") {
    const definition = actions[record.definitionIndex];
    state.profession =
      record.matchType === "firstPerson"
        ? (definition.profession.find((value) => value !== "general") ?? "unknown")
        : "unknown";
    state.location = {};
    compare(
      `action:${record.definitionIndex}:${record.matchType}`,
      legacySkills(text, lines),
      matcher.checkSkills(text)
    );
  } else if (record.matchType !== "secondPerson") {
    const definition = npcs[record.definitionIndex];
    const key = definition.areaId
      ? Array.isArray(definition.areaId)
        ? definition.areaId[0]
        : definition.areaId
      : definition.areaName;
    state.location = { areaid: key, area: definition.areaName };
    compare(
      `npc:${record.definitionIndex}:${record.matchType}`,
      legacyNpcs(text, lines),
      matcher.checkNpcs(text)
    );
  }
}

const unmatched = "A deterministic line which matches no registered definition.";
const professions = [
  ...new Set(actions.flatMap((definition) => definition.profession)),
  "unknown",
];
for (const profession of professions) {
  state.profession = profession;
  state.location = {};
  state.laterLines = [];
  compare(
    `unmatched-profession:${profession}`,
    legacySkills(unmatched, [unmatched]),
    matcher.checkSkills(unmatched)
  );
}

for (const key of [...areaDefinitions.keys(), "absent-area"]) {
  state.location = { areaid: key, area: "absent-area-name" };
  compare(
    `unmatched-area:${String(key)}`,
    legacyNpcs(unmatched, [unmatched]),
    matcher.checkNpcs(unmatched)
  );
}

let intentionalLiteralChecks = 0;
for (const record of snapshot.patterns) {
  const sourceElements =
    record.pattern.kind === "array"
      ? record.pattern.elements
      : [record.pattern];
  for (const element of sourceElements) {
    if (element.kind !== "string") {
      continue;
    }
    for (const nearMiss of [
      `prefix${element.value}`,
      `${element.value}suffix`,
      `${element.value}!`,
    ]) {
      intentionalLiteralChecks += 1;
      if (nearMiss === element.value) {
        disagreements.push({ label: "literal-near-miss-construction" });
      }
    }
  }
}

const report = {
  comparisons,
  intentionalLiteralChecks,
  disagreements: disagreements.length,
};
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
if (disagreements.length > 0) {
  process.stderr.write(`${JSON.stringify(disagreements.slice(0, 20), null, 2)}\n`);
  process.exitCode = 1;
}
