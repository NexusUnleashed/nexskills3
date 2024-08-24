export const weaving = {
  overhand: {
    id: "overhand",
    fullName: "Overhand",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      ///^A translucent mace coalesces in (?<user>.+?)'s hands, firming as it gains substance beyond the incorporeal\.$/,
      /^(?<user>.+?) brings a translucent mace around in a savage overhand strike, smashing it into the head of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"], // parasite > healthleach > manaleach
    length: 2.2,
  },
  deathblow: {
    id: "deathblow",
    fullName: "Deathblow",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Almost too swift to perceive, (?<user>.+?) lashes out with a translucent dagger, tracing a bloody line across the throat of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: ["asthma", "bleeding"], // parasite > healthleach > manaleach
    length: 2.2,
  },
  charge: {
    id: "charge",
    fullName: "Charge",
    firstPerson:
      /^Charging forward, you drive a translucent spear into (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) rushes at you with a translucent spear, driving it deep into you\.$/,
    thirdPerson:
      /^(?<user>\w+)Pamxen rushes at (?<target>\w+), driving a translucent spear deep into \w+\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
    multiLine: false,
  },
  cleaveMiss: {
    id: "cleaveMiss",
    fullName: "Cleave",
    firstPerson:
      /^Your blow scythes through the air in front of (?<target>\w+), missing entirely\.$/,
    secondPerson:
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon you\.$/,
    thirdPerson:
      /^(?<user>\w+)Pamxen rushes at (?<target>\w+), driving a translucent spear deep into \w+\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
    multiLine: false,
  },
};

export default Object.values(weaving);
