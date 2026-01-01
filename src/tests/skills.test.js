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

  window.eventStream = {
    raiseEvent() {
      return;
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
