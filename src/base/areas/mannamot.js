import { checkRandomLimbs, inBlock } from "../utilities";
const mannamot = [
  //#region Air
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental gestures as the air about and within you thickens, slowing your movements and leaving you gasping for air\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
    reaction(args) {
      if (inBlock("Your sense of time returns to normal.")) {
        args.tags.push("speed stripped");
      } else {
        args.tags.push("AEON");
      }
    },
  },
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental slices at you with its spear, sending a lash of hardened air slicing into you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental stabs its spear into your gut, sending electricity coursing through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "epilepsy"],
    length: 3.0,
  },
  {
    user: "a greater air elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater air elemental whirls its spear faster than your eye can follow, creating a whirlwind that sends nearby objects flying and batters everything within its reach\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Water
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater water elemental rears back and slams into you with its massive frozen fists\.$/,
    thirdPerson: false,
    tags: ["damage", "caloric"],
    length: 3.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^The torso of a greater water elemental bursts open to reveal several vicious piranhas, flying at you with jaws open to bite and tear with vicious abandon\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^Raising its arm towards you, a greater water elemental sends a torrent of freezing water to batter your body\.$/,
    thirdPerson: false,
    tags: ["damage", "lethargy", "caloric"],
    length: 3.0,
  },
  {
    user: "a greater water elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^The outermost layer of a greater water elemental's icy coating violently shatters, sending thousands of icy shards in every direction\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "caloric"],
    length: 3.0,
  },
  //#endregion
  //#region Earth
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater earth elemental breaks a large chunk away from its rocky form and hurls it at you, the projectile connecting with stunning force\.$/,
    thirdPerson: false,
    tags: ["damage", "Stun"],
    length: 3.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater earth elemental extends one arm towards you as a mass of writhing vines surge forward, slicing into you with thorns dripping with violet toxins\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 3.0,
  },
  {
    user: "a greater earth elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^As a greater earth elemental wraps a massive hand around your torso and squeezes you tightly, you feel it draining away your will to live\.$/,
    thirdPerson: false,
    tags: ["damage", "heal"],
    length: 3.0,
  },
  //#endregion
  //#region Fire
  {
    id: "aGreaterFireElemental.1",
    user: "a greater fire elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater fire elemental claws at you with its spindly arms, burning wounds deep into your torso\.$/,
    thirdPerson: false,
    tags: ["damage", "burnx2"],
    length: 3.0,
  },
  {
    id: "aGreaterFireElemental.2",
    user: "a greater fire elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater fire elemental flares brightly as it emits a pulse of flame, scorching everything within reach\.$/,
    thirdPerson: false,
    tags: ["damage", "burnx2"],
    length: 3.0,
  },
  {
    id: "aGreaterFireElemental.3",
    user: "a greater fire elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater fire elemental makes a winding gesture in your direction, igniting a fiery pain in your stomach\.$/,
    thirdPerson: false,
    tags: ["damage", "nausea"],
    length: 3.0,
  },
  {
    id: "aGreaterFireElemental.4",
    user: "a greater fire elemental",
    areaId: [330],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A greater fire elemental reaches up and removes its mask, the pure brightness and heat causing your face to burn and your vision to fade\.$/,
    thirdPerson: false,
    tags: ["damage", "tenderskin", "blackout"],
    length: 3.0,
  },
];
//#endregion

export default mannamot;
//The fires consuming your flesh begin to crackle with greater intensity. 2
//Your vision begins to fade with the all-consuming agony of the fires that are consuming you. 3

//The pain of your burned skin meeting salve makes your head spin. curing predict tenderskin
