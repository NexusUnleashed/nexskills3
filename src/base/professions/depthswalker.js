export const actions = [
  {
    id: "reap",
    fullName: "Reap",
    firstPerson:
      /^You unleash a vicious reaping blow at (?<target>.+?) with .+\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>.+?) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  {
    id: "instillleach",
    fullName: "Instill - Leach",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^As the weapon strikes (?<target>.+?), he seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    multiLine: 1,
    tags: [],
    length: 2.2,
  },
  //#region Attainment
  {
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
  {
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
  {
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
  {
    id: "nakail",
    fullName: "Nakail",
    firstPerson:
      /^Directing your power against the magical shield surrounding (?<target>.+?), you intone, "Nakail"\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "attainment",
    balance: "battlerage",
    info: "Raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
  //#endregion
];
