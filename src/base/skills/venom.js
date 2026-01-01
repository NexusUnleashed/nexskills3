import { SkillDefinition } from "../models/SkillDefinition";
export const venom = {
  shrugging: new SkillDefinition({
    id: "shrugging",
    fullName: "Shrugging",
    thirdPerson:
      /^(?<user>\w+) hunches \w+ shoulders and lets out a soft hiss\.$/,
    profession: ["serpent"],
    skill: "venom",
    balance: "free",
    tags: ["cure"],
    length: 0.0,
  }),
};

export default Object.values(venom);