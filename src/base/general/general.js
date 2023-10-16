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
];
