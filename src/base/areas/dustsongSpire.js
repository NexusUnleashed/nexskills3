import { checkRandomLimbs, checkSensitivity } from "../utilities";

const dustSongSpire = [
  //#region a windstone giant
  {
    user: "a windstone giant",
    firstPerson:
      "With a sudden rush of air, a windstone giant whirls forward on a rising gust to slam its weight into you.",
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.5,
  },
  {
    user: "a windstone giant",
    firstPerson:
      "Gusting forward without warning, a windstone giant barrels into you and knocks you flat.",
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a windstone giant",
    firstPerson:
      "A windstone giant arcs its rocky fist downward and slams it into the top of your head with brutal force.",
    thirdPerson: false,
    tags: ["damage", "stupidity", "Parry Head"],
    length: 2.5,
  },
  {
    user: "a windstone giant",
    firstPerson:
      "A windstone giant sweeps a rock-forged arm through the air, hurling a violent gust into your chest.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  //#endregion
  //#region an errant dust elemental
  {
    user: "an errant dust elemental",
    firstPerson:
      /^With a sudden lurch, an errant dust elemental slams a bone-like forelimb into your (?<limb>.+)\.$/,
    thirdPerson: false,
    tags: ["damage", "Parry Leg"],
    length: 2.5,
  },
  {
    user: "an errant dust elemental",
    firstPerson:
      "An errant dust elemental hammers your skull with both arms, each strike like a stone mallet crunching into bone.",
    thirdPerson: false,
    tags: ["damage", "prone", "Parry Head"],
    length: 2.5,
  },
  //#endregion
  //#region an unbound dust elemental
  {
    user: "an unbound dust elemental",
    firstPerson:
      "With a sharp gust, an unbound dust elemental envelops you in buffets of dry wind and choking grit.",
    thirdPerson: false,
    tags: ["damage", "BLACKOUT"],
    length: 2.5,
  },
  {
    user: "an unbound dust elemental",
    firstPerson:
      "Grit scrapes across your eyes as an unbound dust elemental spins tightly, blasting you with gusts of dry wind.",
    thirdPerson: false,
    tags: ["damage", "BLACKOUT"],
    length: 2.5,
  },
  {
    user: "an unbound dust elemental",
    firstPerson:
      "You stumble as an unbound dust elemental compresses the air around you, pulling its wind and grit back inward.",
    thirdPerson: false,
    tags: ["damage", "???"],
    length: 2.5,
  },
  {
    user: "an unbound dust elemental",
    firstPerson:
      "Air tightens like a vise around your body as an unbound dust elemental pulls you inwards, crushing with enough force to snap your bones like brittle twigs.",
    thirdPerson: false,
    tags: ["damage", "nausea", "skullfractures", "crackedribs"],
    length: 2.5,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
  //#region an errant scree elemental
  {
    user: "an errant scree elemental",
    firstPerson:
      "You stumble backwards as a sudden expulsion from  an errant scree elemental blasts you with a spray of fractured rock",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "an errant scree elemental",
    firstPerson:
      "Razor-edged shards of stone whistle sharply as they fly out of an errant scree elemental and slice deep gouges in your flesh.",
    thirdPerson: false,
    tags: ["damage", "haemophilia"],
    length: 2.5,
  },
  {
    user: "an errant scree elemental",
    firstPerson:
      "An errant scree elemental drives a jagged shard into your side, tearing flesh from bone.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an errant scree elemental",
    firstPerson:
      "Grinding forward, an errant scree elemental crashes into you in a violent whirlwind of broken stone and rock.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  //#endregion
  //#region an unbound scree elemental
  {
    user: "an unbound scree elemental",
    firstPerson:
      "An unbound scree elemental drives a stony fist into your chest with bone-jarring force.",
    thirdPerson: false,
    tags: ["damage", "Parry Torso"],
    length: 2.5,
  },
  {
    user: "an unbound scree elemental",
    firstPerson:
      "With a grinding roar, an unbound scree elemental claps its stone arms together, unleashing a shockwave of concussive air that slams into you.",
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  {
    user: "an unbound scree elemental",
    firstPerson: [
      "An unbound scree elemental slams its stone fists downwards.",
      "With a low, quaking rumble, the ground beneath you erupts, flinging you into the air in a bursting geyser of wind and stone.",
    ],
    thirdPerson: false,
    tags: ["damage", "FLYING"],
    length: 2.5,
  },
  {
    user: "an unbound scree elemental",
    firstPerson:
      "A massive boulder of stone slams into you from below, cracking into your skull as the sky spins and you plummet toward the ground.",
    thirdPerson: false,
    tags: ["damage", "naused", "skullfractures"],
    length: 2.5,
  },
  {
    user: "an unbound scree elemental",
    firstPerson:
      "Shards of jagged rock slam into your side as an unbound scree elemental erupts violently.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an unbound scree elemental",
    firstPerson:
      "A sharp gust lifts an unbound scree elemental upwards, before it crashes downward, crushing you in a bone-shattering avalanche of loosed stone.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region a stone-forged shrike
  {
    user: "a stone-forged shrike",
    firstPerson:
      "A stone-forged shrike lashes forward, striking your skull with a sudden snap of its rock-carved beak.",
    thirdPerson: false,
    tags: ["damage", "Parry Head"],
    length: 2.5,
  },
  //#endregion
];

emberveil.forEach((event) => {
  event.areaId = [442]; // IRE 442
  event.areaName = "the Dustsong Spire";
});

export default dustSongSpire;
