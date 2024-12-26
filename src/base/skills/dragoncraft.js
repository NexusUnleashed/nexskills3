export const dragoncraft = {
  //#region Dragoncraft
  gut: {
    id: "gut",
    fullName: "Gut",
    firstPerson:
      /^You rip into (?<target>.+?) with your massive, deadly claws\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) rips into (?<target>.+?) with \w+ massive, deadly claws\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  incantation: {
    id: "incantation",
    fullName: "Incantation",
    firstPerson:
      /^Drawing from the well of your puissance, you invoke a dramatic chant in the dragon tongue\. Your voice resonates with each word, culminating in a wave of magical energy that you bend to your will and thrust towards (?<target>.+?), bombarding \w+ with the ancient power\.$/,
    secondPerson: false,
    thirdPerson:
      /^A resonant vibration emanates from (?<user>\w+) as \w+ invokes a rumbling, sonorous chant in the dragon tongue\. As the sound increases, (?<target>.+?) jerks violently, \w+ body wracked by an unseen force\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 3.0,
  },
  dragoncurse: {
    id: "dragoncurse",
    fullName: "Dragoncurse",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) draws \w+ up to \w+ full height, staring imperiously down at (?<target>.+?)\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    length: 4.0,
  },
  rendUntargeted: {
    id: "rendUntargeted",
    fullName: "Rend",
    firstPerson:
      /^Lunging forward with long, flashing claws extended, you tear into (?<target>.+?) ruthlessly\.$/,
    secondPerson:
      /^Lunging forward with long, flashing claws extended, (?<user>\w+) tears into you ruthlessly\.$/,
    thirdPerson:
      /^Lunging forward with long, flashing claws extended, (?<user>\w+) tears into (?<target>.+?) ruthlessly\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    tags: [],
    length: 2.0,
  },
  rendTargeted: {
    id: "rendTargeted",
    fullName: "Rend",
    firstPerson:
      /^Lunging forward with long, flashing claws extended, you tear into the flesh of (?<target>\w+)'s (?<limb>.+?)\.$/,
    secondPerson:
      /^(?<user>\w+) lunges forward with long, flashing claws extended, tearing down to the bones of your (?<limb>.+?)\.$/,
    thirdPerson:
      /^(?<user>\w+) lunges at (?<target>\w+) with long, flashing claws extended, tearing into \w+ (?<limb>.+?) ruthlessly\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    affs: [],
    tags: ["prep"],
    length: 2.0,
    reaction(action) {
      action.info = action.limb;
    },
  },
  tailsmash: {
    id: "tailsmash",
    fullName: "Tailsmash",
    firstPerson:
      /^You flick your tail at (?<target>.+?), dismissively brushing aside the paltry shield protecting \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    info: "raze",
    tags: ["pve", "raze"],
    length: 2.0,
  },
  dragonheal: {
    id: "dragonheal",
    fullName: "Dragonheal",
    firstPerson:
      /^You let out a great keening, and cast the impurities from your form\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) lets out a great keening, casting the impurities from \w+ form\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "equilibrium",
    info: false,
    tags: ["cure"],
    length: 2.5,
  },
  tailsweep: {
    id: "tailsweep",
    fullName: "Tailsweep",
    firstPerson:
      /^You whip your huge, sinuous tail in a circle, knocking your enemies off their feet\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    info: false,
    affs: [],
    tags: [],
    length: 4.0,
  },
  tailsweepHit: {
    id: "tailsweepHit",
    fullName: "Tailsweep",
    firstPerson:
      /^(?<target>\w+) is knocked forcefully off \w+ feet by the impact of your huge tail\.$/,
    secondPerson:
      /You are knocked forcefully off your feet by the impact of (?<user>\w+)'s huge tail\.$/,
    thirdPerson:
      /^(?<target>\w+) is knocked forcefully off \w+ feet by the impact of (?<user>\w+)'s huge tail\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "free",
    info: false,
    affs: ["prone"],
    tags: ["aff"],
    length: 0,
  },
  bite: {
    id: "bite",
    fullName: "Bite",
    firstPerson:
      /^Twisting your neck sideways, you seize (?<target>\w+)'s body between your massive jaws, jerking \w+ back and forth and leaving ragged gashes in \w+ flesh\.$/,
    secondPerson:
      /^(?<user>\w+) snaps \w+ massive jaws close around you, jerking you back and forth with agonising strength\.$/,
    thirdPerson:
      /^(?<user>\w+) crushes (?<target>\w+) between \w+ massive jaws, jerking \w+ back and forth like a rag doll\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    info: false,
    tags: [],
    length: 3.5,
  },
  biteProne: {
    id: "biteProne",
    fullName: "Bite - Prone",
    firstPerson:
      /^Twisting to grasp (?<target>\w+) in your powerful jaws, you sink your teeth deep into \w+ flesh before tossing \w+ helpless body into the air and catching \w+ once more in your teeth\.$/,
    secondPerson:
      /^(?<user>\w+) snaps \w+ massive jaws close around you, flinging you effortlessly into the air before catching you with a second powerful bite\.$/,
    thirdPerson:
      /^(?<user>\w+) viciously seizes (?<target>\w+) in \w+ jaws, tossing \w+ effortlessly into the air before catching \w+ in a second bite\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    info: false,
    affs: [],
    tags: [],
    length: 3.5,
  },
  enmesh: {
    id: "enmesh",
    fullName: "Enmesh",
    firstPerson:
      /^Fixing your gaze upon (?<target>\w+), you begin a low keening, exercising your mastery of the Veil to bind your foe\.$/,
    secondPerson:
      /^(?<user>\w+) turns to fix his gaze upon you, and you feel your heart increase its palpitations as a low keening echoes from his throat\.$/,
    thirdPerson:
      /^(?<user>\w+) fixes \w+ gaze upon (?<target>\w+), swaying slowly as \w+ begins a low keening\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "balance",
    info: "enmesh",
    affs: ["enmesh"],
    tags: ["aff"],
    length: 3.0,
  },
  enmeshHit1: {
    id: "enmeshHit1",
    fullName: "Enmesh",
    firstPerson: false,
    secondPerson:
      /^As the keening ceases, ethereal tendrils burst forth from your chest to ensnare you, although you manage to evade many of the lashing ropes\.$/,
    thirdPerson:
      /^As the keening ceases, a burst of ethereal tendrils flow from the chest of (?<target>\w+), but \w+ manages to avoid many of them\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "free",
    info: "enmesh",
    affs: ["enmesh"],
    tags: ["aff"],
    length: 0,
  },
  enmeshHit2: {
    id: "enmeshHit2",
    fullName: "Enmesh",
    firstPerson: false,
    secondPerson:
      /^As the keening ceases, you are jolted by a burst of vaporous rope-like tendrils that flow from your chest and encircle your body\.$/,
    thirdPerson:
      /^Abruptly the keening ends, and a blossom of ethereal tendrils bursts from (?<target>\w+)'s chest, ensnaring \w+ in a web of undulating bonds\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "free",
    info: "entangled",
    affs: ["entangled"],
    tags: ["aff"],
    length: 0,
  },
  dragonroar: {
    id: "dragonroar",
    fullName: "Dragonroar",
    firstPerson:
      /^Your nostrils flare with a rush of air as your sinuous body contracts and your mouth opens wide to emit a rippling, unbroken roar that reverberates through the very earth underfoot\.$/,
    secondPerson:
      /^(?<user>\w+)'s nostrils flare wildly with a great rush of air as \w+ sinuous body contracts and \w+ mouth opens wide to emit a rippling, unbroken roar that reverberates through your body/,
    thirdPerson:
      /^(?<user>\w+)'s nostrils flare wildly with a great rush of air as \w+ sinuous body contracts and \w+ mouth opens wide to emit a rippling, unbroken roar at (?<target>\w+)\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "equilibrium",
    info: false,
    affs: ["undeaf"],
    tags: ["aff"],
    length: 4.0,
  },
  gust: {
    id: "gust",
    fullName: "Gust",
    firstPerson:
      /^Drawing an enormous breath, you exhale, expelling a gale of wind with such force that (?<target>\w+) is knocked over\.$/,
    secondPerson:
      /^Drawing an enormous breath, (?<user>\w+) exhales, expelling a gale of wind with such force that you are knocked over\.$/,
    thirdPerson:
      /^Drawing an enormous breath, (?<user>\w+) exhales, expelling a gale of wind with such force that (?<target>\w+) is knocked over\.$/,
    profession: [
      "red dragon",
      "green dragon",
      "black dragon",
      "blue dragon",
      "golden dragon",
      "silver dragon",
    ],
    skill: "dragoncraft",
    balance: "equilibrium",
    info: false,
    affs: ["prone"],
    tags: ["aff"],
    length: 2.5,
  },
  blastRed: {
    id: "blastRed",
    fullName: "Blast",
    firstPerson:
      /^You rear back your head, and with a keening roar unleash incandescent hell upon (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) rears back \w+ head, and with a keening roar unleashes incandescent hell upon you\.$/,
    thirdPerson:
      /^(?<user>\w+) rears back \w+ head, and with a keening roar unleashes incandescent hell upon (?<target>\w+)\.$/,
    profession: ["red dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Red",
    length: 4.0,
  },
  blastGreen: {
    id: "blastGreen",
    fullName: "Blast",
    firstPerson:
      /^Opening your dragon's mouth to its fullest, you blast (?<target>\w+) with your toxic wrath, damaging \w+ very essence\.$/,
    secondPerson:
      /^Opening \w+ maw to its fullest, (?<user>\w+) blasts you with \w+ toxic wrath, covering you in deadly wyrmvenom and damaging your very essence\.$/,
    thirdPerson:
      /^Opening \w+ maw to its fullest, (?<user>\w+) blasts (?<target>\w+) with \w+ toxic wrath, covering \w+ in deadly wyrmvenom\.$/,
    profession: ["green dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Green",
    length: 4.0,
  },
  blastBlue: {
    id: "blastBlue",
    fullName: "Blast",
    firstPerson:
      /^Opening your massive maw, you throw your head forward and blast wave after wave of deadly, all-consuming cold at (?<target>\w+)\.$/,
    secondPerson:
      /^Opening \w+ massive maw, (?<user>\w+) throws \w+ head forward and blasts wave after wave of deadly, all-consuming cold at you\.$/,
    thirdPerson:
      /^Opening \w+ massive maw, (?<user>\w+) throws \w+ head forward and blasts wave after wave of deadly, all-consuming cold at (?<target>\w+)\.$/,
    profession: ["blue dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Blue",
    length: 4.0,
  },
  blastBlack: {
    id: "blastBlack",
    fullName: "Blast",
    firstPerson:
      /^Opening your maw, you force out a tremendous stream of acid, blasting the flesh from the very bones of (?<target>\w+)\.$/,
    secondPerson:
      /^Opening \w+ maw, (?<user>\w+) belches out a tremendous stream of eradicating acid, blasting the flesh from your very bones\.$/,
    thirdPerson:
      /^Opening \w+ maw, (?<user>\w+) belches out a tremendous stream of eradicating acid, blasting the flesh from (?<target>\w+)'s very bones\.$/,
    profession: ["black dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Black",
    length: 4.0,
  },
  blastGold: {
    id: "blastGold",
    fullName: "Blast",
    firstPerson:
      /^With a roar of triumph, you unleash a cataclysm of crushing psi energy, laying waste to (?<target>\w+)'s mind\.$/,
    secondPerson:
      /^With a roar of triumph, (?<user>\w+) unleashes a cataclysm of crushing psi energy at you\.$/,
    thirdPerson:
      /^With a roar of triumph, (?<user>\w+) unleashes a cataclysm of crushing psi energy at (?<target>\w+)\.$/,
    profession: ["golden dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Gold",
    length: 4.0,
  },
  blastSilver: {
    id: "blastSilver",
    fullName: "Blast",
    firstPerson:
      /^Opening your great maw, you unleash an overpowering blast of flesh-searing lightning at (?<target>\w+), whose body goes rigid as \w+ screams in agony\.$/,
    secondPerson:
      /^Opening \w+ great maw, (?<user>\w+) unleashes an overpowering blast of flesh-searing lightning at you. Your body goes rigid as you scream in mind-searing agony\.$/,
    thirdPerson:
      /^Opening \w+ great maw, (?<user>\w+) unleashes an overpowering blast of flesh-searing lightning at (?<target>\w+), whose body goes rigid as \w+ screams in agony\.$/,
    profession: ["silver dragon"],
    skill: "dragoncraft",
    balance: "equilibrium",
    tags: [],
    info: "Silver",
    length: 4.0,
  },
  //Red
  //TODO enmesh
  //#endregion
};

export default Object.values(dragoncraft);

/*

A snaking stream of acid from (Keturah)'s maw forks into the room, blasting into you mercilessly.
The stream hits your magical shield, shattering it.




*/
