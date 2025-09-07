export const gear = {
  gearDamageOnStrike: {
    id: "gearDamageOnStrike",
    fullName: "Gear Bonus",
    firstPerson:
      /^Your gear enhances your strike with additional (\w+) damage\.$/,
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
