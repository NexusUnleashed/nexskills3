export const spirituality = {
  chasten: {
    id: "chasten",
    fullName: "Chasten",
    firstPerson:
      /^You direct a dark bolt of energy through your mace towards (?<target>\w+)\. The curse of (?<info>\w+) is brought down on to your victim\.$/,
    secondPerson: false,
    thirdPerson:
      /^A dark bolt of energy erupts from the mace held by (?<user>\w+), afflicting (?<target>.+?) with a chastening magic\.$/,
    profession: ["priest"],
    skill: "spirituality",
    balance: "balance",
    tags: [],
    length: 2.9,
  },
  smite: {
    id: "smite",
    fullName: "Smite",
    firstPerson:
      /^You utter a prayer and smite (?<target>.+?)'s (?<limb>.+?) with .+?\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) utters a prayer and smites (?<target>.+?)'s (?<limb>.+?) with .+?\.$/,
    profession: ["priest"],
    skill: "spirituality",
    balance: "equilibrium",
    tags: [],
    length: 2.8,
  },
};

export default Object.values(spirituality);
