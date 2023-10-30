export const actions = [
  {
    id: "warp",
    fullName: "Warp",
    firstPerson:
      /^You reach out and clench a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) reaches out and clenches a fist before (?<target>.+?), who screams and doubles over in agony as \w+ skin suddenly bubbles with gangrenous growths\.$/,
    profession: ["occultist"],
    skill: "occultism",
    balance: "equilibrium",
    tags: ["damage"],
    length: 3.0,
  },
  {
    id: "priestess",
    fullName: "Priestess",
    firstPerson:
      /Raising the High Priestess tarot over your head, parallel to the ground, you release it. It instantly expands and moves downward, healing you as your body passes through it\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+?) raises a tarot over \w+ head, parallel to the ground. Upon releasing it, it instantly expands and moves downward until \w+ entire body has been passed through it\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["heal"],
    length: 3.0,
  },
  {
    id: "harry",
    fullName: "Harry",
    firstPerson:
      /^Raising your hands in the air, you summon horrific visions to torment (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "harryTick",
    fullName: "Harry tick",
    firstPerson:
      /^(?<target>.+?) is tormented by horrific visions from the Plane of Chaos\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "chaosgate",
    fullName: "Chaosgate",
    firstPerson:
      /^You cup your hands together and fling them outwards, sending a spiral of shimmering portals into (?<target>.+?)'s body\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
  {
    id: "stagnate",
    fullName: "Stagnate",
    firstPerson:
      /^You wave one arm at (?<target>.+?), causing a small time rift to form around her\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["battlerage"],
    length: 3.0,
  },
];


//Archaeon tosses a tarot card at Proficy and as it reaches him, a huge mass of rope bursts out of it, entrapping and hindering him.