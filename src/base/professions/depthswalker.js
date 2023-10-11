export const actions = [
  {
    id: "reap",
    fullName: "Reap",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>.+?) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "instillleach",
    fullName: "Instill - Leach",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^As the weapon strikes (?<target>.+?), he seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
];
