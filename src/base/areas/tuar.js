import { NpcDefinition } from "../models/NpcDefinition";
const tuar = [
  new NpcDefinition({
    user: "a Nelbennir scout",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^Drawing one long, bony hand from beneath his grey robes a Nelbennir scout grabs at you, seizing your shoulder and sending stabbing pain through your entire body\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir scout",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^Murmuring softly, a Nelbennir scout flicks a handful of fine red powder into your eyes, blinding you momentarily\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir scout",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^As a Nelbennir scout focuses intently upon you, his round, bulbous eyes cloud over darkly\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir dart-thrower",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^With a swift flick of his supple wrist, a Nelbennir dart-thrower lets fly a tiny, whistling dart towards you\.$/,
    tags: ["damage", "loki"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir dart-thrower",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir dart-thrower swiftly looses a handful of thin, narrow darts, sending their wickedly barbed heads deep into your soft flesh\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir elder",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir elder lifts his arms towards you and sends a rippling blast of magical energy into your chest\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir elder",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir elder raises his hands towards the ceiling and summons a billowing cloud of toxic poison all around you\.$/,
    tags: ["damage", "paralysis"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir elder",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir elder restrains you momentarily with his mesmerising, milky-white gaze before releasing your mind with an agonising wrench\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir alchemist",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir alchemist tilts his head back and emits a sharp, piercing wail, causing you to writhe and thrash about wildly as intense pain invades your mind\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir alchemist",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir alchemist produces a small vial and hurls it towards you. It breaks upon impact, covering you with a strange red liquid that burns your skin\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a Nelbennir alchemist",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A Nelbennir alchemist throws his head back and opens his tentacled mouth, spewing a thick, noxious bile upon you\.$/,
    tags: ["damage"],
    length: 0,
  }),

  new NpcDefinition({
    user: "a sinuous white salamander",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A sinuous white salamander rears back on its hind legs and snaps forward, sinking its sharp, serrated teeth into your leg\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a speckled eel",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A speckled eel's sinuous form hardens, sending a blinding pulse of white light through your entire body\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a speckled eel",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A speckled eel wriggles to and fro, digging its sharp teeth deep into your flesh\.$/,
    tags: ["damage"],
    length: 0,
  }),

  new NpcDefinition({
    user: "a warty stonefish",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A warty stonefish suddenly hardens and bristles all over as a myriad of needle-thin stingers shoot upwards and into your skin\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a warty stonefish",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson: /^You howl as a warty stonefish hacks into you\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a spotted pernicon",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A spotted pernicon rears up on its hind legs and snaps its body forwards, impaling you with its long, sickle-shaped mandibles\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a spotted pernicon",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^In a flash a spotted pernicon is before you with wings fully outstretched, reflecting rays of blinding light in every direction\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "an eight-legged aspis",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^An eight-legged aspis grips you firmly between its razor-sharp mandibles and lacerates your flesh relentlessly\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a mottled green aratha",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A mottled green aratha thrusts his stinger deep into your flesh, causing you to reel backwards in agony\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a mottled green aratha",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^A mottled green aratha lunges towards you, fanged mouths chewing voraciously upon your flesh\.$/,
    tags: ["damage"],
    length: 0,
  }),
  new NpcDefinition({
    user: "a throng of swarming horax",
    areaId: [207],
    areaName: "the Island of Tuar",
    firstPerson:
      /^Surging towards you suddenly, a throng of swarming horax pierces you repeatedly with their long, curved mandibles\.$/,
    tags: ["damage"],
    length: 0,
  }),
];

export default tuar;