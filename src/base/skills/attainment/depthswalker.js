export const depthswalker = {
  lash: {
    id: "lash",
    fullName: "Lash",
    firstPerson:
      /^You summon whips of shadow to viciously lash the form of (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  drain: {
    id: "drain",
    fullName: "Drain",
    firstPerson:
      /^You command the shadow of (?<target>.+?) to begin siphoning away the life of its host\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  drainTick: {
    id: "drainTick",
    fullName: "Drain Tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) grows paler as \w+ shadow grows more opaque\.$/,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  nakail: {
    id: "nakail",
    fullName: "Nakail",
    firstPerson:
      /^Directing your power against the magical shield surrounding (?<target>.+?), you intone, "Nakail"\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
};

export default Object.values(depthswalker);
