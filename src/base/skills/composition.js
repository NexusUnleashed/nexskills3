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
  nomos: new SkillDefinition({
    id: "nomos",
    fullName: "Nomos",
    firstPerson:
      /^Your nomos sings out as it shatters the magical shield surrounding (?<target>.+?)\.$/,
    thirdPerson: false,
    profession: ["bard"],
    skill: "composition",
    balance: false,
    tags: ["raze"],
    affs: [],
    info: "shield",
    length: false,
  }),
  nomosMiss: new SkillDefinition({
    id: "nomosMiss",
    fullName: "Nomos",
    firstPerson:
      /^Your nomos wails discordantly as it finds nothing surrounding (?<target>.+?) to destroy\.$/,
    thirdPerson: false,
    profession: ["bard"],
    skill: "composition",
    balance: false,
    tags: ["raze"],
    affs: [],
    info: false,
    length: false,
  }),
};

export default Object.values(composition);
