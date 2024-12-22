export const occultist = {
  //#region Attainment
  harry: {
    id: "harry",
    fullName: "Harry",
    firstPerson:
      /^Raising your hands in the air, you summon horrific visions to torment (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  harryTick: {
    id: "harryTick",
    fullName: "Harry tick",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<target>.+?) is tormented by horrific visions from the Plane of Chaos\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  chaosgate: {
    id: "chaosgate",
    fullName: "Chaosgate",
    firstPerson:
      /^You cup your hands together and fling them outwards, sending a spiral of shimmering portals into (?<target>.+?)'s body\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  temperance: {
    id: "temperance",
    fullName: "Temperance",
    firstPerson:
      /^Multicoloured rays burst forth from your outstretched hands and strike (?<target>.+?) in the head, forcing \w+ to obey your will\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "Charm",
    tags: ["pve", "charm"],
    length: 3.0,
  },
  stagnate: {
    id: "stagnate",
    fullName: "Stagnate",
    firstPerson:
      /^You wave one arm at (?<target>.+?), causing a small time rift to form around \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "Aeon",
    tags: ["pve", "aeon"],
    length: 3.0,
  },
  fluctuate: {
    id: "fluctuate",
    fullName: "Fluctuate",
    firstPerson:
      /^You concentrate intently on (?<target>.+?) and watch as grotesque mutations sprout all over \w+ body\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  },
  ruin: {
    id: "ruin",
    fullName: "Ruin",
    firstPerson:
      /^You gesture in a slashing motion at (?<target>.+?), and small tears form in \w+ translucent shield as chaos rips it apart\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "Raze",
    tags: ["pve", "raze"],
    length: 3.0,
  },
  //#endregion
};

export default Object.values(occultist);
