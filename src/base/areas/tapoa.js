const tapoa = [
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
    tags: ["damage", "prone", "brokenleftarm"], //TODO: reaction for the arm?
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
];

export default tapoa;
