export const weatherweaving = {
  stormhammer: {
    id: "stormhammer",
    fullName: "Stormhammer",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["sylvan"],
    skill: "weatherweaving",
    balance: "equilibrium",
    multiLine: 0,
    tags: ["pve"],
    length: 6,
  },
  stormhammer2: {
    id: "stormhammer2",
    fullName: "Stormhammerx2",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>.+?)\. The bolts ricochet off and slam into (?<target2>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["sylvan"],
    skill: "weatherweaving",
    balance: "equilibrium",
    multiLine: 0,
    tags: ["pve"],
    length: 6,
  },
  stormhammer3: {
    id: "stormhammer3",
    fullName: "Stormhammerx3",
    firstPerson:
      /^The sky above grows dark as you call upon powerful magics\. Raising your hands balefully, you cause lightning bolts, the hammer of the storm, to shoot from your hands and slam into (?<target>.+?)\. The bolts ricochet off and slam into (?<target2>.+?)\. The bolts ricochet off and slam into (?<target3>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["sylvan"],
    skill: "weatherweaving",
    balance: "equilibrium",
    multiLine: 0,
    tags: ["pve"],
    length: 6,
  },
};

export default Object.values(weatherweaving);
