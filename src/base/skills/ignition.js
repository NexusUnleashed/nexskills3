export const ignition = {
  flamewhip: {
    id: "flamewhip",
    fullName: "Flamewhip",
    firstPerson:
      /^A whip of liquid flame coalesces in your hand, and with a savage lash you send it to scourge the flesh of (?<target>.+?)\.$/,
    secondPerson:
      /^A whip of flame coalesces in the hand of Khaseem, with which he viciously lashes you\.$/,
    thirdPerson:
      /^A whip of flame coalesces in the hand of Khaseem, which he brings around in a savage lashing motion to scourge the flesh of Pamxen\.$/,
    profession: ["fire elemental lord"],
    skill: "ignition",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.4,
  },
  vapourize: {
    id: "vapourize",
    fullName: "Vapourize",
    firstPerson:
      /^You superheat the air surrounding (?<target>.+?), \w+ magical shield shattering under the onslaught and \w+ skin catching aflame\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "ignition",
    balance: "balance",
    info: "raze",
    tags: ["pve", "raze"],
    length: 2.0,
  },
  wires: {
    id: "wires",
    fullName: "Wires",
    firstPerson:
      /^Raising a hand, you send forth thin wires of flame, their searing filaments tearing through the magical shield surrounding (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    info: "raze",
    tags: ["pve", "raze"],
    length: 2.0,
  },
  scourge: {
    id: "scourge",
    fullName: "Scourge",
    firstPerson:
      /^You scourge (?<target>.+?) with a whip of flame, leaving \w+ sensitive and raw\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    info: "Sensitivity",
    tags: ["pve", "sensitivity"],
    length: 2.0,
  },
  devastation: {
    id: "devastation",
    fullName: "Devastation",
    firstPerson:
      /^You call forth a raging firestorm to destroy (?<target>.+?), its insatiable fury falling upon \w+ with ravenous intent\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  },
  bonds: {
    id: "bonds",
    fullName: "Bonds",
    firstPerson:
      /^You manifest a net of flame and cast it about the form of (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  },
  bondsTick: {
    id: "bondsTick",
    fullName: "Bonds Tick",
    firstPerson:
      /^The net of flame that clings to (?<target>.+?) continues to burn, eating away at whatever it touches\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  },
  engulf: {
    id: "engulf",
    fullName: "Engulf",
    firstPerson:
      /^Summoning forth the primal fires, you engulf (?<target>.+?) in flames!$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  },
  cataclysm: {
    id: "cataclysm",
    fullName: "Cataclysm",
    firstPerson:
      /^You prepare to unleash a cataclysm against (?<target>.+?), but \w+ anticipates your intent and moves out of your target area\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["fire elemental lord"],
    skill: "attainment",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 2.0,
  },
};
//cataclysm non-combo?
//You prepare to unleash a cataclysm against a Nelbennir alchemist, but he anticipates your intent and moves out of your target area.

export default Object.values(ignition);
