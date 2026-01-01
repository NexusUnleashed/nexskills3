import { SkillDefinition } from "../models/SkillDefinition";
export const curses = {
  bleed: new SkillDefinition({
    id: "bleed",
    fullName: "Bleed",
    thirdPerson:
      /^(?<user>\w+) points an imperious finger at (?<target>.+?) and blood begins to flow from \w+ pores\.$/,
    profession: ["shaman"],
    skill: "curses",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.2,
  }),
};

export default Object.values(curses);