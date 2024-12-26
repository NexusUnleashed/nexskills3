export const psionics = {
  splinterHit: {
    id: "splinterHit",
    fullName: "Splinter",
    firstPerson:
      /^You drive a spike of psychic force straight through the shield surrounding (?<target>\w+?), causing it to explode into translucent shards\.$/,
    secondPerson:
      /^The magical shield surrounding you explodes into translucent shards without visible cause or reason\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 2,
    info: "raze",
  },
  splinterMiss: {
    id: "splinterMiss",
    fullName: "Splinter",
    firstPerson:
      /^You prepare to lash out with your mind, then realise that there is no shield protecting your target to shatter\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 2,
    info: "No Shield",
  },
  expand: {
    id: "expand",
    fullName: "Expand",
    firstPerson:
      /^Your mind's potential expands as you focus inward, bolstering your mental might\.$/,
    secondPerson: false,
    thirdPerson:
      /^An expression of determined focus overcomes (?<user>\w+?)\.$/,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 3,
    info: "Mana restore",
  },
  combustion: {
    id: "combustion",
    fullName: "Combustion",
    firstPerson:
      /^You direct your will into the blood that freely flows from the wounds of (?<target>\w+?), setting it aflame with a surge of psionic energy\.$/,
    secondPerson:
      /^The blood that flows from your wounds spontaneously bursts aflame, your skin bubbling and charring beneath its unnatural heat\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: ["affs"],
    affs: ["bloodfire"],
    length: 3,
    info: false,
  },
  combustionMiss: {
    id: "combustionMiss",
    fullName: "Combustion",
    firstPerson:
      /^There is not a sufficient medium for you to direct your will through\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 3,
    info: "Fail",
  },
  blastMiss: {
    id: "blastMiss",
    fullName: "Blast",
    firstPerson:
      /^You summon up your psionic might but the mind of (?<target>\w+?) is not yet weak enough to be ravaged\.$/,
    secondPerson:
      /^You feel a psionic force assault your mind, but fight off the effects without much trouble\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 3,
    info: "Fail",
  },

  breakthrough: {
    id: "breakthrough",
    fullName: "Breakthrough",
    firstPerson:
      /^A sharp pain behind your eyes is the precursor to an abrupt expansion of consciousness, your mental processes speeding to unnatural levels\.$/,
    secondPerson: false,
    thirdPerson: /^A vein on the temple of (?<user>\w+?) pulses ominously\.$/,
    profession: ["psion"],
    skill: "psionics",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 3,
    info: "Fail",
  },
};

export default Object.values(psionics);
