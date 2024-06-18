export const weaponmastery = {
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
    multiLine: 0,
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
    multiLine: 0,
    tags: ["damage"],
    length: 0,
  },
  engage: {
    id: "engage",
    fullName: "Engaged",
    firstPerson: /^You move in to engage (?<target>\w+)\.$/,
    secondPerson: /^(?<user>\w+) moves in to engage you\.$/,
    thirdPerson: /^(?<user>\w+) moves in to engage (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "equilibrium",
    multiLine: 0,
    tags: [],
    length: 2.5,
  },
  engageHit: {
    id: "engageHit",
    fullName: "Engage Hit",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) lashes out at (?<target>\w+) as he turns to flee\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "equilibrium",
    multiLine: 0,
    tags: [],
    length: 2.5,
  },
  razeNone: {
    id: "razeNone",
    fullName: "Raze",
    firstPerson:
      /^You whip .+ through the air in front of (?<target>\w+), to no effect\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) lashes out at (?<target>\w+) as he turns to flee\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "equilibrium",
    multiLine: 0,
    info: "No raze",
    tags: ["raze"],
    length: 2.5,
  },
  raze: {
    id: "raze",
    fullName: "Raze",
    firstPerson: false,
    secondPerson: /^(?<user>\w+) razes your magical shield with .+\.$/,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "equilibrium",
    multiLine: 0,
    info: "Shield raze",
    tags: ["raze"],
    length: 2.5,
  },
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
