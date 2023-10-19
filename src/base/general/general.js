export const actions = [
  {
    id: "npcSlain",
    fullName: "SLAIN",
    firstPerson: /^You have slain (?<target>.+), retrieving the corpse\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "slain",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0,
  },
  {
    id: "rebounding",
    fullName: "Rebounding",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^You suddenly perceive the vague outline of an aura of rebounding around (?<user>.+?)\.$/,
    profession: ["general"],
    skill: "defense",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0,
  },
];





//Atalkez raises his hands dramatically and summons an icewall to the in.