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
    secondPerson:
      /^(?<user>\w+?) points an elemental staff at you and you scream in pain as your skin begins to freeze and crack\.$/,
    thirdPerson: false,
    profession: ["magi"],
    skill: "artificing",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.0,
  },
  dissolution: {
    id: "dissolution",
    fullName: "Dissolution",
    firstPerson:
      /^You point a primordial staff at (?<target>.+?), and a stream of bile-like acid streams out, covering \w+, who screams in agony\.$/,
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

  efreeti: {
    id: "efreeti",
    fullName: "Efreeti",
    firstPerson: false,
    secondPerson:
      /^A fiery efreeti spins into you, causing you to burst into flame\.$/,
    thirdPerson:
      /^(?<target>\w+) bursts into flame as a fiery efreeti spins into \w+\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "free",
    tags: ["pve", "damage"],
    affs: [],
    info: "burning",
    length: 5.0,
  },
  stoneback: {
    id: "stoneback",
    fullName: "Stoneback",
    firstPerson: false,
    secondPerson:
      /^A hulking stoneback makes a deep rumbling sound from within itself, and a magical shield flares into being to surround you\.$/,
    thirdPerson:
      /^A hulking stoneback makes a deep rumbling sound from deep within itself, and a magical shield flares into being surrounding (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "artificing",
    balance: "free",
    tags: ["pve", "damage"],
    affs: [],
    info: "shield",
    length: 5.0,
  },
};

export default Object.values(artificing);
