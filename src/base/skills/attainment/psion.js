export const psion = {
  pulverize: {
    id: "pulverize",
    fullName: "Pulverize",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^A warhammer comes into being in (?<user>\w+)'s hands, and with an almighty overhand swing he annihilates the magical shield surrounding (?<target>.+?)\.$/,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 17.0,
  },
};

export default Object.values(psion);
