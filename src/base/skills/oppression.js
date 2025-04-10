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
    info: "Weariness, Paranoia",
    affs: ["weariness", "paranoia"],
    length: 3.0,
  },
  torture: {
    id: "torture",
    fullName: "Hellforge Torture",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^An agonised expression contorts the face of (?<target>\w+)\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: "Haemophilia",
    tags: ["aff"],
    affs: ["haemophilia"],
    length: 3.0,
  },
  torment: {
    id: "torment",
    fullName: "Hellforge Torment",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: /^(?<target>\w+) stares about \w+ vacantly\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: "Confusion",
    tags: ["aff"],
    affs: ["confusion"],
    length: 3.0,
  },
  punishment: {
    id: "punishment",
    fullName: "Hellforge Punishment",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^The eyes of (?<target>\w+) roll back in \w+ head and blood begins to run from \w+ ears\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: false,
    tags: ["aff"],
    affs: [],
    length: 3.0,
  },
  agony: {
    id: "agony",
    fullName: "Agony",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^.+? trembles in the hand of (?<user>\w+) as it strikes (?<target>\w+), a sanguine mist engulfing its wielder\.$/,
    //The sanguine mist surrounding Tabethys billows and writhes exultantly. //--Aff cure line?
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    tags: ["cure"],
    affs: [],
    length: 0,
  },
  quash: {
    id: "quash",
    fullName: "Quash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) wreathes \w+ hand in black lightning, unleashing a savage backhand to the face of (?<target>\w+)\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 4.0,
  },
  //#endregion
};

export default Object.values(oppression);

//Agony
//The sanguine mist surrounding Tabethys billows and writhes exultantly.
//--Aff cure line?
