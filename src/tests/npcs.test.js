import { nexSkills } from "../base/nexSkills";
beforeEach(() => {
  window.GMCP = {
    Location: {
      areaid: 401,
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
describe("NPC Actions", () => {
  test("First Person", () => {
    const text =
      "The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through your body, leaving abject terror and searing agony in his wake, before regaining physicality on the other side.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.target).toBe("self");
    expect(result.user).toBe("a vanguard angel");
    //expect(result.match).toBe("firstPerson");
  });
  test("Third Person", () => {
    const text =
      "The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through Argwin's convulsing body before regaining physicality on the other side.";
    const result = nexSkills.checkSkills(text);
    expect(result).toBeTruthy();
    expect(result.target).toBe("Argwin");
    expect(result.user).toBe("a vanguard angel");
    //expect(result.match).toBe("firstPerson");
  });
});
