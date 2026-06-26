import { SkillDefinition } from "../models/SkillDefinition";
const composition = {
  paean: new SkillDefinition({
    id: "paean",
    fullName: "Paean",
    firstPerson:
      /^Your paean slams into (?<target>\w+) with all the weight of history's greatest triumphs\.$/,
    thirdPerson:
      /^(?<user>\w+)'s paean slams into (?<target>\w+) with all the weight of history's greatest triumphs\.$/,
    profession: ["bard"],
    skill: "composition",
    balance: false,
    tags: [],
    affs: [],
    info: false,
    length: false,
  }),
};

export default Object.values(composition);