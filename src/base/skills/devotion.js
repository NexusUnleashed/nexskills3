export const devotion = {
  inquisition: {
    id: "inquisition",
    fullName: "Inquisition",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Pointing at \w+ with a single raised finger, (?<user>\w+) recites a list of (?<target>.+?)'s transgressions, condemning \w+ actions and words\. A blaze of holy fire surges about \w+ as he dictates \w+'s sentence\.$/,
    profession: ["priest"],
    skill: "devotion",
    balance: "equilibrium",
    tags: ["aff"],
    affs: ["inquisition"],
    length: 3.5,
  },
  dazzle: {
    id: "dazzle",
    fullName: "Dazzle",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) directs a dazzling ray of light at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "devotion",
    balance: "equilibrium",
    tags: ["aff"],
    affs: ["stupidity"],
    length: 2.5,
  },
};

export default Object.values(devotion);
