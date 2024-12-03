const artificing = {
  scintilla: {
    id: "scintilla",
    fullName: "Scintilla",
    firstPerson:
      /^As you point a primordial staff at (?<target>.+?), a scintilla of bright, burning light shoots out, striking \w+ with focused elemental power\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  },
  horripilation: {
    id: "horripilation",
    fullName: "Horripilation",
    firstPerson:
      /^You point a primordial staff at (?<target>.+?) and \w+ screams in pain as \w+ skin begins to freeze and crack\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  },
};

export default Object.values(artificing);
