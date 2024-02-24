export const shadowmancy = [
  {
    //SHADOW REAP KHASEEM KALMIA
    //You rub some kalmia on a scythe of shadows.
    //You unleash a vicious reaping blow at Khaseem with a scythe of shadows.
    id: "reap",
    fullName: "Reap",
    firstPerson:
      /^You unleash a vicious reaping blow at (?<target>.+?) with .+\.$/,
    secondPerson:
      /^(?<user>\w+?) delivers a lightning-fast strike to you with .+\.$/,
    thirdPerson:
      /^(?<user>\w+?) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 0,
    tags: [],
    length: 2.4,
  },
  {
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
    multiLine: 0,
    tags: [],
    length: 3.35,
  },
  {
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
    multiLine: 1,
    tags: [],
    length: 1.3,
  },
  {
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
    multiLine: 1,
    info: "Kneel",
    affs: ["prone"],
    tags: ["aff"],
    length: 2.4,
  },
  {
    id: "instillDepression",
    fullName: "Instill - Depression",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, it burns with a sickly yellow light\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+?), it burns with a sickly yellow glow\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0.0,
  },
  {
    id: "instillRetribution",
    fullName: "Instill - Retribution",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, the blade flashes an incandescent white\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+?), it blazes with incandescent white flame\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0.0,
  },
  {
    id: "instillMadness",
    fullName: "Instill - Madness",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your sanity slipping away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+?), \w+ face grows vacant and he begins to tremble\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0.0,
  },
  {
    id: "instillleach",
    fullName: "Instill - Leach",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your strength being leeched away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+?), \w+ seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    multiLine: 0,
    tags: [],
    length: 0.0,
  },
];
//DW instill
//Focusing upon a scythe of shadows, you instill it with the directive of (\w+).
