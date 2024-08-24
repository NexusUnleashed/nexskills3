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

/*
An arrow flies towards you, shot by (Alyzar).
It strikes you, gouging a deep and bloody wound.
Your hearing is suddenly restored.

The meteor, shot by (Farrah), slams into your shield, shattering it.
Frozen by fear, you can do naught but watch, wide-eyed with terror, as (Farrah)'s blazing sphere streaks towards you and slams into your body, burning you horribly.  //meteor hit
*/
