import { SkillDefinition } from "../models/SkillDefinition";
export const propagation = {
  thornrend: new SkillDefinition({
    id: "thornrend",
    fullName: "Thornrend",
    firstPerson:
      /^You command the razor-edged thorny vines around you to lash out and rend the flesh of (?<target>.+?)\.$/,
    profession: ["sylvan"],
    skill: "propagation",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 3,
  }),
};

export default Object.values(propagation);