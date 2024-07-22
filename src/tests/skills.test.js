import { nexSkills } from "../base/nexSkills";
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
describe("Player Actions", () => {
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
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("self");
    expect(result.match).toBe("firstPerson");
  });
  test("Second Person", () => {
    const text =
      "Argwin passes his hand in front of you. You feel an invisible claw brush the back of your skull..";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.target).toBe("self");
    expect(result.user).toBe("Argwin");
    expect(result.match).toBe("secondPerson");
  });
  test("Third Person", () => {
    const text =
      "Khaseem reaches out and clenches a fist before Argwin, who screams and doubles over in agony as his skin suddenly bubbles with gangrenous growths.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("Khaseem");
    expect(result.match).toBe("thirdPerson");
  });

  test("Multiline Attack", () => {
    nexSkills.actions.push({
      id: "multiline",
      fullName: "Warp",
      firstPerson: [
        /^You touch (?<target>\w+)'s (?<limb>.+?), and it multiline test shrivels away\.$/,
        /^You make a sharp gesture toward (?<target>\w+), disrupting \w+ aura with the (?<info>\w+) affliction\.$/,
      ],
      secondPerson: false,
      thirdPerson: false,
      profession: ["occultist"],
      skill: "occultism",
      balance: "equilibrium",
      tags: ["pve", "damage"],
      length: 3.0,
    });
    const text =
      "You touch Argwin's left arm, and it multiline test shrivels away.";
    const result = nexSkills.checkSkills(text);
    console.log(result);
    expect(result).toBeTruthy();
    expect(result.id).toBe("multiline");
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("self");
    expect(result.match).toBe("firstPerson");
  });
});
