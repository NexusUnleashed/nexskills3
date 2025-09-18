export const evileye = {
  stare: {
    id: "stare",
    fullName: "Stare",
    firstPerson: /^(?<user>\w+) stares at you with the evil eye\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) stares at (?<target>.+?) with the evil eye\.$/,
    profession: ["apostate"],
    skill: "evileye",
    balance: "balance",
    tags: [],
    length: 1.9,
  },
  breach: {
    id: "breach",
    fullName: "Breach",
    firstPerson: /^Your curseward has been breached\!$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["apostate"],
    skill: "evileye",
    balance: "balance",
    tags: [],
    length: 2.5,
  },
};

export default Object.values(evileye);
