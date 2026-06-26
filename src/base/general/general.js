import { SkillDefinition } from "../models/SkillDefinition";
export const general = {
  npcSlain: new SkillDefinition({
    id: "npcSlain",
    fullName: "SLAIN",
    firstPerson: /^You have slain (?<target>.+?), retrieving the corpse\.$/,
    profession: ["general"],
    skill: "slain",
    balance: "free",
    tags: [],
    length: 0,
  }),
  rebounding: new SkillDefinition({
    id: "rebounding",
    fullName: "Rebounding",
    firstPerson: /^You feel an aura of rebounding surround you\.$/,
    thirdPerson:
      /^You suddenly perceive the vague outline of an aura of rebounding around (?<user>\w+)\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "free",
    tags: [],
    length: 0,
  }),
  prismatic: new SkillDefinition({
    id: "prismatic",
    fullName: "Prismatic",
    firstPerson:
      /^You pluck at the strings on .+, and a bright, jovial tune accompanies the weaving of a prismatic barrier around you\.$/,
    thirdPerson:
      /^(?<user>\w+) plucks at the strings on .+, and a bright, jovial tune accompanies the weaving of a prismatic barrier around \w+\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  }),
  curseward: new SkillDefinition({
    id: "curseward",
    fullName: "Curseward",
    firstPerson:
      /^You bring a curseward into being to protect you from harm\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  }),
};

//Atalkez raises his hands dramatically and summons an icewall to the in.
export default Object.values(general);