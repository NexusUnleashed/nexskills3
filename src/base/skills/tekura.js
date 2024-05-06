export const actions = [
  {
    id: "sdk",
    fullName: "Sidekick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) pumps out at (?<target>.+?) with a powerful side kick\.$/,
    profession: ["monk"],
    skill: "tekura",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 4.0,
  },
  {
    id: "upc",
    fullName: "Uppercut",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) launches a powerful uppercut at (?<target>.+?)\.$/,
    profession: ["monk"],
    skill: "tekura",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 4.0,
  },
];
