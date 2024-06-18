export const venom = {
  shrugging: {
    id: "shrugging",
    fullName: "Shrugging",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) hunches \w+ shoulders and lets out a soft hiss\.$/,
    profession: ["serpent"],
    skill: "venom",
    balance: "free",
    tags: ["cure"],
    length: 0.0,
  },
};

export default Object.values(venom);
