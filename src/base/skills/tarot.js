import { SkillDefinition } from "../models/SkillDefinition";
export const tarot = {
  emperor: new SkillDefinition({
    id: "emperor",
    fullName: "Emperor",
    firstPerson:
      /^As you throw the Emperor tarot at (?<target>\w+), \w+ gazes at you with adoration and falls in line behind you\.$/,
    secondPerson:
      /^As (?<user>\w+) throws the Emperor tarot at you, you are filled with adoration for \w+ and begin to follow \w+\.$/,
    thirdPerson:
      /^As (?<user>\w+) throws an Emperor tarot at (?<target>\w+), \w+ is filled with adoration for \w+ and begins to follow \w+\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    length: 3.0,
  }),
  magician: new SkillDefinition({
    id: "magician",
    fullName: "Magician",
    firstPerson:
      /^You release the Magician tarot and as it (?:drops slowly|slowly drops) to the earth, it bathes (?<target>\w+) in (?:a |)muted blue light\.$/,
    secondPerson:
      /^(?<user>\w+) releases a tarot card and as it drops slowly to the earth, it bathes you in a muted blue light\.$/,
    thirdPerson:
      /^(?<user>\w+) releases a tarot card and as it drops slowly to the earth, it bathes (?<target>\w+) in a muted blue light\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    length: 3.0,
  }),
  priestess: new SkillDefinition({
    id: "priestess",
    fullName: "Priestess",
    firstPerson:
      /^Raising the High Priestess tarot over your head, parallel to the ground, you release it\. It instantly expands and moves downward, healing (?<target>\w+) as \w+ body passes through it\.$/,
    secondPerson:
      /^(?<user>\w+) raises a tarot over \w+ head, parallel to the ground\. Upon releasing it, it instantly expands and moves downward until your entire body has been passed through it, healing you as it falls\.$/,
    thirdPerson:
      /^(?<user>\w+) raises a tarot card over the head of (?<target>\w+)\. Upon releasing it, it instantly expands and moves downward until \w+ entire body has been passed through it\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["heal"],
    length: 3.0,
  }),
  lovers: new SkillDefinition({
    id: "lovers",
    fullName: "Lovers",
    firstPerson:
      /^You throw a Lovers tarot at (?<target>\w+) and as it strikes true, a look of utter love covers \w+ face\.$/,
    secondPerson:
      /^(?<user>\w+) throws a Lovers tarot at you and as it strikes true, you fall hopelessly in love with \w+\.$/,
    thirdPerson:
      /^(?<user>\w+) throws a Lovers tarot at (?<target>\w+) and as it strikes true, a look of hopeless, star-crossed love crosses \w+ face\.$/,
    profession: ["occultist", "jester"],
    balance: "balance",
    affs: ["lovers"],
    skill: "tarot",
    tags: ["aff"],
    length: 3.0,
  }),
  hangedman: new SkillDefinition({
    id: "hangedman",
    fullName: "Hangedman",
    firstPerson:
      /^You toss the Hanged Man tarot card at (?<target>\w+) and as it reaches \w+, a huge mass of rope bursts out of it to entrap and hinder \w+\.$/,
    secondPerson:
      /^(?<user>\w+) hurls a tarot card with the image of the Hanged Man on it at you\. As it reaches you, a huge mass of rope bursts out of it, entrapping and hindering you\.$/,
    thirdPerson:
      /^(?<user>\w+) tosses a tarot card at (?<target>\w+) and as it reaches \w+, a huge mass of rope bursts out of it, entrapping and hindering \w+\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    length: 2.2,
  }),
  justice: new SkillDefinition({
    id: "justice",
    fullName: "Justice",
    firstPerson:
      /^With a prayer to Miramar, the Just, you fling your tarot card at (?<target>\w+)\. A set of scales appears above \w+ head and one side of the scale quickly descends\. Justice will be done\.$/,
    secondPerson:
      /^(?<user>\w+) bows \w+ head and mutters something, then flings a tarot card at you\. A set of scales appears above your head and one side of the scale quickly descends\. You have a bad feeling about this\.$/,
    thirdPerson:
      /^(?<user>\w+) bows \w+ head and mutters something, then flings a tarot card at (?<target>\w+)\. A set of scales appears above \w+ head and one side of the scale quickly descends\.$/,
    profession: ["occultist", "jester"],
    balance: "balance",
    affs: ["justice"],
    skill: "tarot",
    tags: ["aff"],
    length: 3.0,
  }),
  aeonStrip: new SkillDefinition({
    id: "aeonStrip",
    fullName: "Aeon",
    firstPerson:
      /^You stand an Aeon tarot on your palm, and blow it lightly at (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) blows an Aeon tarot at you, destroying your speed defence\.$/,
    thirdPerson:
      /^(?<user>\w+) stands an Aeon tarot on \w+ palm and blows it at (?<target>\w+)\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    info: "Speed strip",
    length: 3.7,
  }),
  aeon: new SkillDefinition({
    id: "aeon",
    fullName: "Aeon",
    firstPerson:
      /^Standing the Aeon on your open palm, you blow it lightly at (?<target>\w+) and watch as it seems to slow \w+ movement through the time stream\.$/,
    secondPerson:
      /^(?<user>\w+) stands a tarot on \w+ open palm, and blows it lightly at you\. Suddenly your movement through the time stream is slowed\.$/,
    thirdPerson:
      /^(?<user>\w+) stands an Aeon tarot on \w+ open palm, and blows it lightly at (?<target>\w+)\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    info: false,
    length: 3.7,
  }),
  moon: new SkillDefinition({
    id: "moon",
    fullName: "Moon",
    firstPerson:
      /^As you fling the Moon tarot at (?<target>\w+), it turns an ominous, sickly red, before striking \w+ in the head\.$/,
    secondPerson:
      /^(?<user>\w+) flings a tarot card at you which turns an ominous, sickly red before striking you in the head\.$/,
    thirdPerson:
      /^As (?<user>\w+) flings a tarot card at (?<target>\w+), it turns an ominous, sickly red before striking \w+ in the head\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "equilibrium",
    tags: [],
    info: false,
    length: 2.2,
  }),
  fool: new SkillDefinition({
    id: "fool",
    fullName: "Fool",
    firstPerson:
      /^You press the Fool tarot to (?:your|(?<target>\w+)'s) forehead\.$/,
    secondPerson:
      /^(?<user>\w+) presses a tarot to your forehead and a sensation of warmth ripples through your body\.$/,
    thirdPerson:
      /^(?<user>\w+) presses a tarot to (?:\w+|(?<target>\w+)'s) forehead, producing a wan smile\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["cure"],
    length: 3.0,
  }),
  deathRub: new SkillDefinition({
    id: "deathRub",
    fullName: "Death Rub",
    firstPerson:
      /^You rub the image of Death on (?<target>\w+) and feel a satisfying electrical charge run up your arm\.$/,
    secondPerson:
      /^(?<user>\w+) rubs a tarot card on your arm\. You feel slightly nauseated and drained\.$/,
    thirdPerson:
      /^(?<user>\w+) rubs a tarot card on (?<target>\w+), who pales slightly\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["cure"],
    length: 3.2,
  }),
  ruinateLovers: new SkillDefinition({
    id: "ruinateLovers",
    fullName: "Ruinate Lovers",
    firstPerson:
      /^The card twists and writhes as it leaps from your hand towards (?<target>\w+), the image resolving into a twisted visage crossed with a bloody knife\.$/,
    secondPerson:
      /^Orange light sparks about the digits of (?<user>\w+) as \w+ flings a card at you, the image upon it writhing until it resolves into a twisted visage crossed with a bloody knife that fills your vision\.$/,
    thirdPerson:
      /^Orange light sparks about the fingers of (?<user>\w+) as \w+ flings a card at (?<target>\w+), the image upon it writhing until it resolves into a twisted visage crossed with a bloody knife\.$/,
    profession: ["occultist"],
    skill: "tarot",
    balance: "equilibrium",
    tags: ["aff"],
    affs: ["manaleech"],
    length: 3.0,
  }),
  ruinateJustice: new SkillDefinition({
    id: "ruinateJustice",
    fullName: "Ruinate Justice",
    firstPerson:
      /^As you fling a card at (?<target>\w+), the scales of justice upon its surface twists and cracks as the image becomes something indefinable, but vastly more sinister\.$/,
    secondPerson:
      /^Orange light flickers between the fingers of (?<user>\w+) as \w+ flings a tarot card at you, the scales of justice upon its surface cracking even as the image contorts into something indefinably sinister\.$/,
    thirdPerson:
      /^Orange light flickers between the fingers of (?<user>\w+) as \w+ flings a tarot card at (?<target>\w+), the scales of justice scribed upon it twisting and cracking as it realigns to become something indefinably sinister\.$/,
    profession: ["occultist"],
    skill: "tarot",
    balance: "equilibrium",
    tags: ["aff"],
    affs: [],
    length: 3.0,
  }),

  heretic: new SkillDefinition({
    id: "heretic",
    fullName: "Heretic",
    firstPerson:
      /^The Heretic writhes between your fingers as you unleash it upon (?<target>\w+), blue sparks lighting the tips of your digits as they flicker across the Ruin-wrought image\.$/,
    secondPerson:
      /^Blue sparks flicker across the fingers of (?<user>\w+) as \w+ casts out \w+ hand, a card with an image so profoundly profane upon it that your eyes reject its knowing flashing towards you\.$/,
    thirdPerson:
      /^(?<user>\w+) casts out \w+ hand towards (?<target>\w+), blue sparks flickering across \w+ fingers as \w+ hurls a card towards \w+ foe\.$/,
    profession: ["occultist"],
    skill: "tarot",
    balance: "equilibrium",
    tags: [],
    affs: [],
    length: 3.0,
  }),
};

export default Object.values(tarot);