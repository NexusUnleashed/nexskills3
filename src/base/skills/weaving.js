export const weaving = {
  weavingOverhand: {
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
  weavingDeathblow: {
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
  weavingCharge: {
    id: "weavingCharge",
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
  weavingCleaveMiss: {
    id: "weavingCleaveMiss",
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
