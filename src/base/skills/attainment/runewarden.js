import { SkillDefinition } from "../../models/SkillDefinition";
export const runewarden = {
  collide: new SkillDefinition({
    id: "collide",
    fullName: "Collide",
    firstPerson:
      /^You charge at (?<target>.+?), slamming into \w+ and throwing \w+ back\.$/,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  onslaught: new SkillDefinition({
    id: "onslaught",
    fullName: "Onslaught",
    firstPerson:
      /^You unleash a ferocious onslaught on (?<target>.+?), relentlessly pounding \w+ with .+\.$/,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  bulwark: new SkillDefinition({
    id: "bulwark",
    fullName: "Bulwark",
    firstPerson:
      /^The runes on your armour flare brightly as you adopt a defensive stance\.$/,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: [],
    length: 3.0,
  }),
  bulwark: new SkillDefinition({
    id: "bulwark",
    fullName: "Bulwark",
    firstPerson:
      /^You strike at (?<target>.+?)'s translucent shield with (?:a|an) .+?, drawing the outline of a rough rune that detonates, consuming the shield\.$/,
    profession: ["runewarden"],
    skill: "attainment",
    balance: "battlerage",
    tags: [],
    length: 3.0,
  }),
};

export default Object.values(runewarden);