import { createNexSkills } from "../base/nexSkills";
import { DefinitionRegistry } from "../base/models/DefinitionRegistry";
import { NpcDefinition } from "../base/models/NpcDefinition";
import { SkillDefinition } from "../base/models/SkillDefinition";

const makeHost = ({ profession = "fixture", location = {} } = {}) => {
  const state = { profession, location, laterLines: [], events: [] };
  const environment = {
    getRawClass: () => state.profession,
    getLocation: () => state.location,
    getLaterLineText: (offset) => state.laterLines[offset - 1],
    raiseEvent: (name, payload) => state.events.push({ name, payload }),
    reportReactionError: () => {},
  };
  return { state, environment };
};

const skill = (id, pattern, options = {}) =>
  new SkillDefinition({
    id,
    skill: "fixtures",
    profession: ["general"],
    firstPerson: pattern,
    ...options,
  });

describe("compiled matcher", () => {
  test("strings are exact, including punctuation and empty text", () => {
    const host = makeHost();
    const matcher = createNexSkills({
      actions: [skill("literal", "Exact (punctuation)."), skill("empty", "")],
      npcs: [],
      environment: host.environment,
    });

    expect(matcher.checkSkills("Exact (punctuation).").id).toBe("literal");
    expect(matcher.checkSkills("prefix Exact (punctuation).")).toBe(false);
    expect(matcher.checkSkills("Exact punctuation.")).toBe(false);
    expect(matcher.checkSkills("Exact (punctuation). suffix")).toBe(false);
    expect(matcher.checkSkills("").id).toBe("empty");
  });

  test("an earlier regex beats a later exact collision", () => {
    const host = makeHost();
    const matcher = createNexSkills({
      actions: [
        skill("regexfirst", /^collision (?<info>.+)$/),
        skill("exactlater", "collision exact"),
      ],
      npcs: [],
      environment: host.environment,
    });
    expect(matcher.checkSkills("collision exact").id).toBe("regexfirst");
  });

  test("prefix, substring, and ungated regexes remain authoritative", () => {
    const host = makeHost();
    const matcher = createNexSkills({
      actions: [
        skill("prefix", /^a prefix fixture (?<target>.+)$/),
        skill("substring", /^(?<user>.+?) invokes required fixture text$/),
        skill("ungated", /^(?<user>\w+) x$/),
      ],
      npcs: [],
      environment: host.environment,
    });
    expect(matcher.checkSkills("a prefix fixture Target").id).toBe("prefix");
    expect(matcher.checkSkills("Someone invokes required fixture text").id).toBe(
      "substring"
    );
    expect(matcher.checkSkills("Someone x").id).toBe("ungated");
    expect(matcher.checkSkills("required fixture text only")).toBe(false);
  });

  test("stateful expressions reset lastIndex before every execution", () => {
    const host = makeHost();
    const matcher = createNexSkills({
      actions: [skill("stateful", /^stateful fixture$/gy)],
      npcs: [],
      environment: host.environment,
    });
    expect(matcher.checkSkills("stateful fixture").id).toBe("stateful");
    expect(matcher.checkSkills("stateful fixture").id).toBe("stateful");
  });

  test("first person is profession-filtered; other perspectives are global", () => {
    const host = makeHost({ profession: "unknown" });
    const matcher = createNexSkills({
      actions: [
        skill("specific", "Specific first.", { profession: ["fixture"] }),
        skill("observed", false, {
          profession: ["fixture"],
          secondPerson: "Specific second.",
          thirdPerson: "Specific third.",
        }),
      ],
      npcs: [],
      environment: host.environment,
    });

    expect(matcher.checkSkills("Specific first.")).toBe(false);
    expect(matcher.checkSkills("Specific second.").id).toBe("observed");
    expect(matcher.checkSkills("Specific third.").id).toBe("observed");
    host.state.profession = "FIXTURE";
    expect(matcher.checkSkills("Specific first.").id).toBe("specific");
    host.state.profession = "fixture";
    expect(matcher.checkSkills("Specific first.").id).toBe("specific");
  });

  test.each([
    "black dragon",
    "blue dragon",
    "golden dragon",
    "green dragon",
    "red dragon",
    "silver dragon",
  ])("builds an action index for %s", (profession) => {
    const host = makeHost({ profession });
    const matcher = createNexSkills({
      actions: [skill("dragon", "Dragon fixture.", { profession: [profession] })],
      npcs: [],
      environment: host.environment,
    });
    expect(matcher.checkSkills("Dragon fixture.").id).toBe("dragon");
  });

  test("area id takes precedence and area name is the fallback", () => {
    const host = makeHost({ location: { areaid: 7, area: "Fallback" } });
    const matcher = createNexSkills({
      actions: [],
      npcs: [
        new NpcDefinition({
          user: "id npc",
          areaId: 7,
          firstPerson: "ID attack.",
        }),
        new NpcDefinition({
          user: "name npc",
          areaName: "Fallback",
          firstPerson: "Name attack.",
        }),
      ],
      environment: host.environment,
    });

    expect(matcher.checkNpcs("ID attack.").user).toBe("id npc");
    expect(matcher.checkNpcs("Name attack.")).toBe(false);
    host.state.location = { areaid: 999, area: "Fallback" };
    expect(matcher.checkNpcs("Name attack.").user).toBe("name npc");
    expect(
      host.state.events.filter(({ name }) => name === "nexskill.area.changed")
    ).toHaveLength(2);
    matcher.checkNpcs("Nothing.");
    expect(
      host.state.events.filter(({ name }) => name === "nexskill.area.changed")
    ).toHaveLength(2);
  });

  test("finalization rejects mutation and remains idempotent", () => {
    const registry = new DefinitionRegistry();
    registry.addAction(skill("immutable", "Immutable."));
    const snapshot = registry.finalize();
    expect(registry.finalize()).toBe(snapshot);
    expect(Object.isFrozen(snapshot.actions)).toBe(true);
    expect(Object.isFrozen(snapshot.actions[0].profession)).toBe(true);
    expect(() => registry.addAction(skill("late", "Late."))).toThrow(
      "already finalized"
    );
  });

  test("finalization deep-freezes matching inputs on a shallow-frozen definition", () => {
    const patterns = {
      firstPerson: "Shallow frozen.",
      secondPerson: false,
      thirdPerson: false,
    };
    const definition = Object.freeze({
      id: "shallow",
      profession: Object.freeze(["general"]),
      patterns,
    });
    const registry = new DefinitionRegistry();
    registry.addAction(definition);
    registry.finalize();
    expect(Object.isFrozen(patterns)).toBe(true);
  });
});
