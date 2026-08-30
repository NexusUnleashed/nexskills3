import { SkillDefinition } from "../../models/SkillDefinition";
export const psion = {
  pulverize: new SkillDefinition({
    id: "pulverize",
    fullName: "Pulverize",
    thirdPerson:
      /^A warhammer comes into being in (?<user>\w+)'s hands, and with an almighty overhand swing \w+ annihilates the magical shield surrounding (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    tags: ["pve", "raze"],
    length: 17.0,
  }),
  barbedblade: new SkillDefinition({
    id: "barbedblade",
    fullName: "Barbed Blade",
    firstPerson:
      /^You weave a jagged blade into being and viciously hack at (?<target>.+?), opening bleeding wounds\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 17.0,
  }),
  whirlwind: new SkillDefinition({
    id: "whirlwind",
    fullName: "Whirlwind",
    firstPerson:
      /^You burst into motion, blades materialising in your hands as you deliver a relentless flurry of blows against (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 17.0,
  }),
  devastate: new SkillDefinition({
    id: "devastate",
    fullName: "Devastate",
    firstPerson:
      /^You hammer the mind of (?<target>.+?) with a devastating psionic onslaught\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    tags: ["pve", "damage"],
    length: 17.0,
  }),
  terror: new SkillDefinition({
    id: "terror",
    fullName: "Terror",
    firstPerson:
      /^You inspire abject terror in the mind of (?<target>.+?), coaxing \w+ darkest fears to the surface\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: "Fear",
    tags: ["pve", "fear"],
    length: 17.0,
  }),
  regrowth: new SkillDefinition({
    id: "regrowth",
    fullName: "Regrowth",
    firstPerson:
      /^You direct nature to restrain (?<target>.+?), and vines flash from nothingness into being to bind \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "attainment",
    balance: "battlerage",
    info: "Inhibit",
    tags: ["pve", "inhibit"],
    length: 17.0,
  }),
};

export default Object.values(psion);
