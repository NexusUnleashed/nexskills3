import { checkRandomLimbs } from "../utilities";

const crust = [
  //#region an errant terraflame elemental
  {
    user: "an errant terraflame elemental",
    firstPerson:
      "An errant terraflame elemental shudders as its magma-hardened shell explodes, sending jagged, basalt shards ripping through your flesh.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an errant terraflame elemental",
    firstPerson:
      "An errant terraflame elemental hurls a spray of crumbling, burning stones at you, each blazing shard striking you with a burst of sparks.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an errant terraflame elemental",
    firstPerson:
      "With an explosion of embers and smoke, an errant terraflame elemental barrels forward to strike you with the weight of its igneous form.",
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.5,
  },
  {
    user: "an errant terraflame elemental",
    firstPerson:
      "Lava bubbles beneath an errant terraflame elemental as it surges forward, crashing into you with enough force to throw you off your feet.",
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  //#endregion
  //#region an unbound magma elemental
  {
    user: "an unbound magma elemental",
    firstPerson:
      "An unbound magma elemental flattens itself against the ground before erupting upward, shattering stone and kicking molten debris into the air.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an unbound magma elemental",
    firstPerson:
      "Your bones shudder as an unbound magma elemental lurches forward, slamming into you in a burst of hot embers.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an unbound magma elemental",
    firstPerson:
      "Surging low to the ground before lunging upward, an unbound magma elemental hurls globs of blistering lava at you.",
    thirdPerson: false,
    tags: ["damage", "blistered"],
    length: 2.5,
  },
  {
    user: "an unbound magma elemental",
    firstPerson:
      "Fire erupts from an unbound magma elemental as it contracts suddenly, throwing heat and pressure outward in a shockwave of flame.",
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  {
    user: "an unbound magma elemental",
    firstPerson:
      "An unbound magma elemental trembles violently before erupting in a blast of molten stone, flinging scalding arcs of lava in all directions.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an unbound magma elemental",
    firstPerson:
      "Shuddering in the wake of the assault, an unbound magma elemental's molten side convulses before a glob of living lava splits off, oozing into shape.",
    thirdPerson: false,
    tags: ["SUMMON"],
    length: 2.5,
  },
  //#endregion
  //#region an errant magma elemental
  {
    user: "an errant magma elemental",
    firstPerson:
      "With a sluggish lurch, an errant magma elemental tears into its molten flesh and throws a handful of searing liquid stone at you.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an errant magma elemental",
    firstPerson:
      "An errant magma elemental rakes stony claws into your flesh, tearing open wounds that sizzle and burn.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an errant magma elemental",
    firstPerson:
      "Dragging itself forward, an errant magma elemental latches onto you, pressing its molten body against your skin as flames erupt around you.",
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.5,
  },
  {
    user: "an errant magma elemental",
    firstPerson:
      /^With a bubbling groan, an errant magma elemental hammers its molten fist into your (?<limb>.+) with bone-cracking force\.$/,
    thirdPerson: false,
    tags: ["damage", "Parry Leg"],
    length: 2.5,
  },
  //#endregion
  //#region an obsidian ashhawk
  {
    user: "an obsidian ashhawk",
    firstPerson:
      "With a grinding screech, an obsidian ashhawk sweeps a razor-edged wing towards you, catching your ribs and slicing deep into your torso.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an obsidian ashhawk",
    firstPerson:
      "Your blood runs in rivulets as an obsidian ashhawk rakes the jagged, rocky edges of its wings across your body.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an obsidian ashhawk",
    firstPerson:
      "Rearing upwards with a flap of its stony wings, an obsidian ashhawk looses a volley of jagged shard-feathers into your body.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "an obsidian ashhawk",
    firstPerson:
      "Barrelling into you, an obsidian ashhawk knocks you over before digging its talons into your arm, snapping the bone like a stone vice.",
    thirdPerson: false,
    tags: ["damage", "numbedrightarm"],
    length: 2.5,
  },
  {
    user: "an obsidian ashhawk",
    firstPerson:
      "An obsidian ashhawk rushes forward, screeching like nails on glass as it rams into and tramples over you.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region a bubbling magma slime
  {
    user: "a bubbling magma slime",
    firstPerson:
      "Lurching forward, a bubbling magma slime wraps around you in a molten embrace.",
    thirdPerson: false,
    tags: ["damage", "web"],
    length: 2.5,
  },
  {
    user: "a bubbling magma slime",
    firstPerson: "A bubbling magma slime slams its molten mass into you.",
    thirdPerson: false,
    tags: ["damage", "web"],
    length: 2.5,
  },
  {
    user: "a bubbling magma slime",
    firstPerson:
      "Bursts of heat ripple across a bubbling magma slime as it crashes into you.",
    thirdPerson: false,
    tags: ["damage", "web"],
    length: 2.5,
  },
  //#endregion
  //#region a basalt-clad confrag
  {
    user: "a basalt-clad confrag",
    firstPerson:
      "Grinding like shifting stone, a basalt-clad confrag drives its arm towards you, slamming a rocky fist into your stomach.",
    thirdPerson: false,
    tags: ["damage", "asthma", "Parry Torso"],
    length: 2.5,
  },
  {
    user: "a basalt-clad confrag",
    firstPerson:
      "A basalt-clad confrag bellows like a volcano mid-eruption, the sound crashing into you in a blast of scalding air.",
    thirdPerson: false,
    tags: ["damage", "disrupted"],
    length: 2.5,
  },
  {
    user: "a basalt-clad confrag",
    firstPerson:
      "Grinding like shifting stone, a basalt-clad confrag swings its arm wildly in your direction, slamming the rocky appendage into your skull.",
    thirdPerson: false,
    tags: ["damage", "stupidity", "Parry Head"],
    length: 2.5,
  },
  {
    user: "a basalt-clad confrag",
    firstPerson:
      "Gripping you like a ragdoll, a basalt-clad confrag slams you back and forth into the ground, pounding the earth with your body.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  //#endregion
  //#region a hulking lavagorger
  {
    user: "a hulking lavagorger",
    firstPerson:
      "A hulking lavagorger lunges in, crashing into you in a raging flurry of spraying fire, rending claw, and gnashing tooth.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a hulking lavagorger",
    firstPerson:
      "Fire bursts from a hulking lavagorger's jaws as he bites into you, ripping out a sizzling chunk of raw flesh with his teeth.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a hulking lavagorger",
    firstPerson:
      "Driving a muscled limb into molten earth, a hulking lavagorger launches a spray of scalding lava at you.",
    thirdPerson: false,
    tags: ["damage", "tenderskin"],
    length: 2.5,
  },
  {
    user: "a hulking lavagorger",
    firstPerson:
      "Spinning around, a hulking lavagorger swings his tail into your body with bone-shattering force.",
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
];

crust.forEach((event) => {
  event.areaId = [439]; // IRE 440
  event.areaName = "the Crust";
});

export default crust;
