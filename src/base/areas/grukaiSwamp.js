import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";

const grukaiSwamp = [
  new NpcDefinition({
    user: "an energetic turtle",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^An energetic red turtle slams his body into your leg, shattering it in the process.\.$/,
    tags: ["damage"],
    length: 1.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber claws viciously at your arm, severing the joints\.$/,
    tags: ["damage"],
    length: 1.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber claws viciously at your leg, severing the joints\.$/,
    tags: ["damage"],
    length: 1.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A sinister glubber scrapes his nails across your eyes, leaving you unable to see\.$/,
    tags: ["damage", "blindness"],
    length: 1.5,
  }),
  new NpcDefinition({
    user: "a sinister glubber",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Staring intensely at you, a sinister glubber causes his scales to fly off his body and into yours, painfully piercing the skin\.$/,
    tags: ["damage", "voyria"],
    length: 1.5,
  }),
  new NpcDefinition({
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Flinging his rope-like tentacles around, a tentacled polyp hits you firmly in the chest, leaving a number of noticeable lacerations\.$/,
    tags: ["damage"],
    length: 11.0,
  }),
  new NpcDefinition({
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Waving his appendages before your face, a tentacled polyp leaves a number of deep lacerations and manages to leave you transfixed\.$/,
    tags: ["damage"],
    length: 11.0,
    reaction(args) {
      checkTransfix(args);
    },
  }),
  new NpcDefinition({
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^A tentacled polyp quickly stabs you with his bizarre limbs, leaving a number of deep cuts\.$/,
    tags: ["damage"],
    length: 11.0,
  }),
  new NpcDefinition({
    user: "a tentacled polyp",
    areaId: [335],
    areaName: "Grukai Swamp",
    firstPerson:
      /^Wrapping his tentacles around your legs, a tentacled polyp causes you to come crashing to the floor, your legs entangled with his bizarre appendages\.$/,
    tags: ["damage", "prone", "webbed"],
    length: 11.0,
  }),
];

export default grukaiSwamp;