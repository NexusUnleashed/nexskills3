import { SkillDefinition } from "../models/SkillDefinition";
export const devotion = {
  inquisition: new SkillDefinition({
    id: "inquisition",
    fullName: "Inquisition",
    thirdPerson:
      /^Pointing at \w+ with a single raised finger, (?<user>\w+) recites a list of (?<target>.+?)'s transgressions, condemning \w+ actions and words\. A blaze of holy fire surges about \w+ as he dictates \w+'s sentence\.$/,
    profession: ["priest"],
    skill: "devotion",
    balance: "equilibrium",
    tags: ["aff"],
    affs: ["inquisition"],
    length: 3.5,
  }),
  dazzle: new SkillDefinition({
    id: "dazzle",
    fullName: "Dazzle",
    thirdPerson:
      /^(?<user>\w+) directs a dazzling ray of light at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "devotion",
    balance: "equilibrium",
    tags: ["aff"],
    affs: ["stupidity"],
    length: 2.5,
  }),
};

export default Object.values(devotion);