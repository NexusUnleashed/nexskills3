export const spirituality = {
  chasten: {
    id: "chasten",
    fullName: "Chasten",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^A dark bolt of energy erupts from the mace held by (?<user>\w+), afflicting (?<target>.+?) with a chastening magic\.$/,
    profession: ["priest"],
    skill: "spirituality",
    balance: "balance",
    multiLine: 0,
    tags: [],
    length: 2.9,
  },
  smite: {
    id: "smite",
    fullName: "Smite",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) utters a prayer and smites (?<target>.+?)'s (?<limb>.+?) with an Auroran Mace\.$/,
    profession: ["priest"],
    skill: "spirituality",
    balance: "equilibrium",
    multiLine: 0,
    tags: [],
    length: 2.8,
  },
};

export default Object.values(spirituality);
