import { SkillDefinition } from "../models/SkillDefinition";
export const zeal = {
  guilt: new SkillDefinition({
    id: "guilt",
    fullName: "Guilt",
    firstPerson:
      /^"And your guilt will be made plain," you proselytise to (?<target>\w+)\.$/,
    thirdPerson:
      /^"And your guilt will be made plain," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    tags: ["aff"],
    affs: ["guilt"],
    length: 1.7,
  }),
  guilt2: new SkillDefinition({
    id: "guilt2",
    fullName: "Guilt",
    thirdPerson:
      /^"Know the pain which you have caused," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    tags: ["aff"],
    affs: ["guilt"],
    length: 1.7,
  }),
  purge: new SkillDefinition({
    id: "purge",
    fullName: "Purge",
    thirdPerson:
      /^"I deem you unfit for Creation!" (?<user>\w+) proclaims, pointing an imperious finger at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    //multiline: A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["ablaze"],
    length: 2.3,
  }),
  penance: new SkillDefinition({
    id: "penance",
    fullName: "Penance",
    firstPerson: /^"And face your penance!" you denounce (?<target>\w+)\.$/,
    thirdPerson:
      /^"And face your penance!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    //multiline: A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["paralysis"],
    length: 1.6,
  }),
  penance2: new SkillDefinition({
    id: "penance2",
    fullName: "Penance",
    thirdPerson:
      /^"Repent for your crimes!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    //multiline: A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["paralysis"],
    length: 1.6,
  }),
  revelations: new SkillDefinition({
    id: "revelations",
    fullName: "Revelations",
    thirdPerson:
      /^"And see that which Evil reaps!" (?<user>\w+) recites to (?<target>.+?), righteous fury blazing in \w+ eyes\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    //multiline: Antoninus claws at his eyes, fingers scrabbling frantically.
    tags: ["aff"],
    affs: ["hellsight"],
    length: 1.6,
  }),
  light: new SkillDefinition({
    id: "light",
    fullName: "Light",
    thirdPerson:
      /^"May the Light lead, and we never fail to follow!" cries out (?<user>\w+)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    tags: ["heal", "cure"],
    affs: [],
    length: 3.0,
  }),
};

export default Object.values(zeal);