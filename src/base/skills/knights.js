const knights = {
  engage: {
    id: "engage",
    fullName: "Engaged",
    firstPerson: /^You move in to engage (?<target>\w+)\.$/,
    secondPerson: /^(?<user>\w+) moves in to engage you\.$/,
    thirdPerson: /^(?<user>\w+) moves in to engage (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "equilibrium",
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
    tags: [],
    length: 2.5,
  },
};

export default Object.values(knights);