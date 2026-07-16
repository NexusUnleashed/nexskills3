import { SkillDefinition } from "../../models/SkillDefinition";
export const unnamable = {
  dread: new SkillDefinition({
    id: "dread",
    fullName: "Dread",
    firstPerson:
      /^You croon to (?<target>.+?), of the fear of aeons, of the ineffable dread, each of your mouths joined in profane design\.$/,
    profession: ["unnamable"],
    skill: "attainment",
    balance: "battlerage",
    info: "Fear",
    tags: ["pve"],
    length: 35.0,
  }),
  shriek: new SkillDefinition({
    id: "shriek",
    fullName: "Shriek",
    firstPerson:
      /^Your many mouths shriek at (?<target>.+?), a wrath-filled cry given ancient power\.$/,
    profession: ["unnamable"],
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
    profession: ["unnamable"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 16.0,
  }),
  destroy: new SkillDefinition({
    id: "destroy",
    fullName: "Destroy",
    firstPerson:
      /^You lash out with power and will, your only task to crush the light from your wretched target, (?<target>.+?)\.$/,
    profession: ["unnamable"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    info: "non-combo",
    length: 16.0,
  }),
};

export default Object.values(unnamable);
