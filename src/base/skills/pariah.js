export const actions = [
  //#region Pariah
  {
    id: "serpent",
    fullName: "Epitaph Serpent",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a writhing logograph in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "skein",
    fullName: "Epitaph Skein",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a skein in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "sun",
    fullName: "Epitaph Sun",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a sunburst in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "fissure",
    fullName: "Epitaph Fissure",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Crimson fire trails the knife of (?<user>\w+) as \w+ slashes \w+ knife through the air before (?<target>.+?), a jagged logograph hanging in its passing\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 1,
    tags: ["raze"],
    length: 2.2,
  },
  //#endregion
];
