export const occultism = [
  {
    id: "warp",
    fullName: "Warp",
    firstPerson:
      /^You reach out and clench a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    secondPerson:
      /^(?<user>\w+?) reaches out and clenches a fist before you\. You scream and double over in agony as your skin bubbles with gangrenous growths\.$/,
    thirdPerson:
      /^(?<user>\w+?) reaches out and clenches a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  {
    id: "instill",
    fullName: "Instill",
    firstPerson:
      /^You make a sharp gesture toward (?<target>\w+?), disrupting \w+ aura with the (?<info>\w+?) affliction\.$/,
    secondPerson: /^(?<user>\w+?) makes a quick, sharp gesture toward you\.$/,
    thirdPerson: /^(?<user>\w+?) gestures sharply at (?<target>\w+?)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["info"],
    length: 2.5,
  },
  {
    id: "attend",
    fullName: "Attend",
    firstPerson:
      /^Focusing your will, you exert your aura at (?<target>\w+?) and snap your fingers, forcing \w+ to pay attention to you\.$/,
    secondPerson:
      /^(?<user>\w+?) glows with an emerald hue and snaps \w+ fingers at you\.$/,
    thirdPerson:
      /^(?<user>\w+?) glows with an emerald hue and snaps \w+ fingers at (?<target>\w+?)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.5,
    multiLine: 1,
  },
  {
    id: "whisperingmadnessMiss",
    fullName: "Whisperingmadness",
    firstPerson:
      /^You pass your hand in front of (?<target>\w+?)\. \w+ shakes \w+ head as if clearing \w+ mind\.$/,
    secondPerson:
      /^(?<user>\w+?) passes \w+ hand in front of you\. You feel an invisible claw brush the back of your skull, but quickly brush it off\.$/,
    thirdPerson:
      /^(?<user>\w+?) passes \w+ hand in front of (?<target>\w+?)\. \w+ shakes \w+ head as if clearing \w+ mind\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    info: "Miss",
    tags: ["info"],
    length: 2.3,
  },
  {
    id: "whisperingmadness",
    fullName: "Whisperingmadness",
    firstPerson:
      /^You pass your hand in front of (?<target>\w+?)\. \w+ trembles and \w+ eyes widen in terror\.$/,
    secondPerson:
      /^(?<user>\w+?) passes \w+ hand in front of you\. You feel an invisible claw brush the back of your skull\.\.$/,
    thirdPerson:
      /^(?<user>\w+?) passes \w+ hand in front of (?<target>\w+?)\. \w+ trembles and \w+ eyes widen in terror\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.3,
  },
  {
    id: "devolve",
    fullName: "Devolve",
    firstPerson:
      /^You utter a terrible curse and point a finger at (?<target>\w+?)\.$/,
    secondPerson:
      /^(?<user>\w+?) utters a terrible curse and points a finger at you\.$/,
    thirdPerson:
      /^(?<user>\w+?) utters a terrible curse and points a finger at (?<target>\w+?)\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: [],
    length: 2.4,
    multiLine: 1,
  },
];
