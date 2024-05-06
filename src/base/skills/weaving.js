export const weaving = [
  {
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
  {
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
];
