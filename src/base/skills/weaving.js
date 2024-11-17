export const weaving = {
  /** 
    The weaving of the weapon in the hand is to change the weapon.
    Repeated use of the same skill will not have the weaving message.
  */
  charge: {
    id: "charge",
    fullName: "Charge",
    firstPerson:
      //You weave a translucent spear into being, its ethereal form firming to corporeality in your hands.
      /^Charging forward, you drive a translucent spear into (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) rushes at you with a translucent spear, driving it deep into you\.$/,
    thirdPerson:
      //A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+)Pamxen rushes at (?<target>\w+), driving a translucent spear deep into \w+\.$/,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [], //20 bleed
    info: false,
    length: 2.3,
  },
  cleaveMiss: {
    id: "cleaveMiss",
    fullName: "Cleave",
    firstPerson:
      //You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
      /^Your blow scythes through the air in front of (?<target>\w+), missing entirely\.$/,
    secondPerson:
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon you\.$/,
    //The blow scythes through the air in front of you, missing entirely. //MISS. No shield
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
  },
  cleaveHit: {
    id: "cleaveHit",
    fullName: "Cleave",
    firstPerson:
      //You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
      /^You bring a translucent battleaxe in a powerful overhead blow down upon (?<target>\w+)\.$/,
    //Your blow cleaves through the magical shield surrounding Khaseem, continuing on to drive him from his feet.
    secondPerson:
      /^(?<user>\w+) brings a translucent battleaxe down in a powerful overhanded blow upon you\.$/,
    //The blow cleaves through your magical shield, shattering it and knocking you from your feet! //HIT. Prone
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    info: false,
    length: 2.3,
  },
  overhand: {
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
  },
  hamstring: {
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
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
      action.affs = [`broken${action.limb.replace(" ", "")}`];
    },
  },
  entwineProne: {
    id: "entwineProne",
    fullName: "Entwine",
    firstPerson:
      //You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
      /^You lash out with a translucent lash, entangling it about the feet of (?<target>\w+) and sending \w+ tumbling to the ground with a sharp tug\.$/,
    secondPerson:
      //A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) lashes out with a translucent lash, entangling it about you and sharply yanking you off your feet\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["prone"],
    length: 2.3,
  },
  entwineEntalge: {
    id: "entwineEntalge",
    fullName: "Entwine",
    firstPerson:
      //You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
      /^You lash out with a translucent lash, expertly wrapping it about the prone form of (?<target>\w+)\.$/,
    secondPerson:
      //A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
      /^(?<user>\w+) lashes out at you with a translucent lash, expertly entangling you within its coils\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["entangled"],
    length: 2.3,
  },
  lightsteal: {
    id: "lightsteal",
    fullName: "Lightsteal",
    firstPerson:
      /^You slash a translucent dagger across the eyes of (?<target>\w+?), viciously robbing \w+ of sight\.$/,
    secondPerson:
      /^Horrific pain overcomes you as (?<user>\w+?) slashes a translucent dagger across your eyes in a lightning-fast motion, the world falling into darkness\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: ["trueblind"], //5s trueblind. +blackout if prone
    length: 2.3,
  },
  sever: {
    id: "sever",
    fullName: "Sever",
    firstPerson:
      /^With a precise strike you sever the muscles in the (?<limb>\w+? arm) of (?<target>\w+?)\.$/,
    secondPerson:
      /^Your (?<limb>\w+? arm) flops uselessly as (?<user>\w+?) severs the muscles in it with a precise blow of \w+ translucent sword\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    length: 2.3,
    reaction(action) {
      action.info = action.limb;
      action.affs = ["clumsiness", `broken${action.limb.replace(" ", "")}`];
    },
  },

  //TODO Launch

  unweave: {
    id: "unweave",
    fullName: "Unweave",
    firstPerson:
      /^You lash at (?<target>\w+?) with a translucent lash, directing the fundamental weave of \w+ (?<info>\w+) to begin unwinding\.$/,
    secondPerson:
      /^A sharp pain across your throat and a sudden lack of breath comes moments before you register the retreat of (?<user>\w+?), bloody dagger in hand\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: [],
    length: 2.2,
  },
  deathblow: {
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
    tags: ["aff"],
    affs: ["asthma"],
    length: 2.2,
  },
  exsanguinate: {
    id: "exsanguinate",
    fullName: "Exsanguinate",
    firstPerson:
      /^Stepping forward, you brutally drive a translucent sword into (?<target>\w+?)'s guts, ripping it free in a spray of crimson\.$/,
    secondPerson:
      /^With a brutal thrust of a translucent sword, (?<user>\w+?) sinks \w+ weapon into your guts, ripping it free in a spray of crimson\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: ["aff"],
    affs: ["nausea"], // bleeding 150+ gives anorexia also
    length: 2.3,
  },
  flurry: {
    id: "flurry",
    fullName: "Flurry",
    firstPerson:
      /^You rush at (?<target>\w+?), unleashing a flurry of (\d+) blow with your blade to rend him asunder\.$/,
    secondPerson:
      /^In a blur of motion (?<user>\w+?) rushes at you, his blade rending your flesh in a devastating flurry of (\d+) strike\.$/,
    thirdPerson: false,
    profession: ["psion"],
    skill: "weaving",
    balance: "balance",
    tags: [],
    affs: [],
    length: 2.3,
  },
};
//You weave a translucent spear into being, its ethereal form firming to corporeality in your hands.
//You weave a translucent battleaxe into being, its ethereal form firming to corporeality in your hands.
//You weave a translucent mace into being, its ethereal form firming to corporeality in your hands.
//You weave a translucent dagger into being, its ethereal form firming to corporeality in your hands.
//You weave a translucent lash into being, its ethereal form firming to corporeality in your hands.
//You weave a translucent sword into being, its ethereal form firming to corporeality in your hands.

//A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//^A translucent mace coalesces in (?<user>\w+?)'s hands, firming as it gains substance beyond the incorporeal\.$/,
//A translucent spear coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent dagger coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent lash coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
//A translucent sword coalesces in Khayyin's hands, firming as it gains substance beyond the incorporeal.
export default Object.values(weaving);
