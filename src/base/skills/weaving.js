import { SkillDefinition } from "../models/SkillDefinition";
export const weaving = {
  /** 
    The weaving of the weapon in the hand is to change the weapon.
    Repeated use of the same skill will not have the weaving message.
  */
  charge: new SkillDefinition({
    id: "charge",
    fullName: "Charge",
    firstPerson:
      //You weave a translucent spear into being, its ethereal form firming to corporeality in your hands.
      /^Charging forward, you drive a translucent spear into (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) rushes at you with a translucent spear, driving it deep into you\.$/,
    thirdPerson:
      //A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) rushes at (?<target>\w+), driving a translucent spear deep into \w+\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [], //20 bleed
    info: false,
    length: 2.3,
  }),
  cleaveMiss: new SkillDefinition({
    id: "cleaveMiss",
    fullName: "Cleave",
    firstPerson:
      //You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
      /^Your blow scythes through the air in front of (?<target>.+?), missing entirely\.$/,
    secondPerson: [
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon you\.$/,
      /^The blow scythes through the air in front of you, missing entirely\.$/,
    ],
    //MISS. No shield
    thirdPerson: [
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon (?<target>.+?)\.$/,
      /^(?<user>\w+)'s blow scythes through nothing but air\.$/,
    ],
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
  }),
  cleaveHit: new SkillDefinition({
    id: "cleaveHit",
    fullName: "Cleave",
    firstPerson:
      //You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
      /^Your blow cleaves through the magical shield surrounding (?<target>.+?), continuing on to drive \w+ from \w+ feet\.$/,
    secondPerson: [
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon you\.$/,
      /^The blow cleaves through your magical shield, shattering it and knocking you from your feet!$/,
    ],
    //HIT. Prone
    thirdPerson: [
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon (?<target>.+?)\.$/,
      /^The blow cleaves through the magical shield surrounding (?<target>.+?), shattering it!$/,
    ],
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
  }),
  overhand: new SkillDefinition({
    id: "overhand",
    fullName: "Overhand",
    firstPerson:
      /^You bring a translucent mace around in a savage overhand strike, smashing it into the face of (?<target>\w+)\.$/,
    //As your blow lands with a crunch, you perceive that you have dealt 28.4% damage to Khaseem's head.
    secondPerson:
      /^Stars explode in front of your eyes as (?<user>\w+) smashes a translucent mace into the side of your head\.$/,
    thirdPerson:
      //^A translucent mace coalesces in (?<user>\w+?)'s hands, firming as it gains substance beyond the incorporeal\.$/,
      /^(?<user>\w+?) brings a translucent mace around in a savage overhand strike, smashing it into the head of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"], //stupidity + prone OR impatience if already prone
    length: 2.2,
  }),
  hamstring: new SkillDefinition({
    id: "hamstring",
    fullName: "Hamstring",
    firstPerson:
      //You weave a translucent dagger into being, its ethereal form firming to corporeality in your hands.
      /^You duck low, your blade slicing into the (?<limb>\w+? leg) of (?<target>\w+)\.$/,
    //As you carve into Khaseem, you perceive that you have dealt 21.7% damage to his right leg.
    secondPerson:
      //A translucent dagger coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) ducks low, \w+ blade slicing into your (?<limb>\w+? leg)\.$/,
    //Khaseem stumbles, falling to the ground. //Mangled leg + prone
    thirdPerson:
      /^(?<user>\w+?) ducks low, \w+ blade slicing into the (?<limb>\w+? leg) of (?<target>\w+)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  }),
  entwineProne: new SkillDefinition({
    id: "entwineProne",
    fullName: "Entwine",
    firstPerson:
      //You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
      /^You lash out with a translucent lash, entangling it about the feet of (?<target>\w+) and sending \w+ tumbling to the ground with a sharp tug\.$/,
    secondPerson:
      //A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) lashes out with a translucent lash, entangling it about you and sharply yanking you off your feet\.$/,
    thirdPerson:
      /^(?<user>\w+) lashes out with a translucent lash, entangling it about (?<target>\w+) and yanking \w+ off \w+ feet\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["prone"],
    length: 2.3,
    info: "prone",
  }),
  entwineEntangle: new SkillDefinition({
    id: "entwineEntangle",
    fullName: "Entwine",
    firstPerson:
      //You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
      /^You lash out with a translucent lash, expertly wrapping it about the prone form of (?<target>\w+)\.$/,
    secondPerson:
      //A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) lashes out at you with a translucent lash, expertly entangling you within its coils\.$/,
    thirdPerson:
      /^(?<user>\w+) lashes out at (?<target>\w+) with a translucent lash, expertly entangling \w+ within its coils\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["entangled"],
    length: 2.3,
    info: "entangled",
  }),
  disruption: new SkillDefinition({
    id: "disruption",
    fullName: "Disruption",
    firstPerson:
      /^Lightning explodes from your blade as you hack into (?<target>\w+), \w+ body locking up as the current rips through \w+\.$/,
    secondPerson:
      /^Your body locks up as lightning explodes from the blade as it hacks into you\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["paralysis"],
    length: 0,
    info: false,
  }),
  disruption2: new SkillDefinition({
    id: "disruption2",
    fullName: "Disruption",
    firstPerson:
      /^Lightning explodes from your weapon as it smashes into (?<target>\w+), \w+ body locking up in agony as it rips through \w+\.$/,
    secondPerson:
      /^Lightning explodes from the \w+ as it smashes into you, your body locking in agony as the current rips through your body\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["paralysis"],
    length: 0,
    info: false,
  }),
  laceration: new SkillDefinition({
    id: "laceration",
    fullName: "Laceration",
    firstPerson:
      /^Your blade tears into (?<target>\w+), a spray of crimson exploding from the wound as your weapon strikes bone\.$/,
    secondPerson:
      /^Blood sprays from your wounds as the blade tears into you, cleaving to the bone\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["haemophilia"],
    length: 0,
    info: false,
  }),
  laceration2: new SkillDefinition({
    id: "laceration2",
    fullName: "Laceration",
    firstPerson:
      /^The spikes adorning your (mace|lash) tear bloody furrows in the flesh of (?<target>\w+)\.$/,
    secondPerson:
      /^The spikes adorning the (mace|lash) rip into your flesh, tearing bloody furrows\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["haemophilia"],
    length: 0,
    info: false,
  }),
  dazzle: new SkillDefinition({
    id: "dazzle",
    fullName: "Dazzle",
    firstPerson:
      /^As your weapon strikes (?<target>\w+) a brilliant flash of light explodes forth\.$/,
    secondPerson:
      /^As the weapon strikes you, an incandescent burst of light explodes forth, dazing you\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["clumsiness"],
    length: 0,
    info: false,
  }),
  rattle: new SkillDefinition({
    id: "rattle",
    fullName: "Rattle",
    firstPerson:
      /^As your weapon strikes (?<target>\w+), power blasts outward in a concussive wave\.$/,
    secondPerson:
      /^As the weapon strikes you, a concussive wave lashes out and slams into you with brain-rattling force\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["epilepsy"],
    length: 0,
    info: false,
  }),
  vapours: new SkillDefinition({
    id: "vapours",
    fullName: "Vapours",
    firstPerson:
      /^As your weapon strikes (?<target>\w+) a wave of cloying vapours rolls over \w+\.$/,
    secondPerson:
      /^As the weapon strikes you, a wave of cloying vapour rolls over you, slithering into your lungs and causing your breath to falter\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "free",
    tags: [],
    affs: ["asthma"],
    length: 0,
    info: false,
  }),
  lightsteal: new SkillDefinition({
    id: "lightsteal",
    fullName: "Lightsteal",
    firstPerson:
      /^You slash a translucent dagger across the eyes of (?<target>\w+?), viciously robbing \w+ of sight\.$/,
    secondPerson:
      /^Horrific pain overcomes you as (?<user>\w+?) slashes a translucent dagger across your eyes in a lightning-fast motion, the world falling into darkness\.$/,
    thirdPerson:
      /^(?<user>\w+?) slashes a translucent dagger across the eyes of (?<target>\w+?) in a lightning-fast motion\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["trueblind"], //5s trueblind. +blackout if prone
    length: 2.3,
  }),
  puncture: new SkillDefinition({
    id: "puncture",
    fullName: "Puncture",
    firstPerson:
      /^With a lightning-fast jab of your blade you puncture the cluster of nerves just below the (left|right) shoulder of (?<target>\w+?)\.$/,
    secondPerson:
      /^A terrible weariness overcomes you as (?<user>\w+?) darts out \w+ blade and drives the tip into you just beneath your (left|right) shoulder\.$/,
    thirdPerson:
      /^(?<user>\w+?) lashes out with lightning speed, \w+ blade driving into (?<target>\w+?) just beneath \w+ (right|left) shoulder\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    length: 2.3,
    affs: ["weariness"],
  }),
  sever: new SkillDefinition({
    id: "sever",
    fullName: "Sever",
    firstPerson:
      /^With a precise strike you sever the muscles in the (?<limb>\w+? arm) of (?<target>\w+?)\.$/,
    secondPerson:
      /^Your (?<limb>\w+? arm) flops uselessly as (?<user>\w+?) severs the muscles in it with a precise blow of \w+ translucent sword\.$/,
    thirdPerson:
      /^(?<user>\w+?) severs the muscles in the (?<limb>\w+? arm) of (?<target>\w+?) with a precise blow of \w+ translucent sword\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
      action.affs = ["clumsiness"];
    },
  }),

  //TODO Launch

  unweave: new SkillDefinition({
    id: "unweave",
    fullName: "Unweave",
    firstPerson:
      /^You lash at (?<target>\w+?) with a translucent lash, directing the fundamental weave of \w+ (?<info>\w+) to begin unwinding\.$/,
    secondPerson:
      /^(?<user>\w+?) delivers a series of lashes against you with a translucent lash, and the very fabric of your being violently rebels against your mortal flesh\.$/,
    thirdPerson:
      /^(?<user>\w+?) delivers a series of lashes to (?<target>\w+?) with a translucent lash\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: [],
    length: 2.2,
  }),
  deathblow: new SkillDefinition({
    id: "deathblow",
    fullName: "Deathblow",
    firstPerson:
      /^Striking like coiled lightning, your hand flashes out and lays open the throat of (?<target>\w+?) with a translucent dagger in a spray of crimson\.$/,
    secondPerson:
      /^A sharp pain across your throat and a sudden lack of breath comes moments before you register the retreat of (?<user>\w+?), bloody dagger in hand\.$/,
    thirdPerson:
      /^Almost too swift to perceive, (?<user>\w+?) lashes out with a translucent dagger, tracing a bloody line across the throat of (?<target>.+?)\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["pve", "damage", "aff"],
    affs: ["asthma"],
    length: 2.2,
  }),
  backhand: new SkillDefinition({
    id: "backhand",
    fullName: "Backhand",
    firstPerson:
      /^You deliver a savage backhanded blow with a translucent mace to the face of (?<target>\w+?)\.$/,
    secondPerson:
      /^Pain explodes through your skull as (?<user>\w+?) brings a translucent mace around in a savage backhanded blow to your face\.$/,
    thirdPerson:
      /^(?<user>\w+?) delivers a backhanded blow to the face of (?<target>\w+?) with a translucent mace\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: ["asthma"],
    length: 2.2,
  }),
  invert: new SkillDefinition({
    id: "invert",
    fullName: "Invert",
    firstPerson:
      /^You pluck at the weave of (?<target>\w+?), swapping the states of \w+ (?<old>\w+?) and (?<new>\w+?)\.$/,
    secondPerson:
      /^(?<user>\w+?) plucks at invisible threads in the air before \w+, and you feel a sudden nausea as your fundamental essence shifts\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: [],
    length: 2.3,
  }),
  exsanguinate: new SkillDefinition({
    id: "exsanguinate",
    fullName: "Exsanguinate",
    firstPerson:
      /^Stepping forward, you brutally drive a translucent sword into (?<target>\w+?)'s guts, ripping it free in a spray of crimson\.$/,
    secondPerson:
      /^With a brutal thrust of a translucent sword, (?<user>\w+?) sinks \w+ weapon into your guts, ripping it free in a spray of crimson\.$/,
    thirdPerson:
      /^(?<user>\w+?) drives a translucent sword into the guts of (?<target>\w+?) with a brutal thrust, ripping it free in a spray of crimson\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: ["nausea"], // bleeding 150+ gives anorexia also
    length: 2.3,
  }),
  flurry: new SkillDefinition({
    id: "flurry",
    fullName: "Flurry",
    firstPerson:
      /^You rush at (?<target>\w+?), unleashing a flurry of (\d+) blow with your blade to rend \w+ asunder\.$/,
    secondPerson:
      /^In a blur of motion (?<user>\w+?) rushes at you, \w+ blade rending your flesh in a devastating flurry of (\d) strike\.$/,
    thirdPerson:
      /^(?<user>\w+?) rushes at (?<target>\w+?), slashing at \w+ (\d) times in a flurry of lethal motion\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: [],
    length: 2.3,
  }),
};
//charge
//You weave a translucent spear into being, its ethereal form firming to corporeality in your hands.
//cleave
//You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
//overhand
//You weave a translucent mace into being, its ethereal form firming to corporeality in your hands.
//hamstring
//You weave a translucent dagger into being, its ethereal form firming to corporeality in your hands.
//entwine
//You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
//puncture
//You weave a translucent sword into being, its ethereal form firming to corporeality in your hands.

//A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//^A translucent mace coalesces in (?<user>\w+?)'s hands, firming as it gains substance beyond the incorporeal\.$/,
//A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent dagger coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent sword coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
export default Object.values(weaving);