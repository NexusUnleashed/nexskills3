import { SkillDefinition } from "../models/SkillDefinition";
export const gear = {
  gearDamageOnStrike: new SkillDefinition({
    id: "gearDamageOnStrike",
    fullName: "Gear Strike",
    firstPerson:
      /^Your gear enhances your strike with additional (.+) damage\.$/,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  }),
  gearDamageOnInterval: new SkillDefinition({
    id: "gearDamageOnInterval",
    fullName: "Gear Burst",
    firstPerson:
      /^\w+ force tears at (?<target>.+?), ravaging \w+ mind in violent tremors\.$/,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  }),
  gearDamageOnInterval2: new SkillDefinition({
    id: "gearDamageOnInterval2",
    fullName: "Gear Burst",
    firstPerson:
      /^Lightning arcs violently into (?<target>.+?), crackling with destructive energy\.$/,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  }),
  firePlaneBonus: new SkillDefinition({
    id: "firePlaneBonus",
    fullName: "Fire Plane",
    firstPerson:
      /^Terrible flames continue to ravage (?<target>.+?), the wrath of Kkractle unabating\.$/,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  }),
};

export default Object.values(gear);
