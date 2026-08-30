import { createNexSkills, nexSkills } from "../base/nexSkills";
import { SkillDefinition } from "../base/models/SkillDefinition";

beforeEach(() => {
  window.GMCP = {
    Location: { areaid: 21 },
    Char: { Status: { class: "occultist" } },
  };
  window.raisedEvents = [];
  window.eventStream = {
    raiseEvent(name, action) {
      window.raisedEvents.push({ name, action });
    },
  };
  window.nexusclient = {
    current_block: [],
    current_line: { index: 0 },
  };
});

const createFixture = (options) => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  const definition = new SkillDefinition(options);
  warn.mockRestore();
  return createNexSkills({ actions: [definition], npcs: [] });
};

describe("Basic 1st 2nd 3rd Person", () => {
  test("No match", () => {
    const text =
      "This is a story about a pattern that did not match anything that was expected of it.";
    expect(nexSkills.checkSkills(text)).toBe(false);
  });

  test("First Person", () => {
    const result = nexSkills.checkSkills(
      "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm."
    );
    expect(result).toMatchObject({
      id: "interlink",
      target: "Argwin",
      user: "self",
      matchType: "firstPerson",
    });
  });

  test("Skill match events", () => {
    nexSkills.checkSkills(
      "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm."
    );
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.occultism",
      "nexskill.match.skill.occultism.interlink",
    ]);
  });

  test("Second Person", () => {
    const result = nexSkills.checkSkills(
      "Argwin passes his hand in front of you. You feel an invisible claw brush the back of your skull.."
    );
    expect(result).toMatchObject({
      id: "whisperingmadness",
      target: "self",
      user: "Argwin",
      matchType: "secondPerson",
    });
  });

  test("Third Person", () => {
    const result = nexSkills.checkSkills(
      "Khaseem reaches out and clenches a fist before Argwin, who screams and doubles over in agony as his skin suddenly bubbles with gangrenous growths."
    );
    expect(result).toMatchObject({
      id: "warp",
      target: "Argwin",
      user: "Khaseem",
      matchType: "thirdPerson",
    });
  });

  test("First-person targets normalize you to self", () => {
    const matcher = createFixture({
      id: "selftarget",
      skill: "fixtures",
      profession: ["general"],
      firstPerson: /^You point at (?<target>you)\.$/,
    });
    expect(matcher.checkSkills("You point at you.").target).toBe("self");
  });

  test("Seared Glyph", () => {
    const result = nexSkills.checkSkills(
      "Fire lashes out from a Shield of Absorption, ravaging the unsuspecting form of an angel spearbearer with its insatiable fury."
    );
    expect(result).toMatchObject({
      id: "searedglyph",
      target: "an angel spearbearer",
      user: "self",
      matchType: "firstPerson",
    });
  });
});

describe("finalizeCheck event routing", () => {
  afterEach(() => vi.restoreAllMocks());

  test("A throwing reaction is contained and the match still routes", () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    const matcher = createFixture({
      id: "throwingfixture",
      fullName: "Throwing Fixture",
      firstPerson: "You test the throwing fixture.",
      profession: ["general"],
      skill: "fixtures",
      reaction() {
        throw new TypeError("reaction blew up");
      },
    });

    const result = matcher.checkSkills("You test the throwing fixture.");
    expect(result.id).toBe("throwingfixture");
    expect(error).toHaveBeenCalled();
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.error.reaction",
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.fixtures",
      "nexskill.match.skill.fixtures.throwingfixture",
    ]);
    expect(window.raisedEvents[0].action.error).toBeInstanceOf(TypeError);
  });

  test("A reaction that rewrites the id routes to the new id", () => {
    const matcher = createFixture({
      id: "renamefixture",
      firstPerson: "You test the rename fixture.",
      profession: ["general"],
      skill: "fixtures",
      reaction(action) {
        action.id = "renamed";
      },
    });

    expect(matcher.checkSkills("You test the rename fixture.").id).toBe(
      "renamed"
    );
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.fixtures",
      "nexskill.match.skill.fixtures.renamed",
    ]);
  });

  test("A reaction that clears matchType voids the match", () => {
    const matcher = createFixture({
      id: "voidfixture",
      firstPerson: "You test the void fixture.",
      profession: ["general"],
      skill: "fixtures",
      reaction(action) {
        action.matchType = false;
      },
    });

    expect(matcher.checkSkills("You test the void fixture.")).toBe(false);
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match.voided",
    ]);
  });

  test("A definition missing its skill raises no empty-segment events", () => {
    const matcher = createFixture({
      id: "orphanfixture",
      firstPerson: "You test the orphan fixture.",
      profession: ["general"],
    });

    expect(matcher.checkSkills("You test the orphan fixture.")).toBeTruthy();
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
    ]);
  });

  test("Matched affliction and tag arrays are fresh clones", () => {
    const matcher = createFixture({
      id: "arrays",
      firstPerson: "You test cloned arrays.",
      profession: ["general"],
      skill: "fixtures",
      affs: ["paralysis"],
      tags: ["affs"],
    });
    const first = matcher.checkSkills("You test cloned arrays.");
    first.affs.push("asthma");
    first.tags.push("changed");
    const second = matcher.checkSkills("You test cloned arrays.");
    expect(second.affs).toEqual(["paralysis"]);
    expect(second.tags).toEqual(["affs"]);
  });
});

describe("Definition and multiline contracts", () => {
  test("Skill ids and groups are valid event route segments", () => {
    const invalidSegments = nexSkills.actions.flatMap((action) =>
      [
        ["skill", action.skill],
        ["id", action.id],
      ]
        .filter(([, value]) => !/^[a-z0-9]+$/.test(value))
        .map(([field, value]) => ({ field, value, fullName: action.fullName }))
    );
    expect(invalidSegments).toEqual([]);
  });

  test("The global definition list and matching inputs are immutable", () => {
    expect(Object.isFrozen(nexSkills.actions)).toBe(true);
    expect(Object.isFrozen(nexSkills.actions[0])).toBe(true);
    expect(Object.isFrozen(nexSkills.actions[0].patterns)).toBe(true);
    expect(() => nexSkills.actions.push({})).toThrow(TypeError);
  });

  test("Multiline matching uses supplied text for element zero and final result", () => {
    const matcher = createFixture({
      id: "multiline",
      firstPerson: [
        "You touch Argwin's left arm, and it shrivels away.",
        /^You disrupt (?<target>\w+) with (?<info>\w+)\.$/,
      ],
      profession: ["occultist"],
      skill: "occultism",
    });
    window.nexusclient.current_block = [
      { parsed_line: { text: () => "Unrelated current-block line." } },
      {
        parsed_line: {
          text: () => "You disrupt Argwin with paralysis.",
        },
      },
    ];

    const first = "You touch Argwin's left arm, and it shrivels away.";
    const result = matcher.checkSkills(first);
    expect(result).toMatchObject({ target: "Argwin", info: "paralysis" });
    expect(result.originalLine).toBe("You disrupt Argwin with paralysis.");
    expect(result.match.input).toBe("You disrupt Argwin with paralysis.");
    expect(matcher.checkSkills("Different supplied line.")).toBe(false);
  });

  test("A truncated multiline block returns false", () => {
    const matcher = createFixture({
      id: "truncated",
      firstPerson: ["First line.", "Missing line."],
      profession: ["general"],
      skill: "fixtures",
    });
    window.nexusclient.current_block = [];
    expect(matcher.checkSkills("First line.")).toBe(false);
  });

  test("A regex-first sequence can finish on an exact later line", () => {
    const matcher = createFixture({
      id: "mixedsequence",
      firstPerson: [/^First (?<info>\w+) line\.$/, "Exact final line."],
      profession: ["general"],
      skill: "fixtures",
    });
    window.nexusclient.current_block = [
      { parsed_line: { text: () => "Current block element zero is ignored." } },
      { parsed_line: { text: () => "Exact final line." } },
    ];
    const result = matcher.checkSkills("First mixed line.");
    expect(result.originalLine).toBe("Exact final line.");
    expect(result.match.index).toBe(0);
    expect(result.match.input).toBe("Exact final line.");
  });
});
