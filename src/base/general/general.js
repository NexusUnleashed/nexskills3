export const general = {
  npcSlain: {
    id: "npcSlain",
    fullName: "SLAIN",
    firstPerson: /^You have slain (?<target>.+?), retrieving the corpse\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "slain",
    balance: "free",
    tags: [],
    length: 0,
  },
  rebounding: {
    id: "rebounding",
    fullName: "Rebounding",
    firstPerson: /^You feel an aura of rebounding surround you\.$/,
    secondPerson: false,
    thirdPerson:
      /^You suddenly perceive the vague outline of an aura of rebounding around (?<user>\w+)\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "free",
    tags: [],
    length: 0,
  },
  prismatic: {
    id: "prismatic",
    fullName: "Prismatic",
    firstPerson:
      /^You pluck at the strings on .+, and a bright, jovial tune accompanies the weaving of a prismatic barrier around you\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) plucks at the strings on .+, and a bright, jovial tune accompanies the weaving of a prismatic barrier around \w+\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  },
  curseward: {
    id: "curseward",
    fullName: "Curseward",
    firstPerson:
      /^You bring a curseward into being to protect you from harm\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "defense",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  },
};

//Atalkez raises his hands dramatically and summons an icewall to the in.
export default Object.values(general);
