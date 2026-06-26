import { SkillDefinition } from "../models/SkillDefinition";
const bladedance = {
  //raze miss
  punctuate: new SkillDefinition({
    id: "punctuate",
    fullName: "Punctuate",
    //Your blade's song punctuates every jab as your movements become a flurry of blows aimed at (Laorir).
    //Your rapier strikes only air in front of (Laorir).
    firstPerson: /^Your rapier strikes only air in front of (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) strikes only air with \w+ flurry of blows, the tip of \w+ rapier flickering before your face\.$/, //line in-game: Dzak strikes only air with his flurry of blows, the tip of his rapier flickering before your face.   note: 2 lines for this as well, the first being generic and is: The staccato song of an etched, Vashnari rapier punctuates a flurry of blows as Dzak's blade pursues you relentlessly.
    thirdPerson: [
      /^(?<user>\w+)'s movement yields to a flurry of blows upon (?<target>\w+), the staccato song of .+? accompaniment\.$/,
      /^(?<user>\w+) strikes only air in front of (?<target>\w+) with \w+ flurry of blows.$/,
    ],
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["raze"],
    affs: [],
    info: "Nothing",
    length: 2.0,
  }),
  //raze hit
  punctuateRaze: new SkillDefinition({
    id: "punctuate",
    fullName: "Punctuate",
    //Your blade's song punctuates every jab as your movements become a flurry of blows aimed at (Laorir).
    //The anti-weapon field surrounding (Laorir) shatters under the point of your rapier.
    firstPerson: [
      /^Your blade's song punctuates every jab as your movements become a flurry of blows aimed at (?<target>\w+)\.$/,
      /^The anti-weapon field surrounding (?<target>\w+) shatters under the point of your rapier\.$/,
    ],
    //The staccato song of an etched, Vashnari rapier punctuates a flurry of blows as Dzak's blade pursues you relentlessly.
    //The anti-weapon field surrounding you shatters under the flurry of strikes.
    secondPerson:
      /^The anti-weapon field surrounding you shatters under the flurry of strikes\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["raze"],
    affs: [],
    info: "raze Rebounding",
    length: 2.0,
  }),
  hound: new SkillDefinition({
    id: "hound",
    fullName: "Hound",
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  }),
  jab: new SkillDefinition({
    id: "jab",
    fullName: "Jab",
    //You dart out an etched, Vashnari rapier in a lightning-fast jab to the left arm of (Laorir).
    firstPerson:
      /^You dart out .+? in a lightning-fast jab to the (?<limb>.+?) of (?<target>.+?)\.$/,
    //Dzak darts out with an etched, Vashnari rapier in a lightning-fast jab towards your left arm.
    secondPerson:
      /^(?<user>\w+) darts out with .+? in a lightning-fast jab towards your (?<limb>.+?)\.$/,
    thirdPerson:
      /^(?<user>\w+) darts out with .+? in a lightning-fast jab towards the (?<limb>.+?) of (?<target>.+?)\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["pve", "damage"],
    affs: [],
    info: false,
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
    },
    //FRONT-TORSO: Your blade slips through the guard of Mornath, sinking into vulnerable organs before you swiftly withdraw.
    //FRONT-TORSO: (Myrddin) looks queasy as the blade of (Dunn) slides home and clear in a flawless strike and withdraw.
    //SIDE-TORSO: Your blade slides between the ribs of Mornath before you swiftly withdraw.
    //SIDE-TORSO: The blade of (Dunn) slips into the body of (Myrddin) as breath rushes from his mouth in a silent gasp.
  }),
  flick: new SkillDefinition({
    id: "flick",
    fullName: "Flick",
    //You flick out with the point of an etched, Vashnari rapier, song blessed steel singing a keening note towards (Laorir).
    firstPerson:
      /^You flick out with the point of .+? song blessed steel singing a keening note towards (?<target>.+?)\.$/,
    //Dzak flicks out with an etched, Vashnari rapier towards you, a keening note raising from the blade's lunge.
    secondPerson:
      /^(?<user>\w+) flicks out with .+? towards you, a keening note raising from the blade's lunge\.$/,
    thirdPerson:
      /^(?<user>\w+) flicks out with .+? towards (?<target>\w+), a keening note rising from the blade's lunge\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["aff"],
    affs: [], // From front: crescendo. From side: earworm. From back: both crescendo and earworm.
    info: false,
    length: 2.3,
    //FRONT: A rich, vibrant hum rises from your blade as it finds the flesh of Mornath.
    //SIDE: A hum on the edge of hearing emanates from your blade as it finds the flesh of Mornath.
    //SIDE: A hum on the edge of hearing emanates from the blade of (Dunn) as it finds the flesh of (Keturah).
    //BACK: A grim note knells from your blade as it finds the flesh of Mornath.
  }),
  flourish: new SkillDefinition({
    id: "flourish",
    fullName: "Flourish",
    firstPerson:
      /^You weave .+? through the air in a dazzling display, the music of your bladesong sweeping forth to wash over (?<target>.+?) while your feet shift to a new stance\.$/, //line in-game: You weave an etched, Vashnari rapier through the air in a dazzling display, the music of your bladesong sweeping forth to wash over (Laorir) while your feet shift to a new stance.
    secondPerson:
      /^(?<user>\w+) weaves .+? through the air in a dazzling display, and in the moment of your distraction \w+ is no longer where \w+ was\.$/, //line in-game: Dzak weaves an etched, Vashnari rapier through the air in a dazzling display, and in the moment of your distraction he is no longer where he was.
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  }),
  highsun: new SkillDefinition({
    id: "highsun",
    fullName: "Highsun",
    //With a flourish of an etched, Vashnari rapier you step smoothly into (Laorir), your blade slicing at his head.
    firstPerson:
      /^With a flourish of .+? you step smoothly into (?<target>.+?), your blade slicing at \w+ (?<limb>.+?)\.$/,
    //With a flourish of an etched, Vashnari rapier Dzak steps in close, his blade slicing at your head.
    secondPerson:
      /^With a flourish of .+? (?<user>\w+) steps in close, \w+ blade slicing at your (?<limb>.+?)\.$/,
    thirdPerson:
      /^With a flourish of .+? (?<user>\w+) steps smoothly into (?<target>.+?), \w+ blade slicing at .+?'s (?<limb>.+?)\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["pve", "damage", "aff"],
    //FRONT-ARM: The song of an icy jade rapier rings out as the point slashes through the flesh of (Keturah) to cut at the tendons beneath.
    affs: [],
    info: false,
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
    },
  }),
  heelsnap: new SkillDefinition({
    id: "heelsnap",
    fullName: "Heelsnap",
    //An etched, Vashnari rapier sings with a metallic song as you direct a deep cut toward (Laorir)'s left leg.
    firstPerson:
      /^.+? sings with a metallic song as you direct a deep cut toward (?<target>.+?)'s (?<limb>.+?)\.$/,
    //Dzak's blade sings with a metallic song as he directs a deep cut towards your left leg.
    secondPerson:
      /^(?<user>\w+)'s blade sings with a metallic song as \w+ directs a deep cut towards your (?<limb>.+?)\.$/,
    thirdPerson:
      /^(?<user>\w+)'s blade sings with a metallic song as \w+ directs a deep cut towards the (?<limb>.+?) of (?<target>.+?)\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: ["pve", "damage", "aff"],
    affs: [], // From front: breaks leg. From side at left leg: healthleech. From side at right leg: sensitivity. From back: hamstrung and dismount.
    info: false,
    length: 2.3,
  }),
  sunrise: new SkillDefinition({
    id: "sunrise",
    fullName: "Sunrise",
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  }),
  sunset: new SkillDefinition({
    id: "sunset",
    fullName: "Sunset",
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  }),
  deathfrombelow: new SkillDefinition({
    id: "deathfrombelow",
    fullName: "Deathfrombelow",
    //You drop into a crouch, knees bent in perfect synchronicity as one foot sweeps out in a wide arc before tucking in close and tight. The power of a coiled spring surges within as muscle and bone and nerve contract and expand, and with an ululating shout you launch yourself like a living missile from ground to sky, your warcry ringing forth to herald your coming!
    //Carried into the skies by the force of feet and fury, your blade pierces the flesh of (Laorir) as your ululating cry gives way to a shout, "DEATH FROM BELOW!"
    firstPerson:
      /^Carried into the skies by the force of feet and fury, your blade pierces the flesh of (?<target>\w+) as your ululating cry gives way to a shout, "DEATH FROM BELOW!"$/,
    //An ululating cry rings out from below, but you have nary a moment to even react as like a living missile Dzak launches himself upward, his blade piercing your flesh while he shouts, "DEATH FROM BELOW!"
    secondPerson:
      /^An ululating cry rings out from below, but you have nary a moment to even react as like a living missile (?<user>\w+) launches \w+ upward, \w+ blade piercing your flesh while \w+ shouts, .+$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    tags: [],
    affs: [],
    info: false,
    length: 3,
  }),
  footwork: new SkillDefinition({
    id: "footwork",
    fullName: "Footwork",
    //On feet as light as snow, you begin to circle (Laorir), your partner in this most deadly dance.
    firstPerson:
      /^On feet as light as snow, you begin to circle (?<target>.+?), your partner in this most deadly dance\.$/,
    //With a deadly grace Dzak begins to circle you, rapier poised and ready to strike.
    secondPerson:
      /^With a deadly grace (?<user>\w+) begins to circle you, rapier poised and ready to strike\.$/,
    thirdPerson:
      /^With a deadly grace (?<user>\w+) begins to circle (?<target>.+?), \w+ rapier poised and ready to strike.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: false, //passive positioning. It always begins in the front position, but the "start" of the footwork passive gives a different line.
    tags: [],
    affs: [],
    info: false,
    length: false,
  }),
  footworkFront: new SkillDefinition({
    id: "footworkFront",
    fullName: "Footwork",
    firstPerson:
      /^Your deadly dance carries you back around to face (?<target>\w+)\.$/,
    //Dzak circles back to your front, rapier languidly swaying with the hypnotic grace of his dance.
    secondPerson:
      /^(?<user>\w+?) circles back to your front, rapier languidly swaying with the hypnotic grace of \w+ dance\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: false, //passive positioning.
    tags: [],
    affs: [],
    info: "front",
    length: false,
  }),
  footworkSide: new SkillDefinition({
    id: "footworkSide",
    fullName: "Footwork",
    //You continue to circle (Laorir), your deadly dance carrying you around to his flank.
    firstPerson:
      /^You continue to circle (?<target>\w+), your deadly dance carrying you around to \w+ flank\.$/,
    //Dzak continues to circle you, his deadly dance carrying him poised and ready around to your flank.
    secondPerson:
      /^(?<user>\w+) continues to circle you, \w+ deadly dance carrying \w+ poised and ready around to your flank\.$/,
    thirdPerson:
      /^(?<user>\w+) continues to circle (?<target>\w+), \w+ deadly dance carrying \w+ poised and ready around to \w+ partner's flank\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: false, //passive positioning.
    tags: [],
    affs: [],
    info: "side",
    length: false,
  }),
  footworkBack: new SkillDefinition({
    id: "footworkBack",
    fullName: "Footwork",
    //Your deadly dance carries you with lethal promise to the blindspot of (Laorir).
    firstPerson:
      /^Your deadly dance carries you with lethal promise to the blindspot of (?<target>\w+)\.$/,
    //Dzak continues to circle you, slipping in and out of your blindspot as he dances behind you.
    secondPerson:
      /^(?<user>\w+?) continues to circle you, slipping in and out of your blindspot as \w+ dances behind you\.$/,
    thirdPerson:
      /^(?<user>\w+?) continues to circle (?<target>\w+), rapier poised and ready as \w+ dances behind \w+ partner\.$/,
    profession: ["bard"],
    skill: "bladedance",
    balance: false, //passive positioning.
    tags: [],
    affs: [],
    info: "back",
    length: false,
  }),
};

export default Object.values(bladedance);