import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";

const tapoa = [
  {
    user: "a blackfin shark",
    areaId: [162],
    areaName: "Tapoa Island",
    //A dark fin sinks below the ocean's surface, followed by an eerie silence.
    firstPerson:
      /^Slowly, the water below you begins to shift and without warning, a blackfin shark lunges towards you, biting into your flesh as you shriek in pain\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a blackfin shark",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Displaying bloody rows of razor-sharp teeth, a blackfin shark opens his mouth wide and clamps down around your torso, tearing chunks of flesh from your side\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a blackfin shark",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A blackfin shark cuts a slow circle around you through the water before turning almost instantaneously, driving his body toward you and ramming his snout into your gut\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a giant jellyfish",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A trail of sparks streams through the water as a giant jellyfish stretches his tentacles toward you, the tips striking your chest with a painful zap\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  //12:52:46.57s A thin tentacle flings towards you and wraps about your neck, tiny sparks flying as a giant jellyfish makes contact with your skin.
  //12:52:46.57s An excruciating burn spreads over your flesh as poison makes its way into your bloodstream.
  //12:52:46.57s You are confused as to the effects of the venom.
  {
    user: "a ravenous vulture",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Stretching his tattered wings a ravenous vulture lunges toward you, lowering his head to slam into your legs and knock you backwards\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
  },
  {
    user: "a ravenous vulture",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A ragged shriek pierces the air as a ravenous vulture tears at you with his claws, ripping bloody lacerations across your skin\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a ravenous vulture",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A ravenous vulture hurls his repugnant body at you, jabbing at your face with his curved beak in an attempt at gouging your eyes out\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a scraggly dingo",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^With a high-pitched yelp, a scraggly dingo leaps at you, locking his jaws around your arm and shaking his head vigorously\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a scraggly dingo",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Growling softly as he crouches low to the ground, a scraggly dingo quickly springs towards you, his open jaws clamping shut around your neck and piercing your jugular\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a scraggly dingo",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Snapping his jaws ferociously, a scraggly dingo runs between your legs, causing you to fall and hit your head on a nearby rock\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
  },
  {
    user: "a giant sandworm",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A giant sandworm launches itself at you, thousands of tiny teeth tearing viciously at your skin\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a giant sandworm",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Contracting into the sand and expanding with a burst of energy, a giant sandworm springs forward and rams you in the stomach, knocking the wind out of you\.$/,
    thirdPerson: false,
    tags: ["damage", "balance"],
  },
  {
    user: "a giant sandworm",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson: [
      /^In a flurry of sand, a giant sandworm disappears from view\.$/,
      /^A gaping hole opens suddenly at your feet as you are sucked under the sand, your air supply momentarily cut off before you are spat back out upon the surface\.$/,
    ],
    thirdPerson: false,
    tags: ["damage", "balance"],
  },
  {
    user: "a female ape",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Her patience wearing thin, a female ape strikes out at you with a powerful blow from her right leg\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a female ape",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A female ape emits a series of panicked shrieks, tearing at you with her teeth and scraping your skin with her fingernails until it is raw and bleeding\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a female ape",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^With an enraged howl, a female ape grabs your legs and lifts you above her head, whirling you about before effortlessly tossing you into the underbrush\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "the king ape",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^You freeze in horror as the king ape raises his mighty arms to the heavens and hurls himself downward, pounding your body into the ground\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "the king ape",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Grasping two large stones in either fist, the king ape brings his arms together to strike either side of your skull and crush your brain\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity"],
  },
  {
    user: "a blue-platted sand crab",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A blue-plated sand crab scuttles across the sand and jabs his pincer into your leg\.$/,
    thirdPerson: false,
    tags: ["damage"],
  },
  {
    user: "a large red kangaroo",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^Lashing out with her claws, a large red kangaroo rakes across your chest\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
  },
  {
    user: "a large red kangaroo",
    areaId: [162],
    areaName: "Tapoa Island",
    firstPerson:
      /^A large red kangaroo sweeps her tail at your face, heralding a sickening crack as you feel your nose break and blood begin to flow\.$/,
    thirdPerson: false,
    tags: ["damage", "nausea", "skullfractures"],
  },
];

export default tapoa;
