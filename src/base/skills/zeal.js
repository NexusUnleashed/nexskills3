export const zeal = {
  guilt: {
    id: "guilt",
    fullName: "Guilt",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"And your guilt will be made plain," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0,
    tags: ["aff"],
    affs: ["guilt"],
    length: 1.7,
  },
  guilt2: {
    id: "guilt2",
    fullName: "Guilt",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"Know the pain which you have caused," (?<user>\w+) proselytises, finger raised to point at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0,
    tags: ["aff"],
    affs: ["guilt"],
    length: 1.7,
  },
  purge: {
    id: "purge",
    fullName: "Purge",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"I deem you unfit for Creation!" (?<user>\w+) proclaims, pointing an imperious finger at (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["ablaze"],
    length: 2.3,
  },
  penance: {
    id: "penance",
    fullName: "Penance",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"And face your penance!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["paralysis"],
    length: 1.6,
  },
  penance2: {
    id: "penance2",
    fullName: "Penance",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"Repent for your crimes!" denounces (?<user>\w+), hand raised in warding against (?<target>.+?)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0, //A line of golden flame leaps forth, lashing about Amranu and searing him to the bone.
    tags: ["aff"],
    affs: ["paralysis"],
    length: 1.6,
  },
  revelations: {
    id: "revelations",
    fullName: "Revelations",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"And see that which Evil reaps!" (?<user>\w+) recites to (?<target>.+?), righteous fury blazing in \w+ eyes\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0, //Antoninus claws at his eyes, fingers scrabbling frantically.
    tags: ["aff"],
    affs: ["hellsight"],
    length: 1.6,
  },
  light: {
    id: "light",
    fullName: "Light",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^"May the Light lead, and we never fail to follow!" cries out (?<user>\w+)\.$/,
    profession: ["priest"],
    skill: "zeal",
    balance: "prayer",
    multiLine: 0,
    tags: ["heal", "cure"],
    affs: [],
    length: 3.0,
  },
};

export default Object.values(zeal);
