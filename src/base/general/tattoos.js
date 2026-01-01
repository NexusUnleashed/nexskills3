import { SkillDefinition } from "../models/SkillDefinition";
//A nearly invisible magical shield forms around a sturdy troll woman.
export const tattoos = {
  shield: new SkillDefinition({
    id: "shield",
    fullName: "Shield",
    firstPerson:
      /^You touch the tattoo and a nearly invisible magical shield forms around you\.$/,
    thirdPerson:
      /^A nearly invisible magical shield forms around (?<user>.+?)\.$/,
    profession: ["general"],
    skill: "tattoos",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  }),
  tree: new SkillDefinition({
    id: "tree",
    fullName: "Tree",
    firstPerson: /^You touch the tree of life tattoo\.$/,
    thirdPerson: /^(?<user>\w+) touches a tree of life tattoo\.$/,
    profession: ["general"],
    skill: "tattoos",
    balance: "free",
    tags: [],
    length: 0,
  }),
  cloak: new SkillDefinition({
    id: "cloak",
    fullName: "Cloak",
    firstPerson:
      /^You caress the tattoo and immediately you feel a cloak of protection surround you\.$/,
    thirdPerson: /^(?<user>\w+) touches a cloak tattoo\.$/,
    profession: ["general"],
    skill: "tattoos",
    balance: "free",
    tags: [],
    length: 0,
  }),
};

export default Object.values(tattoos);