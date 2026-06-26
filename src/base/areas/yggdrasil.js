import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";

const yggdrasil = [
  new NpcDefinition({
    user: "a rajamala slaver",
    areaId: [337],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^Moving with astonishing speed, a rajamala slaver unleashes the power of his feline claws against your skin\.$/,
    tags: ["damage", "loki"],
    length: 4.0,
  }),
  new NpcDefinition({
    user: "a rajamala slaver",
    areaId: [337],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A rajamala slaver uses his massive bulk to slam your body to the ground\.$/,
    tags: ["damage", "prone"],
    length: 4.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a rajamala slaver",
    areaId: [337],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A rajamala slaver leaps into the air and hurtles towards you\.$/,
    tags: ["damage", "prone"],
    length: 4.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  new NpcDefinition({
    user: "a huge rat",
    areaId: [338],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^A huge rat snarls in fury as he bites down on your arm, sending a series of spasms racing through your body\.$/,
    tags: ["damage", "loki", "loki"],
    length: 4.0,
  }),
  new NpcDefinition({
    user: "a huge rat",
    areaId: [338],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^Hissing with rage, a huge rat swipes a claw across your knees\.$/,
    tags: ["damage", "loki"],
    length: 4.0,
  }),
  new NpcDefinition({
    user: "a huge rat",
    areaId: [338],
    areaName: "the fathomless expanse of the World Tree",
    firstPerson:
      /^Snarling as he leaps at your legs, a huge rat rips and tears into your flesh, his mouth filling with blood and saliva\.$/,
    tags: ["damage", "loki", "torntendons", "clumsiness"],
    length: 4.0,
  }),
];

export default yggdrasil;