export const psion = [
  {
    id: "overhand",
    fullName: "Overhand",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>.+?) brings a translucent mace around in a savage overhand strike, smashing it into the head of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    multiLine: 1,
    tags: ["aff"], // parasite > healthleach > manaleach
    length: 2.2,
  },
  {
    id: "deathblow",
    fullName: "Deathblow",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Almost too swift to perceive, (?<user>.+?) lashes out with a translucent dagger, tracing a bloody line across the throat of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    multiLine: 1,
    tags: ["aff"],
    affs: ["asthma", "bleeding"], // parasite > healthleach > manaleach
    length: 2.2,
  },
];
