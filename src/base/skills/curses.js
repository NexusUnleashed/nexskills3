export const curses = {
  //#region Curses
  bleed: {
    id: "bleed",
    fullName: "Bleed",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) points an imperious finger at (?<target>.+?) and blood begins to flow from \w+ pores\.$/,
    profession: ["shaman"],
    skill: "curses",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.2,
  },
  //#endregion
};

export default Object.values(curses);
