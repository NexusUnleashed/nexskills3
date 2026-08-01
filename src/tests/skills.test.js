import { nexSkills } from "../base/nexSkills";
import { SkillDefinition } from "../base/models/SkillDefinition";
beforeEach(() => {
  window.GMCP = {
    Location: {
      areaId: 21,
    },
    Char: {
      Status: {
        class: "occultist",
      },
    },
  };

  window.raisedEvents = [];
  window.eventStream = {
    raiseEvent(name, action) {
      window.raisedEvents.push({ name, action });
    },
  };
  window.nexusclient = {
    current_block: [
      {
        parsed_line: {
          text() {
            return "You touch Argwin's left arm, and it multiline test shrivels away.";
          },
        },
      },
      {
        parsed_line: {
          text() {
            return "You make a sharp gesture toward Argwin, disrupting his aura with the paralysis affliction.";
          },
        },
      },
    ],
    current_line: {
      index: 0,
    },
  };
});
describe("Basic 1st 2nd 3rd Person", () => {
  test("No match", () => {
    const text =
      "This is a story about a pattern that did not match anything that was expected of it.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBe(false);
  });
  test("First Person", () => {
    const text =
      "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.id).toBe("interlink");
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("self");
    expect(result.matchType).toBe("firstPerson");
  });
  test("Skill match events", () => {
    const text =
      "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm.";
    const result = nexSkills.checkSkills(text);

    expect(result).toBeTruthy();
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.occultism",
      "nexskill.match.skill.occultism.interlink",
    ]);
  });
  test("Second Person", () => {
    const text =
      "Argwin passes his hand in front of you. You feel an invisible claw brush the back of your skull..";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.id).toBe("whisperingmadness");
    expect(result.target).toBe("self");
    expect(result.user).toBe("Argwin");
    expect(result.matchType).toBe("secondPerson");
  });
  test("Third Person", () => {
    const text =
      "Khaseem reaches out and clenches a fist before Argwin, who screams and doubles over in agony as his skin suddenly bubbles with gangrenous growths.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.id).toBe("warp");
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("Khaseem");
    expect(result.matchType).toBe("thirdPerson");
  });
  test("Seared Glyph", () => {
    const text =
      "Fire lashes out from a Shield of Absorption, ravaging the unsuspecting form of an angel spearbearer with its insatiable fury.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.id).toBe("searedglyph");
    expect(result.target).toBe("an angel spearbearer");
    expect(result.user).toBe("self");
    expect(result.matchType).toBe("firstPerson");
  });
});

describe("finalizeCheck event routing", () => {
  const fixtures = [];

  const register = (options) => {
    // Definitions without a skill warn on construction; that path is asserted
    // separately, so keep it out of the test output here.
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const definition = new SkillDefinition(options);
    warn.mockRestore();

    nexSkills.actions.push(definition);
    fixtures.push(definition);
    return definition;
  };

  afterEach(() => {
    fixtures.splice(0).forEach((definition) => {
      const index = nexSkills.actions.indexOf(definition);
      if (index !== -1) {
        nexSkills.actions.splice(index, 1);
      }
    });
    vi.restoreAllMocks();
  });

  test("A throwing reaction is contained and the match still routes", () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    register({
      id: "throwingfixture",
      fullName: "Throwing Fixture",
      firstPerson: /^You test the throwing fixture\.$/,
      profession: ["general"],
      skill: "fixtures",
      reaction() {
        throw new TypeError("reaction blew up");
      },
    });

    const result = nexSkills.checkSkills("You test the throwing fixture.");

    expect(result).toBeTruthy();
    expect(result.id).toBe("throwingfixture");
    expect(error).toHaveBeenCalled();
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.error.reaction",
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.fixtures",
      "nexskill.match.skill.fixtures.throwingfixture",
    ]);

    const [reported] = window.raisedEvents;
    expect(reported.action.error).toBeInstanceOf(TypeError);
    expect(reported.action.action.id).toBe("throwingfixture");
  });

  test("A reaction that rewrites the id routes to the new id", () => {
    register({
      id: "renamefixture",
      fullName: "Rename Fixture",
      firstPerson: /^You test the rename fixture\.$/,
      profession: ["general"],
      skill: "fixtures",
      reaction(action) {
        action.id = "renamed";
      },
    });

    const result = nexSkills.checkSkills("You test the rename fixture.");

    expect(result.id).toBe("renamed");
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
      "nexskill.match.skill.fixtures",
      "nexskill.match.skill.fixtures.renamed",
    ]);
  });

  test("A reaction that clears matchType voids the match", () => {
    register({
      id: "voidfixture",
      fullName: "Void Fixture",
      firstPerson: /^You test the void fixture\.$/,
      profession: ["general"],
      skill: "fixtures",
      reaction(action) {
        action.matchType = false;
      },
    });

    const result = nexSkills.checkSkills("You test the void fixture.");

    expect(result).toBe(false);
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match.voided",
    ]);
    expect(window.raisedEvents[0].action.id).toBe("voidfixture");
  });

  test("A definition missing its skill raises no empty-segment events", () => {
    register({
      id: "orphanfixture",
      fullName: "Orphan Fixture",
      firstPerson: /^You test the orphan fixture\.$/,
      profession: ["general"],
    });

    const result = nexSkills.checkSkills("You test the orphan fixture.");

    expect(result).toBeTruthy();
    expect(window.raisedEvents.map(({ name }) => name)).toEqual([
      "nexskill.match",
      "nexskill.match.skill",
    ]);
  });
});

describe("Event route segments", () => {
  test("Skill ids and groups are valid event route segments", () => {
    const invalidSegments = nexSkills.actions.flatMap((action) =>
      [
        ["skill", action.skill],
        ["id", action.id],
      ]
        .filter(([, value]) => !/^[a-z0-9]+$/.test(value))
        .map(([field, value]) => ({
          field,
          value,
          fullName: action.fullName,
        }))
    );

    expect(invalidSegments).toEqual([]);
  });
});

describe("Advanced Patterns", () => {
  test("Multiline Attack", () => {
    window.nexusclient = {
      current_block: [
        {
          parsed_line: {
            text() {
              return "Buffer line at front.";
            },
          },
        },
        {
          parsed_line: {
            text() {
              return "You touch Argwin's left arm, and it multiline test shrivels away.";
            },
          },
        },
        {
          parsed_line: {
            text() {
              return "You make a sharp gesture toward Argwin, disrupting his aura with the paralysis affliction.";
            },
          },
        },
        {
          parsed_line: {
            text() {
              return "Buffer line at end.";
            },
          },
        },
      ],
      current_line: {
        index: 1,
      },
    };
    nexSkills.actions.push(
      new SkillDefinition({
      id: "multiline",
      fullName: "Warp",
      firstPerson: [
        /^You touch (?<target>\w+)'s (?<limb>.+?), and it multiline test shrivels away\.$/,
        /^You make a sharp gesture toward (?<target>\w+), disrupting \w+ aura with the (?<info>\w+) affliction\.$/,
      ],
      profession: ["occultist"],
      skill: "occultism",
      balance: "equilibrium",
      tags: ["pve", "damage"],
      length: 3.0,
      })
    );
    const text =
      "This doesn't matter because multi line uses the current_line indexes.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.id).toBe("multiline");
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("self");
    expect(result.matchType).toBe("firstPerson");
  });
});
