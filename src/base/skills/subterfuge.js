import { SkillDefinition } from "../models/SkillDefinition";
export const subterfuge = {
  garrote: new SkillDefinition({
    id: "garrote",
    fullName: "Garrote",
    thirdPerson:
      /^(?<user>\w+) slips behind (?<target>.+?) and garrotes \w+ with \w+ whip\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 3.0,
  }),
  doublestab: new SkillDefinition({
    id: "doublestab",
    fullName: "Double Stab",
    firstPerson: /^(?<user>\w+) quickly pricks you with \w+ dirk\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.8,
  }),
  flay: new SkillDefinition({
    id: "flay",
    fullName: "Flay",
    firstPerson:
      /^With fluid grace, (?<user>\w+) snaps \w+ wrist, bringing .+? back to crack viciously into you\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.0,
  }),
  lightwall: new SkillDefinition({
    id: "lightwall",
    fullName: "Lightwall",
    firstPerson:
      /^(?<user>\w+) forms a ball of light in \w+ palm and hurls it (?<dir>\w+)\.$/,
    profession: ["serpent"],
    skill: "subterfuge",
    balance: "balance",
    tags: [],
    length: 2.0,
    reaction(action) {
      action.info = action.dir;
    },
  }),
};
//Thato forms a ball of light in her palm and hurls it southwards.
//Your left foot explodes in white hot pain as an arrow slams into it.
//With fluid grace, Thato snaps her wrist, bringing a serpentine, steel-tipped whip back to crack viciously into you.
export default Object.values(subterfuge);