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
});
