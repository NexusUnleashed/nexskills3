export const gear = {
  gearDamageOnStrike: {
    id: "gearDamageOnStrike",
    fullName: "Gear Strike",
    firstPerson:
      /^Your gear enhances your strike with additional (.+) damage\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  },
  gearDamageOnInterval: {
    id: "gearDamageOnInterval",
    fullName: "Gear Burst",
    firstPerson:
      /^\w+ force tears at (.+?), ravaging \w+ mind in violent tremors\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  },
  firePlaneBonus: {
    id: "firePlaneBonus",
    fullName: "Fire Plane",
    firstPerson:
      /^Terrible flames continue to ravage (.+?), the wrath of Kkractle unabating\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["general"],
    skill: "gear",
    balance: "free",
    tags: ["damage", "pve"],
    length: 0,
  },
};

export default Object.values(gear);
