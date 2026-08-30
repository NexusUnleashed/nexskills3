import { loadCorpus } from "./lib/loadCorpus.mjs";

const MATCH_TYPES = ["firstPerson", "secondPerson", "thirdPerson"];

const { actionDefinitions, npcDefinitions } = await loadCorpus();

const stats = {
  actionDefinitions: actionDefinitions.length,
  npcDefinitions: npcDefinitions.length,
  npcMapKeys: 0,
  patternSlots: 0,
  individualElements: 0,
  regexElements: 0,
  stringElements: 0,
  arraySlots: 0,
  exactRegexElements: 0,
  exactCandidates: 0,
  prefixGates: 0,
  substringGates: 0,
  ungatedRegexes: 0,
  professionTokens: 0,
  actionPatternSlots: 0,
  npcPatternSlots: 0,
  actionElements: 0,
  npcElements: 0,
  multiLineElements: 0,
  exactIndexedEntries: 0,
  compiledPrefixEntries: 0,
  compiledSubstringEntries: 0,
  compiledUngatedEntries: 0,
};

const areaKeys = new Set();
for (const npc of npcDefinitions) {
  if (npc.areaId) {
    const ids = Array.isArray(npc.areaId) ? npc.areaId : [npc.areaId];
    ids.forEach((id) => areaKeys.add(id));
  } else {
    areaKeys.add(npc.areaName);
  }
}
stats.npcMapKeys = areaKeys.size;

const professions = new Set(
  actionDefinitions.flatMap((definition) => definition.profession)
);
stats.professionTokens = professions.size;

const analyze = await import(
  new URL("../src/base/matching/patternCompilation.js", import.meta.url)
);

for (const [scope, definitions] of [
  ["action", actionDefinitions],
  ["npc", npcDefinitions],
]) {
  for (const definition of definitions) {
    for (const matchType of MATCH_TYPES) {
    const pattern = definition.patterns?.[matchType];
    if (pattern === false || pattern === undefined || pattern === null) {
      continue;
    }

    stats.patternSlots += 1;
    stats[`${scope}PatternSlots`] += 1;
    if (Array.isArray(pattern)) {
      stats.arraySlots += 1;
      stats.multiLineElements += pattern.length;
    }
    const elements = Array.isArray(pattern) ? pattern : [pattern];
    stats.individualElements += elements.length;
    stats[`${scope}Elements`] += elements.length;

    const first = elements[0];
    if (typeof first === "string") {
      stats.exactIndexedEntries += 1;
    } else {
      const firstAnalysis = analyze.analyzeRegex(first);
      if (firstAnalysis.exactText !== false) {
        stats.exactIndexedEntries += 1;
      } else if (firstAnalysis.prefix) {
        stats.compiledPrefixEntries += 1;
      } else if (firstAnalysis.substring) {
        stats.compiledSubstringEntries += 1;
      } else {
        stats.compiledUngatedEntries += 1;
      }
    }

    for (const element of elements) {
      if (typeof element === "string") {
        stats.stringElements += 1;
        stats.exactCandidates += 1;
        continue;
      }

      stats.regexElements += 1;
      const result = analyze.analyzeRegex(element);
      if (result.exactText !== false) {
        stats.exactRegexElements += 1;
        stats.exactCandidates += 1;
      } else if (result.prefix) {
        stats.prefixGates += 1;
      } else if (result.substring) {
        stats.substringGates += 1;
      } else {
        stats.ungatedRegexes += 1;
      }
    }
    }
  }
}

const json = JSON.stringify(stats, null, 2);
process.stdout.write(`${json}\n`);

if (process.argv.includes("--check") && stats.exactRegexElements > 0) {
  process.stderr.write(
    `Found ${stats.exactRegexElements} fully literal regex definitions.\n`
  );
  process.exitCode = 1;
}
