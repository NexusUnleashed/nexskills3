//A nearly invisible magical shield forms around a sturdy troll woman.
export const tattoos = {
  shield: {
    id: "shield",
    fullName: "Shield",
    firstPerson:
      /^You touch the tattoo and a nearly invisible magical shield forms around you\.$/,
    secondPerson: false,
    thirdPerson:
      /^A nearly invisible magical shield forms around (?<user>.+?)\.$/,
    profession: ["general"],
    skill: "tattoos",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  },
  tree: {
    id: "tree",
    fullName: "Tree",
    firstPerson: /^You touch the tree of life tattoo\.$/,
    secondPerson: false,
    thirdPerson: /^(?<user>\w+) touches a tree of life tattoo\.$/,
    profession: ["general"],
    skill: "tattoos",
    balance: "free",
    tags: [],
    length: 0,
  },
};

export default Object.values(tattoos);
