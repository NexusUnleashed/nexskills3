export const oppression = {
  //#region Oppression
  exploit: {
    id: "exploit",
    fullName: "Hellforge Exploit",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) sags like a puppet with its strings cut, \w+ eyes twitching madly as \w+ stares about in all directions\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    tags: ["aff"],
    affs: ["weariness", "paranoia"],
    length: 3.0,
  },
  //#endregion
};

export default Object.values(oppression);
