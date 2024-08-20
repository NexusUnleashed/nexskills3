export const weaponmastery = {
  //#region 2H
  battlefuryFocus: {
    id: "battlefuryFocus",
    fullName: "Battlefury Focus",
    firstPerson:
      /^Channeling the fury of battle, you prepare to unleash a brutally swift stroke against your foe\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "free",
    tags: [],
    length: 0,
  },
  slaughter: {
    id: "slaughter",
    fullName: "Slaughter",
    firstPerson:
      /^Drawing back .+, you unleash a flesh-mincing blow at (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "balance",
    tags: ["damage"],
    length: 0,
  },
  //#endregion
  //#region SNB
  razeNone: {
    id: "razeNone",
    fullName: "Raze",
    firstPerson:
      /^You whip .+ through the air in front of (?<target>\w+), to no effect\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "No raze",
    tags: ["raze"],
    length: 2,
  },
  raze: {
    id: "raze",
    fullName: "Raze",
    firstPerson: false,
    secondPerson: /^(?<user>\w+) razes your magical shield with .+?\.$/,
    thirdPerson:
      /^(?<user>\w+) razes (?<target>.+?)'s magical shield with .+?\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Shield",
    tags: ["raze"],
    length: 2,
  },
  slice: {
    id: "slice",
    fullName: "Slice",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^The blade of Antoninus is a blur as he moves forward, slicing into Amranu\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: false,
    tags: [],
    length: 2.5,
  },
  smashHigh: {
    id: "smashHigh",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Antoninus swings his shield around, smashing the temple of Amranu with a backhanded blow\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "High",
    tags: [],
    length: 2.5,
  },
  smashMid: {
    id: "smashMid",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Lunging to the side, Antoninus brings his shield around to smash into the spine of Amranu\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Mid",
    tags: [],
    length: 2.5,
  },
  smashLow: {
    id: "smashLow",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Antoninus smashes the edge of .+? into the kneecaps of Amranu, causing him to stumble\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Low",
    tags: [],
    length: 2.5,
  },
  shieldStrikeHigh: {
    id: "shieldStrikeHigh",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "High",
    tags: [],
    length: 2.5,
  },
  shieldStrikeMid: {
    id: "shieldStrikeMid",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Antoninus draws Antoninus's lovely buckler back, then lunges forward with a savage strike to the ribs of Amranu\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "Mid",
    tags: [],
    length: 2.5,
  },
  shieldStrikeLow: {
    id: "shieldStrikeLow",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Antoninus lunges downward, slamming the edge of Antoninus's lovely buckler into the shins of Amranu\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "Low",
    tags: [],
    length: 2.5,
  },
  //#endregion
};

//Antoninus whips Matsuhama's morningstar toward the right leg of Archaeon.
//Archaeon goes down in a tangle of limbs as his legs are swept out from under him. //(Expend - morningstar - leg)
/*
20:13:36.078 Antoninus whips Matsuhama's morningstar toward the left leg of Archaeon.
20:13:36.078 Antoninus misses Archaeon with Matsuhama's morningstar.
20:13:36.078 Antoninus whips Matsuhama's morningstar toward the left leg of Archaeon.
20:13:36.078 Antoninus misses Archaeon with Matsuhama's morningstar.


10:59:25.048 Antoninus whips Matsuhama's morningstar toward the left leg of Archaeon.
10:59:25.048 The attack rebounds back onto Antoninus!
10:59:25.048 Antoninus whips Matsuhama's morningstar toward the left leg of Archaeon.
10:59:25.048 The attack rebounds back onto Antoninus!

*/

export default Object.values(weaponmastery);
