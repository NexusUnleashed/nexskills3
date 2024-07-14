const tirMuran = [
  {
    user: "a House Feranki mage",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage pulls out a small box the size of a human fist, shakes it, and throws it at you. On contact it explodes, burning you horribly\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.5,
  },
  {
    user: "a House Feranki mage",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage causes some needles to levitate above his palm. With a gesture, they fly unerringly toward you, pricking your skin. You scream in pain as toxins sear through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "epilepsy"],
    length: 2.5,
  },
  {
    user: "a House Feranki mage",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Feranki mage throws a piece of rope at you. In mid-air, it expands into a mesh of netting that contracts around you\.$/,
    thirdPerson: false,
    tags: ["entagle"],
    length: 2.5,
  },
  {
    user: "a House Tsez air mage",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Tsez air mage clasps her hands in front her face, and in response you find yourself gasping for air, unable to breathe\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a House Tsez air mage",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A House Tsez air mage gives a dismissive wave of her hand at you, and you feel a tremendous blast of biting wind that threatens to knock you down\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard sideswipes your ankle with the blunt end of his weapon, the force of the blow causing you to tumble to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard vaults towards you with surprising speed, bringing the bladed side of his weapon bearing down on you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    multiLine: 1,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard jabs forward with a powerful blow, skewering through your ribs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard sideswipes your ankle with the blunt end of his weapon, the force of the blow causing you to tumble to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard vaults towards you with surprising speed, bringing the bladed side of his weapon bearing down on you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
    multiLine: 1,
  },
  {
    user: "a Vertani guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A Vertani guard jabs forward with a powerful blow, skewering through your ribs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^You gnash your teeth as a scimitar-wielding Vertani soldier brings the butt of his scimitar down on your head, splitting your skull\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Lunging at you, a scimitar-wielding Vertani soldier slams his gigantic head into yours. You are stunned from the blow\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.5,
  },
  {
    user: "a scimitar-wielding Vertani soldier",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^You are nearly bisected as a scimitar-wielding Vertani soldier grunts and slashes into you with a huge scimitar\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Dynas, the gour trainer",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Dynas, the gour trainer flicks his staff at your face, connecting square on the nose, which begins to gush blood\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Dynas, the gour trainer",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Dynas, the gour trainer brings his staff crashing down onto your head\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "a drunken Vertani",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani throws a wide haymaker punch at you, connecting against your jaw\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a drunken Vertani",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani unsheathes the dagger from his belt and slashes wildly into you with it\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a drunken Vertani",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^A drunken Vertani wraps his huge hands around your throat and throttles you violently\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "Ohmut, the Vertan craftswoman",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Ohmut, the Vertan craftswoman quickly scoops up a jagged rock from the ground before pelting you with it painfully\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Ohmut, the Vertan craftswoman",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Ohmut, the Vertan craftswoman swings her pick horizontally, puncturing the side of your torso\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.5,
  },
  {
    user: "Rohase, Captain of the Guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Rohase, Captain of the Guard jabs forward with a powerful blow, skewering through your ribs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "Rohase, Captain of the Guard",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Rohase, Captain of the Guard vaults towards you with surprising speed, bringing the bladed side of her weapon bearing down on you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
    multiLine: 1,
  },
  {
    user: "Rakrr, the Vertani swordsmaster",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^In one quick motion, Rakrr, the Vertani swordsmaster flicks his cloak towards you as a distraction\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
    multiLine: 1,
  },
  {
    user: "Rakrr, the Vertani swordsmaster",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Rakrr, the Vertani swordsmaster lunges forward, viciously plunging his sword into your chest, missing your heart by mere inches\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "Rakrr, the Vertani swordsmaster",
    areaId: [145, 146],
    areaName: "Tir Murann",
    firstPerson:
      /^Rakrr, the Vertani swordsmaster quickly swings his twin swords into your gut, raining a flurry of merciless slashes at you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
];

export default tirMuran;
