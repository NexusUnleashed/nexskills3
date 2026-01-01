import { SkillDefinition } from "../models/SkillDefinition";
const domination = {
  //#region COMMANDS
  humbugCommand: new SkillDefinition({
    id: "humbugCommand",
    fullName: "Humbug Command",
    firstPerson:
      /^You command your humbug to instill a ravenous hunger in (?<target>\w+)\.$/,
    secondPerson:
      /^A humbug latches onto your throat, and your guts feel like they're devouring themselves as an unnatural hunger comes over you\.$/,
    thirdPerson:
      /^A humbug clutches to the throat of (?<target>\w+), its grotesque body undulating\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.5,
  }),
  houndCommand: new SkillDefinition({
    id: "houndCommand",
    fullName: "Hound Command",
    firstPerson:
      /^You command your hound to erode the will of (?<target>\w+)\.$/,
    secondPerson:
      /^A Chaos hound produces a baying howl, and you feel your will to resist slipping away\.\.\.$/,
    thirdPerson:
      /^A Chaos hound produces a baying howl, and (?<target>\w+) slumps with a sigh\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
  }),
  houndCommandPve: new SkillDefinition({
    id: "houndCommandPve",
    fullName: "Hound Command",
    firstPerson:
      /^You command your hound to rend the flesh of (?<target>.+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: ["pve", "damage"],
    length: 2.2,
  }),
  houndCommandPveRaze: new SkillDefinition({
    id: "houndCommandPveRaze",
    fullName: "Hound Command",
    firstPerson:
      /^With a baying howl a chaos hound leaps upon (?<target>.+), ripping the magical shield surrounding \w+ to tatters with its claws\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    info: "raze",
    tags: ["pve", "damage", "raze"],
    length: 2.2,
  }),
  stormCommand: new SkillDefinition({
    id: "stormCommand",
    fullName: "Storm Command",
    firstPerson:
      /^You command your chaos storm to bring down the curse of clumsiness upon (?<target>\w+)\.$/,
    secondPerson:
      /^A lash of energy whips out of the chaos storm to strike you, afflicting you with clumsiness\.$/,
    thirdPerson:
      /^A lash of energy whips out of the chaos storm to strike (?<target>\w+), \w+ face going blank for a brief instant on contact\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
  }),
  stormCommand2: new SkillDefinition({
    id: "stormCommand2",
    fullName: "Storm Command",
    firstPerson: /^A chaos storm disregards your order\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    info: "failed",
    tags: [],
    length: 0.5,
  }),
  bloodleechCommand: new SkillDefinition({
    id: "bloodleechCommand",
    fullName: "Bloodleech Command",
    firstPerson:
      /^You command your bloodleech to corrupt the blood of (?<target>\w+)\.$/,
    secondPerson:
      /^A bloodleech scuttles over your skin, tentacle-like appendages scratching and scraping\. Something is very wrong\.\.\.$/,
    thirdPerson:
      /^A bloodleech scuttles over the skin of (?<target>\w+), its tentacle-like appendages scratching and scraping\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
  }),
  sycophantCommand: new SkillDefinition({
    id: "sycophantCommand",
    fullName: "Sycophant Command",
    firstPerson:
      /^You command your sycophant to weaken the mind of (?<target>\w+)\.$/,
    secondPerson:
      /^The muttering emanating from the sycophant increases to a sudden crescendo, and your head begins to spin\.$/,
    thirdPerson:
      /^The sycophant of (?<user>\w+) hunches forward and begins muttering incessantly at (?<target>\w+), who sways unsteadily\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2,
  }),
  slimeCommand: new SkillDefinition({
    id: "slimeCommand",
    fullName: "Slime Command",
    firstPerson: /^You command your slime to envelop (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) gestures sharply in your direction, and a mass of green slime flows up and over you, coating your skin\.$/,
    thirdPerson:
      /^(?<user>\w+) gestures toward (?<target>\w+), and a mass of green slime flows up and over \w+\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.6,
  }),
  slimeCommand2: new SkillDefinition({
    id: "slimeCommand",
    fullName: "Slime Command",
    secondPerson:
      /^Despite your best efforts some of the slime slips into your mouth and down your throat, your body struggling to breathe but receiving only virilant sludge\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.6,
  }),
  chimeraCommandDeaf: new SkillDefinition({
    id: "chimeraCommandDeaf",
    fullName: "Chimera Command",
    firstPerson: [
      /^You command your chimera to bring \w+ low\.$/,
      /^A chimera throws forward all three of its heads and roars at (?<target>\w+), but \w+ seems completely unphased\.$/,
    ],
    secondPerson:
      /^A chimera throws all three of its heads forward and opens its mouth, but you hear only the slightest whisper of sound\.$/,
    thirdPerson:
      /^A chimera throws forward all three of its heads and roars at (?<target>\w+), but \w+ seems completely unphased\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    info: "Deaf",
    length: 2.6,
  }),
  chimeraCommand: new SkillDefinition({
    id: "chimeraCommand",
    fullName: "Chimera Command",
    firstPerson: [
      /^You command your chimera to bring \w+ low\.$/,
      /^A chimera lets out a concussive roar at (?<target>\w+)\.$/,
    ],
    secondPerson:
      /^A chimera lets out a concussive roar, all three of the creatures heads thrown forward toward you\.$/,
    thirdPerson: /^A chimera lets out a concussive roar at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.6,
  }),
  bubonisComand: new SkillDefinition({
    id: "bubonisCommand",
    fullName: "Bubonis Command",
    secondPerson:
      /^A bubonis reaches out and strokes the side of your face, and you feel your entire body suffer. Boils form and rupture and you feel your lungs burn as they fill with fluid\.$/,
    thirdPerson:
      /^A bubonis reaches out and strokes the side of (?<target>\w+)'s face, and boils form and rupture in an instant as \w+ begins hacking up black fluid\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.4,
  }),
  wormCommand: new SkillDefinition({
    id: "wormCommand",
    fullName: "Worm Command",
    firstPerson:
      /^You command your worm to infest (?<target>\w+) with maggots\.$/,
    secondPerson:
      /^A worm spews a stream of maggots at you, and they begin burrowing into your flesh\.$/,
    thirdPerson:
      /^A worm spews a writhing mass of maggots at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
  }),
  wormTick: new SkillDefinition({
    id: "wormTick",
    fullName: "Worm Tick",
    // same message as third person
    secondPerson:
      /^The maggots of Palpatar continue to feed upon your flesh, leeching away your vitality\.$/,
    thirdPerson:
      /^Many somethings writhe beneath the skin of (?<target>\w+), and the sickening sound of chewing can be heard\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
  }),
  croneCommand: new SkillDefinition({
    id: "croneCommand",
    fullName: "Crone Command",
    firstPerson:
      /^You command your crone to wither the (?<limb>.+?) of (?<target>\w+)\.$/,
    secondPerson:
      /^A withered crone reaches out and caresses your (?<limb>.+?), and an icy chill radiates up the limb as it withers away\.$/,
    thirdPerson:
      /^A withered crone reaches out to caress the (?<limb>.+?) of (?<target>\w+), the limb withering away under her gnarled grasp\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: ["aff"],
    affs: [],
    length: 2.35,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  }),
  abominationCommand: new SkillDefinition({
    id: "abominationCommand",
    fullName: "Abomination Command",
    firstPerson:
      /^You command an eldritch abomination to discern the doom of (?<target>\w+)\.$/,
    secondPerson:
      /^Violet tendrils lash out from an eldritch abomination, plunging into you. Though they cause no physical harm, you feel a horrific tearing sensation, as if a fundamental part of your essence has been violated and exposed\.$/,
    thirdPerson:
      /^Incandescent tendrils lash out from an eldritch abomination, plunging into (?<target>\w+)\. \w+ back arches and eyes bulge as violet light pours from \w+ mouth in a ghastly parody of a scream\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    info: "truename",
    tags: [],
    length: 2.6,
  }),
  abominationCommandFail: new SkillDefinition({
    id: "abominationCommandFail",
    fullName: "Abomination Command",
    firstPerson:
      /^An eldritch abomination cannot discern anything through the natural defences of (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    info: "Fail",
    tags: [],
    length: 2.6,
  }),
  gremlinCommandFail: new SkillDefinition({
    id: "gremlinCommandFail",
    fullName: "Gremlin",
    firstPerson:
      /^(?<target>\w+) has no shield for your gremlin to shatter, occultist\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    info: "No shield",
    tags: [],
    length: 2.75,
  }),
  gremlinCommand: new SkillDefinition({
    id: "gremlinCommand",
    fullName: "Gremlin Command",
    firstPerson:
      /^You command your gremlin to shatter the defences surrounding (?<target>.+?)\.$/,
    secondPerson:
      /^With a mad cackle, a gremlin leaps at you and batters your shield with a flurry of blows, fracturing it in moments\.$/,
    thirdPerson:
      /^A gremlin leaps at (?<target>\w+), cackling madly as it delivers blow after blow against \w+ magical shield\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    info: "raze",
    tags: ["raze"],
    length: 2.75,
  }),
  firelordCommand: new SkillDefinition({
    id: "firelordCommand",
    fullName: "Firelord Command",
    firstPerson:
      /^You command your firelord to bring down a portion of the power of Pyradius against (?<target>\w+)\.$/,
    secondPerson:
      /^As a firelord glares at you, sudden agonising heat ignites in your veins. It is gone as swiftly as it came, but you feel suddenly lightheaded\.$/,
    thirdPerson:
      /^A firelord glances briefly at (?<target>\w+), and a single spark leaps from its eyes to strike \w+\. \w+ convulses violently as if under some great strain, then it fades\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    info: false,
    tags: [],
    length: 2.6,
  }),
  firelordCommandFail: new SkillDefinition({
    id: "firelordCommandFail",
    fullName: "Firelord Command",
    firstPerson:
      /^(?<target>\w+) does not labour under any afflictions that Pyradius may warp\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    info: "Fail",
    tags: [],
    length: 2.6,
  }),
  //#endregion
  //#region PRIMEBONDS
  wormPrimebond: new SkillDefinition({
    id: "wormPrimebond",
    fullName: "Worm Primebond",
    secondPerson:
      /^The worm which is burrowed into your guts writhes and undulates, and you feel bile rising in the back of your throat\.$/,
    thirdPerson:
      /^The worm burrowing into (?<target>\w+) writhes and undulates\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 8.0,
  }),
  gremlinPrimebond: new SkillDefinition({
    id: "gremlinPrimebond",
    fullName: "Gremlin Primebond",
    secondPerson:
      /^The gremlin races between and around your legs, its eratic movement setting your head to spinning\.$/,
    thirdPerson:
      /^The gremlin races around and between the legs of (?<target>\w+), \w+ eyes tracking it as he sways unsteadily\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    affs: ["dizziness"],
    tags: ["affs"],
    length: 11.0,
  }),
  gremlinPrimebond2: new SkillDefinition({
    id: "gremlinPrimebond2",
    fullName: "Gremlin Primebond",
    secondPerson:
      /^The gremlin races between your legs, throwing you off-balance\.$/,
    thirdPerson: /^The gremlin races between the legs of (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    info: "balance", //off balance target if they already have dizziness
    affs: ["dizziness", "balance"],
    tags: ["affs"],
    length: 11.0,
  }),
  humbugPrimebond: new SkillDefinition({
    id: "humbugPrimebond",
    fullName: "Humbug Primebond",
    secondPerson:
      /^You feel the humbug sucking horribly against your skin, drawing away your very will to fight\.$/,
    thirdPerson:
      /^The humbug clinging to the throat of (?<target>\w+) expands with a squelching sound\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 5.0,
  }),
  bloodleechPrimebond: new SkillDefinition({
    id: "bloodleechPrimebond",
    fullName: "Bloodleech Primebond",
    secondPerson:
      /^The tentacles of the bloodleech burrow into your skin, seeking the veins and fresh sources of life-giving fluid\.$/,
    thirdPerson:
      /^The bloodleech clinging to (?<target>\w+) expands and contracts with a sickening sound\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 5.0,
  }),
  slimePrimebond: new SkillDefinition({
    id: "slimePrimebond",
    fullName: "Slime Primebond",
    secondPerson:
      /^You feel the slime attacking your physical well-being with its foul presence\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 10.0,
  }),
  bubonisPrimebond: new SkillDefinition({
    id: "bubonisPrimebond",
    fullName: "Bubonis Primebond",
    firstPerson:
      /^You sense the malignant glee of your bubonis as it infests (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 11.0,
  }),
  chimeraPrimebondGas: new SkillDefinition({
    id: "chimeraPrimebondGas",
    fullName: "Chimera Primebond",
    secondPerson:
      /^The chimera's dragon head exhales a cloud of gas at you, and you feel sleepy\.$/,
    thirdPerson:
      /^The chimera's dragon head exhales a cloud of gas at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    info: "sleep gas",
    length: 8.0,
  }),
  chimeraPrimebondRam: new SkillDefinition({
    id: "chimeraPrimebondRam",
    fullName: "Chimera Primebond",
    secondPerson:
      /^The chimera's goat head rams into you and knocks you sprawling\.$/,
    thirdPerson:
      /^The chimera's goat head rams into (?<target>\w+) and knocks \w+ sprawling\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    info: "ram",
    length: 8.0,
  }),
  chimeraPrimebondRoar: new SkillDefinition({
    id: "chimeraPrimebondRoar",
    fullName: "Chimera Primebond",
    secondPerson:
      /^The lion head on the chimera roars at you, stunning you with its power\.$/,
    thirdPerson:
      /^(?<target>\w+) is stunned by the roaring of the chimera's lion head\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    info: "roar",
    length: 8.0,
  }),
  chimeraPrimebondUndeaf: new SkillDefinition({
    id: "chimeraPrimebondUndeaf",
    fullName: "Chimera Primebond",
    secondPerson:
      /^The lion head on the chimera roars at you, restoring your hearing\.$/,
    thirdPerson:
      /^(?<target>\w+) is startled to attention by the roaring of the chimera's lion head\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    info: "undeaf",
    length: 8.0,
  }),
  cronePrimebond: new SkillDefinition({
    id: "cronePrimebond",
    fullName: "Crone Primebond",
    secondPerson:
      /^The crone strokes your (?<limb>.+?) gently, withering it into uselessness\.$/,
    thirdPerson:
      /^The crone withers (?<target>\w+)'s (?<limb>.+?) into uselessness\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    affs: [],
    info: false,
    length: 9.0,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  }),
  //#endregion
};

export default Object.values(domination);