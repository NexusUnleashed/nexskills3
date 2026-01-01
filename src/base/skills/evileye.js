import { SkillDefinition } from "../models/SkillDefinition";
export const evileye = {
  stare: new SkillDefinition({
    id: "stare",
    fullName: "Stare",
    firstPerson: /^(?<user>\w+) stares at you with the evil eye\.$/,
    thirdPerson: /^(?<user>\w+) stares at (?<target>.+?) with the evil eye\.$/,
    profession: ["apostate"],
    skill: "evileye",
    balance: "balance",
    tags: [],
    length: 1.9,
  }),
  breach: new SkillDefinition({
    id: "breach",
    fullName: "Breach",
    firstPerson: /^Your curseward has been breached\!$/,
    profession: ["apostate"],
    skill: "evileye",
    balance: "balance",
    tags: [],
    length: 2.5,
  }),
};

export default Object.values(evileye);