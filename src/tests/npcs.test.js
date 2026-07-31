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
  test("NPC match events", () => {
    const text =
      "The form of a vanguard angel shifts abruptly to an incorporeal mist which passes through your body, leaving abject terror and searing agony in his wake, before regaining physicality on the other side.";
    const result = nexSkills.checkSkills(text);

    expect(result).toBeTruthy();
    // Filtered because nexskill.area.changed fires from module-level state and
    // would otherwise appear only in whichever test happens to run first.
    expect(
      window.raisedEvents
        .map(({ name }) => name)
        .filter((name) => name.startsWith("nexskill.match"))
    ).toEqual(["nexskill.match", "nexskill.match.npc"]);
  });

  test("Area change events", () => {
    const unmatched = "Nothing whatsoever in this line resembles a pattern.";

    window.GMCP.Location = { areaid: 401 };
    nexSkills.checkSkills(unmatched);
    window.raisedEvents.length = 0;

    window.GMCP.Location = { areaid: 51, area: "Eleusis" };
    expect(nexSkills.checkSkills(unmatched)).toBe(false);

    const areaEvents = window.raisedEvents.filter(
      ({ name }) => name === "nexskill.area.changed"
    );
    expect(areaEvents).toHaveLength(1);
    expect(areaEvents[0].action).toEqual({
      area: "Eleusis",
      previous: 401,
      npcs: [],
    });
  });

  test("An unchanged area does not re-raise", () => {
    const unmatched = "Nothing whatsoever in this line resembles a pattern.";

    window.GMCP.Location = { areaid: 401 };
    nexSkills.checkSkills(unmatched);
    window.raisedEvents.length = 0;

    nexSkills.checkSkills(unmatched);

    expect(
      window.raisedEvents.filter(
        ({ name }) => name === "nexskill.area.changed"
      )
    ).toHaveLength(0);
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
