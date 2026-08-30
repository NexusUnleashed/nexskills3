import { actionDefinitions, npcDefinitions } from "../base/definitionCorpus";
import { createNexSkills } from "../base/nexSkills";
import { analyzeRegex } from "../base/matching/patternCompilation";
import { generateRegexWitness } from "../../scripts/lib/regexWitness.mjs";

const MATCH_TYPES = ["firstPerson", "secondPerson", "thirdPerson"];

const slots = [...actionDefinitions, ...npcDefinitions].flatMap((definition) =>
  MATCH_TYPES.flatMap((matchType) => {
    const pattern = definition.patterns[matchType];
    return pattern === false ? [] : [{ definition, matchType, pattern }];
  })
);

const elements = slots.flatMap(({ definition, matchType, pattern }) =>
  (Array.isArray(pattern) ? pattern : [pattern]).map((element, elementIndex) => ({
    definition,
    matchType,
    element,
    elementIndex,
  }))
);

describe("registered definition corpus", () => {
  test("contains no needless fully literal regexes", () => {
    const needless = elements
      .filter(({ element }) => element instanceof RegExp)
      .filter(({ element }) => analyzeRegex(element).exactText !== false)
      .map(({ definition, matchType, elementIndex }) => ({
        id: definition.id ?? definition.user,
        matchType,
        elementIndex,
      }));
    expect(needless).toEqual([]);
  });

  test("every regex has a deterministic positive witness satisfying its gate", () => {
    const failures = [];
    for (const { definition, matchType, element, elementIndex } of elements) {
      if (!(element instanceof RegExp)) {
        continue;
      }
      try {
        const witness = generateRegexWitness(element);
        const analysis = analyzeRegex(element);
        const validator = new RegExp(element.source, element.flags);
        validator.lastIndex = 0;
        if (
          !validator.test(witness) ||
          (analysis.prefix && !witness.startsWith(analysis.prefix)) ||
          (analysis.substring && !witness.includes(analysis.substring))
        ) {
          throw new Error("witness failed regex or gate validation");
        }
      } catch (error) {
        failures.push({
          id: definition.id ?? definition.user,
          matchType,
          elementIndex,
          regex: element.toString(),
          error: error.message,
        });
      }
    }
    expect(failures).toEqual([]);
  });

  test("every literal has positive and prefix/suffix/punctuation near misses", () => {
    const literals = elements
      .filter(({ element }) => typeof element === "string")
      .map(({ element }) => element);
    const expectedIds = new Map();
    const definitions = literals.map((literal, index) => {
      const id = `literal${index}`;
      if (!expectedIds.has(literal)) {
        expectedIds.set(literal, id);
      }
      return {
        id,
        profession: ["general"],
        eventSkill: "",
        patterns: {
          firstPerson: literal,
          secondPerson: false,
          thirdPerson: false,
        },
      };
    });
    const matcher = createNexSkills({
      actions: definitions,
      npcs: [],
      environment: {
        getRawClass: () => "unknown",
        getLocation: () => ({}),
        getLaterLineText: () => undefined,
        raiseEvent: () => {},
        reportReactionError: () => {},
      },
    });
    const failures = [];
    for (const { definition, matchType, element, elementIndex } of elements) {
      if (typeof element !== "string") {
        continue;
      }
      const negatives = [`prefix${element}`, `${element}suffix`, `${element}!`];
      const positive = matcher.checkSkills(element);
      if (
        positive?.id !== expectedIds.get(element) ||
        negatives.some(
          (negative) =>
            expectedIds.has(negative) || matcher.checkSkills(negative) !== false
        )
      ) {
        failures.push({
          id: definition.id ?? definition.user,
          matchType,
          elementIndex,
        });
      }
    }
    expect(failures).toEqual([]);
  });

  test("every multiline sequence has a complete deterministic block", () => {
    const blocks = slots
      .filter(({ pattern }) => Array.isArray(pattern))
      .map(({ pattern }) =>
        pattern.map((element) =>
          typeof element === "string"
            ? element
            : generateRegexWitness(element)
        )
      );
    expect(blocks).toHaveLength(21);
    expect(blocks.every((block) => block.every((line) => line !== undefined))).toBe(
      true
    );
  });
});
