export const curing = {
  eat: {
    id: "eat",
    fullName: "Eat",
    firstPerson: /^You eat (.+?)\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) eats (?<target>.+?)\.$/,
    profession: ["general"],
    skill: "",
    balance: "herb",
    tags: [],
    length: 1.6,
    reaction(args) {
      args.target = nexSys.tables.herb_name_to_herb[args.target] || args.target;
    },
  },
  apply: {
    id: "apply",
    fullName: "Apply",
    firstPerson:
      /^You take out some salve and quickly rub it on your (?<limb>.+?)\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) takes some salve from a vial and rubs it on \w+ (?<target>.+?)\.$/,
    profession: ["general"],
    skill: "",
    balance: "salve",
    tags: [],
    length: 1,
  },
  smoke: {
    id: "smoke",
    fullName: "Smoke",
    firstPerson: /^You take a long drag of (\w+) off your pipe\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) takes a long drag off \w+ (?<target>.+?)\.$/,
    profession: ["general"],
    skill: "",
    balance: "smoke",
    tags: [],
    length: 1.6,
  },
  sip: {
    id: "sip",
    fullName: "Sip",
    firstPerson: /^You take a drink from (?:a:an) (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) takes a drink from (?:a|an) (?<target>.+?)\.$/,
    profession: ["general"],
    skill: "",
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
    skill: "",
    balance: "focus",
    tags: [],
    length: 2.5,
  },
};

export default Object.values(curing);
