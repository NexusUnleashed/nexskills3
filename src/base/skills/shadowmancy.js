export const shadowmancy = {
  reap: {
    //SHADOW REAP KHASEEM KALMIA
    //You rub some kalmia on a scythe of shadows.
    //You unleash a vicious reaping blow at Khaseem with a scythe of shadows.
    id: "reap",
    fullName: "Reap",
    firstPerson:
      /^You unleash a vicious reaping blow at (?<target>.+?) with .+\.$/,
    secondPerson:
      /^(?<user>\w+) delivers a lightning-fast strike to you with .+\.$/,
    thirdPerson:
      /^(?<user>\w+) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 2.4,
  },
  cull: {
    //SHADOW CULL KHASEEM KALMIA
    //You rub some kalmia on a scythe of shadows.
    //You lay into Khaseem with a vicious blow from a scythe of shadows.
    id: "cull",
    fullName: "Cull",
    firstPerson:
      /^You lay into (?<target>.+?) with a vicious blow from a scythe of shadows\.$/,
    secondPerson:
      /^(?<user>\w+) lays into you with a savage blow from a scythe of shadows\.$/,
    thirdPerson:
      /^(?<user>\w+) lays into (?<target>.+?) with a terrible blow from a scythe of shadows\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 3.35,
  },
  shadowStrike: {
    id: "shadowStrike",
    fullName: "Shadow Strike",
    firstPerson:
      /^Raising an insubstantial dagger, you point it at (?<target>.+?)\.$/,
    secondPerson:
      /^(?<user>\w+) raises an insubstantial dagger and points it at you with a sinister smile\.$/,
    thirdPerson:
      /^(?<user>\w+) raises an insubstantial dagger and points it at (?<target>.+?) with a sinister smile\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 1.3,
  },
  shadowStrikeKneel: {
    id: "shadowStrikeKneel",
    fullName: "Shadow Strike",
    firstPerson:
      /^Raising an insubstantial dagger to point at (?<target>.+?), you enunciate your command: "Kneel"\.$/,
    secondPerson:
      /^Raising an insubstantial dagger to point at you, (?<user>\w+) clearly enunciates a single directive: "Kneel"\.$/,
    thirdPerson:
      /^Raising an insubstantial dagger to point at (?<target>.+?), (?<user>\w+) enunciates a single directive: "Kneel"\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    info: "Kneel",
    affs: ["prone"],
    tags: ["aff"],
    length: 2.4,
  },
  instillDepression: {
    id: "instillDepression",
    fullName: "Instill - Depression",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, it burns with a sickly yellow light\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), it burns with a sickly yellow glow\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
  },
  instillRetribution: {
    id: "instillRetribution",
    fullName: "Instill - Retribution",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, the blade flashes an incandescent white\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), it blazes with incandescent white flame\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
  },
  instillMadness: {
    id: "instillMadness",
    fullName: "Instill - Madness",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your sanity slipping away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), \w+ face grows vacant and he begins to tremble\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
  },
  instillLeach: {
    id: "instillLeach",
    fullName: "Instill - Leach",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your strength being leeched away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), \w+ seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
  },
};
//DW instill
//Focusing upon a scythe of shadows, you instill it with the directive of (\w+).

export default Object.values(shadowmancy);
