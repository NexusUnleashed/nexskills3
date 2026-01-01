import { SkillDefinition } from "../models/SkillDefinition";
export const oppression = {
  //#region Oppression
  exploit: new SkillDefinition({
    id: "exploit",
    fullName: "Hellforge Exploit",
    thirdPerson:
      /^(?<target>.+?) sags like a puppet with its strings cut, \w+ eyes twitching madly as \w+ stares about in all directions\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    tags: ["aff"],
    info: "Weariness, Paranoia",
    affs: ["weariness", "paranoia"],
    length: 3.0,
  }),
  torture: new SkillDefinition({
    id: "torture",
    fullName: "Hellforge Torture",
    thirdPerson:
      /^An agonised expression contorts the face of (?<target>\w+)\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: "Haemophilia",
    tags: ["aff"],
    affs: ["haemophilia"],
    length: 3.0,
  }),
  torment: new SkillDefinition({
    id: "torment",
    fullName: "Hellforge Torment",
    thirdPerson: /^(?<target>\w+) stares about \w+ vacantly\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: "Confusion",
    tags: ["aff"],
    affs: ["confusion"],
    length: 3.0,
  }),
  punishment: new SkillDefinition({
    id: "punishment",
    fullName: "Hellforge Punishment",
    thirdPerson:
      /^The eyes of (?<target>\w+) roll back in \w+ head and blood begins to run from \w+ ears\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    info: false,
    tags: ["aff"],
    affs: [],
    length: 3.0,
  }),
  agony: new SkillDefinition({
    id: "agony",
    fullName: "Agony",
    thirdPerson:
      /^.+? trembles in the hand of (?<user>\w+) as it strikes (?<target>\w+), a sanguine mist engulfing its wielder\.$/,
    //The sanguine mist surrounding Tabethys billows and writhes exultantly. //--Aff cure line?
    profession: ["infernal"],
    skill: "oppression",
    balance: "free",
    tags: ["cure"],
    affs: [],
    length: 0,
  }),
  quash: new SkillDefinition({
    id: "quash",
    fullName: "Quash",
    thirdPerson:
      /^(?<user>\w+) wreathes \w+ hand in black lightning, unleashing a savage backhand to the face of (?<target>\w+)\.$/,
    profession: ["infernal"],
    skill: "oppression",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 4.0,
  }),
  //#endregion
};

export default Object.values(oppression);

//Agony
//The sanguine mist surrounding Tabethys billows and writhes exultantly.
//--Aff cure line?