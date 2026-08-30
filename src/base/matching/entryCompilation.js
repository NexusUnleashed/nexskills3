import { analyzeRegex } from "./patternCompilation";

export const MATCH_FIRST = 0;
export const MATCH_SECOND = 1;
export const MATCH_THIRD = 2;

export const MATCH_TYPE_NAMES = Object.freeze([
  "firstPerson",
  "secondPerson",
  "thirdPerson",
]);

export const MATCHER_EXACT = 0;
export const MATCHER_REGEX = 1;
export const MATCHER_SEQUENCE = 2;

const isMissingPattern = (pattern) =>
  pattern === false || pattern === null || pattern === undefined;

const compileElement = (pattern) => {
  if (typeof pattern === "string") {
    return Object.freeze({
      kind: MATCHER_EXACT,
      text: pattern,
      regex: false,
      gate: false,
      sub: false,
    });
  }

  if (!(pattern instanceof RegExp)) {
    throw new TypeError("Patterns must be strings, RegExp objects, or arrays");
  }

  const analysis = analyzeRegex(pattern);
  if (analysis.exactText !== false) {
    return Object.freeze({
      kind: MATCHER_EXACT,
      text: analysis.exactText,
      regex: false,
      gate: false,
      sub: false,
    });
  }

  return Object.freeze({
    kind: MATCHER_REGEX,
    text: false,
    regex: new RegExp(pattern.source, pattern.flags),
    gate: analysis.prefix,
    sub: analysis.substring,
  });
};

const compileSlot = (pattern) => {
  if (Array.isArray(pattern)) {
    if (pattern.length === 0) {
      throw new TypeError("Multi-line pattern arrays cannot be empty");
    }
    const elements = Object.freeze(pattern.map(compileElement));
    const first = elements[0];
    return {
      matcherKind: MATCHER_SEQUENCE,
      pattern: elements,
      exactText: first.kind === MATCHER_EXACT ? first.text : false,
      gate: first.gate,
      sub: first.sub,
    };
  }

  const element = compileElement(pattern);
  return {
    matcherKind: element.kind,
    pattern: element,
    exactText: element.kind === MATCHER_EXACT ? element.text : false,
    gate: element.gate,
    sub: element.sub,
  };
};

const defaultsFor = (definition, matchTypeIdx, definitionType) => {
  if (definitionType === "npc") {
    return { defaultUser: definition.user || "", defaultTarget: "self" };
  }
  if (matchTypeIdx === MATCH_FIRST) {
    return { defaultUser: "self", defaultTarget: "" };
  }
  if (matchTypeIdx === MATCH_SECOND) {
    return { defaultUser: "", defaultTarget: "self" };
  }
  return { defaultUser: "", defaultTarget: "" };
};

export const compileDefinitionEntries = (definitions, definitionType) => {
  const entries = [];
  let order = 0;
  const matchTypes =
    definitionType === "npc"
      ? [MATCH_FIRST, MATCH_THIRD]
      : [MATCH_FIRST, MATCH_SECOND, MATCH_THIRD];

  for (const definition of definitions) {
    for (const matchTypeIdx of matchTypes) {
      const matchType = MATCH_TYPE_NAMES[matchTypeIdx];
      const pattern =
        definition.patterns?.[matchType] ?? definition[matchType];
      if (isMissingPattern(pattern)) {
        continue;
      }

      const compiled = compileSlot(pattern);
      entries.push(
        Object.freeze({
          def: definition,
          order,
          matchTypeIdx,
          matcherKind: compiled.matcherKind,
          pattern: compiled.pattern,
          exactText: compiled.exactText,
          gate: compiled.gate,
          sub: compiled.sub,
          bucketKey: compiled.gate ? compiled.gate[0] : false,
          firstPersonProfessions:
            definitionType === "action" && matchTypeIdx === MATCH_FIRST
              ? definition.profession
              : false,
          ...defaultsFor(definition, matchTypeIdx, definitionType),
        })
      );
      order += 1;
    }
  }

  return Object.freeze(entries);
};

const freezePattern = (pattern) => {
  if (Array.isArray(pattern)) {
    pattern.forEach(freezePattern);
    Object.freeze(pattern);
  } else if (pattern instanceof RegExp) {
    Object.freeze(pattern);
  }
};

export const freezeDefinition = (definition) => {
  if (definition.patterns) {
    Object.values(definition.patterns).forEach(freezePattern);
    Object.freeze(definition.patterns);
  }

  for (const value of Object.values(definition)) {
    if (Array.isArray(value)) {
      Object.freeze(value);
    }
  }

  return Object.freeze(definition);
};
