import { SkillDefinition } from "../models/SkillDefinition";
export const tekura = {
  sdk: new SkillDefinition({
    id: "sdk",
    fullName: "Sidekick",
    thirdPerson:
      /^(?<user>\w+) pumps out at (?<target>.+?) with a powerful side kick\.$/,
    profession: ["monk"],
    skill: "tekura",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 4.0,
  }),
  upc: new SkillDefinition({
    id: "upc",
    fullName: "Uppercut",
    thirdPerson:
      /^(?<user>\w+) launches a powerful uppercut at (?<target>.+?)\.$/,
    profession: ["monk"],
    skill: "tekura",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 4.0,
  }),
};

export default Object.values(tekura);