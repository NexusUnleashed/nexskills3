import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";

const ageiro = [
  new NpcDefinition({
    user: "a nickle snake",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A nickel snake opens a gash in your arm with a skilful blow\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a copper malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^Grabbing up a shovel, a copper malagma jams the blade into your throat\. Blood oozes from the gash as you struggle to regain your breath\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a copper malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^Balling up \w+ fists, a copper malagma smashes several punches into your torso\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a copper malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A copper malagma rips a decaying board from an overturned ore cart and beats you with it\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "an iron malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^With all \w+ might, an iron malagma swings a partially rotted wooden shaft at your head\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "an iron malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^Grabbing your arm in \w+ vice-like hands, an iron malagma snaps the bone in two\.$/,
    tags: ["damage"],
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "an iron malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^Grabbing a pick from the floor of the mine, an iron malagma swings sharply and embeds the rusted head into your arm\.$/,
    tags: ["damage"],
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a golden malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A golden malagma drives \w+ hand through your stomach, barely missing your spine as \w+ fingers break through the skin of your back\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a golden malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^Grabbing two shovels from the ground, a golden malagma brings them crashing into your head from both sides\.$/,
    tags: ["damage", "stun"],
  }),
  new NpcDefinition({
    user: "a golden malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson: [
      /^Though a golden malagma's mouth moves in rapid animation, no sound escapes the metallic being\.$/,
      /^A cold stiffness overtakes your limbs, which seem as heavy as if they were made of lead\.$/,
    ],
    tags: ["damage", "paralysis"],
  }),
  new NpcDefinition({
    user: "a silver malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A silver malagma backhands you violently, \w+ heavy metal arm nearly caving in your skull\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a silver malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A hand drill flies into your face, thrown by a silver malagma\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a silver malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /^A silver malagma bashes you over the head with a loose rock, flecks of ore embedding themselves in your skin from the impact\.$/,
    tags: ["damage"],
  }),
  new NpcDefinition({
    user: "a silver malagma",
    areaId: [209],
    areaName: "the Isle of Ageiro",
    firstPerson:
      /A silver malagma backhands you violently, \w+ heavy metal arm nearly caving in your skull\.$/,
    tags: ["damage"],
  }),
];

export default ageiro;