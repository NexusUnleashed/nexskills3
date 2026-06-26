import { SkillDefinition } from "../../models/SkillDefinition";
export const occultist = {
  //#region Attainment
  harry: new SkillDefinition({
    id: "harry",
    fullName: "Harry",
    firstPerson:
      /^Raising your hands in the air, you summon horrific visions to torment (?<target>.+?)\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  harryTick: new SkillDefinition({
    id: "harryTick",
    fullName: "Harry tick",
    thirdPerson:
      /^(?<target>.+?) is tormented by horrific visions from the Plane of Chaos\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  chaosgate: new SkillDefinition({
    id: "chaosgate",
    fullName: "Chaosgate",
    firstPerson:
      /^You cup your hands together and fling them outwards, sending a spiral of shimmering portals into (?<target>.+?)'s body\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  temperance: new SkillDefinition({
    id: "temperance",
    fullName: "Temperance",
    firstPerson:
      /^Multicoloured rays burst forth from your outstretched hands and strike (?<target>.+?) in the head, forcing \w+ to obey your will\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "Charm",
    tags: ["pve", "charm"],
    length: 3.0,
  }),
  stagnate: new SkillDefinition({
    id: "stagnate",
    fullName: "Stagnate",
    firstPerson:
      /^You wave one arm at (?<target>.+?), causing a small time rift to form around \w+\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "Aeon",
    tags: ["pve", "aeon"],
    length: 3.0,
  }),
  fluctuate: new SkillDefinition({
    id: "fluctuate",
    fullName: "Fluctuate",
    firstPerson:
      /^You concentrate intently on (?<target>.+?) and watch as grotesque mutations sprout all over \w+ body\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  ruin: new SkillDefinition({
    id: "ruin",
    fullName: "Ruin",
    firstPerson:
      /^You gesture in a slashing motion at (?<target>.+?), and small tears form in \w+ translucent shield as chaos rips it apart\.$/,
    profession: ["occultist"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 3.0,
  }),
  //#endregion
};

export default Object.values(occultist);