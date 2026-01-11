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
      /^\w+ force tears at (.+?), ravaging \w+ mind in violent tremors\.$/,
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
      /^Terrible flames continue to ravage (.+?), the wrath of Kkractle unabating\.$/,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  }),
};

export default Object.values(gear);
