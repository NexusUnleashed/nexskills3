import { NpcDefinition } from "../models/NpcDefinition";
const judgementMountain = [
  new NpcDefinition({
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior's eyes narrow as he grasps his longsword with both hands and raises it over his head before bringing it down across your chest\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^In a skillful display of swordsmanship, a Migri warrior slashes diagonally across your body before striking you again with a jab through your belly\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior bares his teeth and lunges at you with his longsword, the blade easily sliding into your body\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a Migri warrior",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^A Migri warrior strikes you in the face with the hilt of his sword\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^An undead minion leaps forward and rips through your flesh with his teeth, leaving a gaping wound\.$/,
    tags: ["damage"],
    length: 2.7,
  }),
  new NpcDefinition({
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Running between your legs, an undead minion strikes your knee with his tail, throwing you off balance\.$/,
    tags: ["off-balance"],
    length: 2.7,
  }),
  new NpcDefinition({
    user: "an undead minion",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Rearing back and then leaping, an undead minion strikes your chest, causing you to fall to the ground\.$/,
    tags: ["damage", "prone"],
    length: 2.7,
  }),
  new NpcDefinition({
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Dakk, leader of the Migri ducks his head and thrusts his blade towards you, jabbing it deep within your chest cavity and striking an artery. The blood pours from your body with each pump of your heart, covering the ground with blood\.$/,
    tags: ["damage"],
    length: 2.0,
  }),
  new NpcDefinition({
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Muttering an incantation, Dakk, leader of the Migri summons flames from his fingertips before balling them up and hurling the fireball towards you\.$/,
    tags: ["damage", "burning"],
    length: 2.0,
  }),
  new NpcDefinition({
    user: "Dakk, leader of the Migri",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Slashing his blade across your chest, Dakk, leader of the Migri cuts a piece of flesh from your body before striking you with the hilt of his sword, knocking you to the ground\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
  }),
  new NpcDefinition({
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage snaps both of his fingers. Instantly, flames erupt from the floor and travel towards you, enveloping your body\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage reaches towards the ground with an outstretched hand. Pulling up, he forces several large rocks from the ground and then hurls them in your direction, pummeling you\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "Begath, the Migri mage",
    areaId: [257],
    areaName: "Judgement Mountain",
    firstPerson:
      /^Begath, the Migri mage blows gently over his fingertips, causing them to turn blue and frost over before reaching towards you and sending several ice spikes in your direction\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
];

export default judgementMountain;