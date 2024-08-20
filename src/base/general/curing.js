const eddibles = [
  //minerals
  "a dolomite grain",
  "a calcite mote",
  "a bisemutum chip",
  "an azurite mote",
  "a magnesium chip",
  "an aurum flake",
  "a plumbum flake",
  "a stannum flake",
  "an arsenic pellet",
  "a ferrum flake",
  "an antimony flake",
  "a cuprum flake",
  "an argentum flake",
  "a calamine crystal",
  "a pinch of ground cinnabar",
  "a pinch of realgar crystals",
  "a quartz grain",
  "a pinch of ground malachite",
  "a quicksilver droplet",
  "a potash crystal",
  "a gypsum crystal",
  //herbs
  "a bloodroot leaf",
  "a piece of kelp",
  "a goldenseal root",
  "some prickly ash bark",
  "some bayberry bark",
  "a ginseng root",
  "a ginger root",
  "a bellwort flower",
  "a lobelia seed",
  "a hawthorn berry",
  "a valerian leaf",
  "a skullcap flower",
  "slippery elm",
  "a kola nut",
  "sileris berry",
  "some irid moss",
  "a black cohosh root",
];

const curativeMsgs = {
  "You feel your health and mana replenished.": "potash",
  "The elixir heals and soothes you.": "health",
};

export const curing = {
  eat: {
    id: "eat",
    fullName: "Eat",
    firstPerson: /^You eat (?<info>.+?)\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) eats (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "herb",
    tags: [],
    length: 1.6,
    reaction(action) {
      if (!eddibles.includes(action.info)) {
        action.matchType = false;
      }
    },
  },
  apply: {
    id: "apply",
    fullName: "Apply",
    firstPerson:
      /^You take out some salve and quickly rub it on your (?<info>.+?)\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) takes some salve from a vial and rubs it on \w+ (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "salve",
    tags: [],
    length: 1,
  },
  smoke: {
    id: "smoke",
    fullName: "Smoke",
    firstPerson: /^You take a long drag of (?<info>\w+) off your pipe\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) takes a long drag off \w+ (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "smoke",
    tags: [],
    length: 1.6,
  },
  sip: {
    id: "sip",
    fullName: "Sip",
    firstPerson: /^You take a drink from (?:a|an) (?<info>.+?)\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) takes a drink from (?:a|an) (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "sip",
    tags: [],
    length: 1.6,
  },
  focus: {
    id: "focus",
    fullName: "Focus",
    firstPerson:
      /^You focus your mind intently on curing your mental maladies\.$/,
    secondPerson: false,
    thirdPerson: /^A look of extreme focus crosses the face of (?<user>\w+)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "focus",
    tags: [],
    length: 2.5,
  },
};

export default Object.values(curing);
