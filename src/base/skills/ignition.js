import { SkillDefinition } from "../models/SkillDefinition";
export const ignition = {
  flamewhip: new SkillDefinition({
    id: "flamewhip",
    fullName: "Flamewhip",
    firstPerson:
      /^A whip of liquid flame coalesces in your hand, and with a savage lash you send it to scourge the flesh of (?<target>.+?)\.$/,
    secondPerson:
      /^A whip of flame coalesces in the hand of Khaseem, with which he viciously lashes you\.$/,
    thirdPerson:
      /^A whip of flame coalesces in the hand of Khaseem, which he brings around in a savage lashing motion to scourge the flesh of Pamxen\.$/,
    profession: ["fire elemental lord"],
    skill: "ignition",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.4,
  }),
  vapourize: new SkillDefinition({
    id: "vapourize",
    fullName: "Vapourize",
    firstPerson:
      /^You superheat the air surrounding (?<target>.+?), \w+ magical shield shattering under the onslaught and \w+ skin catching aflame\.$/,
    profession: ["fire elemental lord"],
    skill: "ignition",
    balance: "balance",
    info: "raze",
    tags: ["pve", "raze"],
    length: 2.0,
  }),
  wires: new SkillDefinition({
    id: "wires",
    fullName: "Wires",
    firstPerson:
      /^Raising a hand, you send forth thin wires of flame, their searing filaments tearing through the magical shield surrounding (?<target>.+?)\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    info: "raze",
    tags: ["pve", "raze"],
    length: 2.0,
  }),
  scourge: new SkillDefinition({
    id: "scourge",
    fullName: "Scourge",
    firstPerson:
      /^You scourge (?<target>.+?) with a whip of flame, leaving \w+ sensitive and raw\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    info: "Sensitivity",
    tags: ["pve", "sensitivity"],
    length: 2.0,
  }),
  devastation: new SkillDefinition({
    id: "devastation",
    fullName: "Devastation",
    firstPerson:
      /^You call forth a raging firestorm to destroy (?<target>.+?), its insatiable fury falling upon \w+ with ravenous intent\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  }),
  bonds: new SkillDefinition({
    id: "bonds",
    fullName: "Bonds",
    firstPerson:
      /^You manifest a net of flame and cast it about the form of (?<target>.+?)\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  }),
  bondsTick: new SkillDefinition({
    id: "bondsTick",
    fullName: "Bonds Tick",
    firstPerson:
      /^The net of flame that clings to (?<target>.+?) continues to burn, eating away at whatever it touches\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  }),
  engulf: new SkillDefinition({
    id: "engulf",
    fullName: "Engulf",
    firstPerson:
      /^Summoning forth the primal fires, you engulf (?<target>.+?) in flames!$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  }),
  cataclysm: new SkillDefinition({
    id: "cataclysm",
    fullName: "Cataclysm",
    firstPerson:
      /^You prepare to unleash a cataclysm against (?<target>.+?), but \w+ anticipates your intent and moves out of your target area\.$/,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  }),
};
//cataclysm non-combo?
//You prepare to unleash a cataclysm against a Nelbennir alchemist, but he anticipates your intent and moves out of your target area.

export default Object.values(ignition);