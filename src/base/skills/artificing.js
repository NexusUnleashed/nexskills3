const artificing = {
  scintilla: {
    id: "scintilla",
    fullName: "Staffcast",
    firstPerson:
      /^The burning light punches through (?<target>.+), evaporating \w+ inner organs\. \w+ retches before \w+ dies, as the horrible smell of charred flesh fills the air\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: "Scintilla",
    length: 2.0,
  },
  horripilation: {
    id: "horripilation",
    fullName: "Staffcast",
    firstPerson:
      /^You point a primordial staff at (?<target>.+) and \w+ screams in pain as \w+ skin begins to freeze and crack\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: "Horripilation",
    length: 2.0,
  },
};

export default Object.values(artificing);
