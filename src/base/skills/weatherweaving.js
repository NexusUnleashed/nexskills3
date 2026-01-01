import { SkillDefinition } from "../models/SkillDefinition";
export const weatherweaving = {
  stormhammer: new SkillDefinition({
    id: "stormhammer x1",
    fullName: "Stormhammer",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>[^\.]+?)\.$/,
    profession: ["sylvan", "magi"],
    skill: "weatherweaving",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 6,
  }),
  stormhammer2: new SkillDefinition({
    id: "stormhammer2",
    fullName: "Stormhammer x2",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>[^\.]+?)\. The bolts ricochet off and slam into (?<target2>[^\.]+?)\.$/,
    profession: ["sylvan", "magi"],
    skill: "weatherweaving",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 6,
  }),
  stormhammer3: new SkillDefinition({
    id: "stormhammer3",
    fullName: "Stormhammer x3",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>[^\.]+?)\. The bolts ricochet off and slam into (?<target2>[^\.]+?)\. The bolts ricochet off and slam into (?<target3>.+?)\.$/,
    profession: ["sylvan", "magi"],
    skill: "weatherweaving",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 6,
  }),
};

export default Object.values(weatherweaving);