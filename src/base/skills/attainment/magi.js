import { SkillDefinition } from "../../models/SkillDefinition";
export const magi = {
  squeeze: new SkillDefinition({
    id: "squeeze",
    fullName: "Squeeze",
    firstPerson:
      /^You raise a clenched fist and in obedience the earth rises in turn, a great hand of stone unfurling to clamp about (?<target>.+?) in a vice-like squeeze\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 16.0,
  }),
  windlash: new SkillDefinition({
    id: "windlash",
    fullName: "Windlash",
    firstPerson:
      /^You draw upon the power of air to summon sharp gusts of wind which begin to whip across (?<target>.+?)'s exposed flesh\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 16.0,
  }),
  windlashTick: new SkillDefinition({
    id: "windlashTick",
    fullName: "Windlash Tick",
    firstPerson:
      /^Sharp gusts of wind whip across (?<target>.+?)'s exposed flesh\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 16.0,
  }),
  firefallFail: new SkillDefinition({
    id: "firefall",
    fullName: "Firefall",
    firstPerson:
      /^You raise your hands dramatically and summon a mighty flaming rock from the sky down at (?<target>.+?), but \w+ dodges aside and is only dealt a glancing blow\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    info: "non-combo",
    length: 16.0,
  }),
  firefall: new SkillDefinition({
    id: "firefall",
    fullName: "Firefall",
    firstPerson:
      /^You raise your hands dramatically and summon a mighty flaming rock from the sky that slams into the \w+ form of (?<target>.+?)\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    info: "COMBO",
    length: 16.0,
  }),
  dilation: new SkillDefinition({
    id: "dilation",
    fullName: "Dilation",
    firstPerson:
      /^You summon a polar vortex in a tight field around (?<target>.+?), chilling the small pocket so intensely that time itself begins to slow\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    info: "Aeon",
    tags: ["pve"],
    length: 16.0,
  }),
  stormbolt: new SkillDefinition({
    id: "stormbolt",
    fullName: "Stormbolt",
    firstPerson:
      /^A bolt of lightning roars out from your hands as you cast a powerful spell at (?<target>.+?), inciting sensitive nerves across \w+ skin\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    info: "Sensitivity",
    tags: ["pve"],
    length: 16.0,
  }),
  disintegrate: new SkillDefinition({
    id: "disintegrate",
    fullName: "Disintegrate",
    firstPerson:
      /^You summon a whirlwind of flame around (?<target>.+?) which consumes \w+ translucent shield\.$/,
    profession: ["magi"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "raze"],
    info: "raze",
    length: 16.0,
  }),
};

export default Object.values(magi);