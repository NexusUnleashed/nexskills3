import { SkillDefinition } from "../../models/SkillDefinition";
export const depthswalker = {
  lash: new SkillDefinition({
    id: "lash",
    fullName: "Lash",
    firstPerson:
      /^You summon whips of shadow to viciously lash the form of (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  drain: new SkillDefinition({
    id: "drain",
    fullName: "Drain",
    firstPerson:
      /^You command the shadow of (?<target>.+?) to begin siphoning away the life of its host\.$/,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  drainTick: new SkillDefinition({
    id: "drainTick",
    fullName: "Drain Tick",
    thirdPerson:
      /^(?<target>.+?) grows paler as \w+ shadow grows more opaque\.$/,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  nakail: new SkillDefinition({
    id: "nakail",
    fullName: "Nakail",
    firstPerson:
      /^Directing your power against the magical shield surrounding (?<target>.+?), you intone, "Nakail"\.$/,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  }),
};

export default Object.values(depthswalker);