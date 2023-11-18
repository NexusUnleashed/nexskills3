export const actions = [
  //#region Curses
  {
    id: "bleed",
    fullName: "Bleed",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) points an imperious finger at (?<target>.+?) and blood begins to flow from \w+ pores\.$/,
    profession: ["shaman"],
    skill: "curses",
    balance: "balance",
    tags: ["damage"],
    length: 2.2,
  },
  //#endregion
];
