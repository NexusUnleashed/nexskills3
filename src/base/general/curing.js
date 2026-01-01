import { SkillDefinition } from "../models/SkillDefinition";
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
  "The potash slides down without effect.": "potash",
  "The elixir heals and soothes you.": "health",
  "The elixir flows down your throat without effect.": "health", //Same msg for mana
  "Your mind feels stronger and more alert.": "mana",
};

export const curing = {
  eat: new SkillDefinition({
    id: "eat",
    fullName: "Eat",
    firstPerson: /^You eat (?<info>.+?)\.$/,
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
  }),
  apply: new SkillDefinition({
    id: "apply",
    fullName: "Apply",
    firstPerson:
      /^You take out some salve and quickly rub it on your (?<info>.+?)\.$/,
    thirdPerson:
      /^(?<user>\w+) takes some salve from a vial and rubs it on \w+ (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "salve",
    tags: [],
    length: 1,
  }),
  health: new SkillDefinition({
    id: "health",
    fullName: "Health",
    firstPerson:
      /^You take some elixir from .+? and rub it into your (?<info>.+?)\.$/,
    thirdPerson:
      /^(?<user>\w+) takes some elixir from .+? and rubs it into \w+ (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "sip",
    tags: [],
    length: 1.6,
  }),
  smoke: new SkillDefinition({
    id: "smoke",
    fullName: "Smoke",
    firstPerson: /^You take a long drag of (?<info>\w+) off your pipe\.$/,
    thirdPerson: /^(?<user>\w+) takes a long drag off \w+ (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "smoke",
    tags: [],
    length: 1.6,
  }),
  sip: new SkillDefinition({
    id: "sip",
    fullName: "Sip",
    firstPerson: /^You take a drink from (?:a|an) (?<info>.+?)\.$/,
    thirdPerson: /^(?<user>\w+) takes a drink from (?:a|an) (?<info>.+?)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "sip",
    tags: [],
    length: 1.6,
  }),
  focus: new SkillDefinition({
    id: "focus",
    fullName: "Focus",
    firstPerson:
      /^You focus your mind intently on curing your mental maladies\.$/,
    thirdPerson: /^A look of extreme focus crosses the face of (?<user>\w+)\.$/,
    profession: ["general"],
    skill: "curing",
    balance: "focus",
    tags: [],
    length: 2.5,
  }),
};

export default Object.values(curing);

//Atalkez takes some elixir from a quartz vial and rubs it into his torso.
//Atalkez takes some elixir from a quartz vial and rubs it into his legs.