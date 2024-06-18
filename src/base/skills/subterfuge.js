export const subterfuge = {
  garrote: {
    id: "garrote",
    fullName: "Garrote",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) slips behind (?<target>.+?) and garrotes \w+ with \w+ whip\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 3.0,
  },
};

export default Object.values(subterfuge);
