export const tarot = [
  {
    id: "hangedman",
    fullName: "Hangedman",
    firstPerson:
      /^You toss the Hanged Man tarot card at (?<target>\w+?) and as it reaches \w+, a huge mass of rope bursts out of it to entrap and hinder \w+\.$/,
    secondPerson:
      /^(?<user>\w+?) hurls a tarot card with the image of the Hanged Man on it at you\. As it reaches you, a huge mass of rope bursts out of it, entrapping and hindering you\.$/,
    thirdPerson:
      /^(?<user>\w+?) tosses a tarot card at (?<target>\w+?) and as it reaches \w+, a huge mass of rope bursts out of it, entrapping and hindering \w+\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    length: 2.2,
    //multiLine: -1,
  },
  {
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
    //multiLine: -1,
  },
  {
    id: "justiceTarot",
    fullName: "Justice",
    firstPerson:
      /^With a prayer to Miramar, the Just, you fling your tarot card at (?<target>\w+)\. A set of scales appears above his head and one side of the scale quickly descends\. Justice will be done\.$/,
    secondPerson:
      /^(?<user>\w+) bows his head and mutters something, then flings a tarot card at you\. A set of scales appears above your head and one side of the scale quickly descends\. You have a bad feeling about this\.$/,
    thirdPerson:
      /^(?<user>\w+) bows his head and mutters something, then flings a tarot card at (?<target>\w+)\. A set of scales appears above his head and one side of the scale quickly descends\.$/,
    profession: ["occultist", "jester"],
    balance: "balance",
    affs: ["justice"],
    skill: "tarot",
    tags: ["aff"],
    length: 3.0,
    //multiLine: -1,
  },
  {
    id: "aeonStrip",
    fullName: "Aeon Strip",
    firstPerson:
      /^You stand an Aeon tarot on your palm, and blow it lightly at (?<target>\w+?)\.$/,
    secondPerson:
      /^(?<user>\w+) blows an Aeon tarot at you, destroying your speed defence\.$/,
    thirdPerson:
      /^(?<user>\w+) stands an Aeon tarot on \w+ palm and blows it at (?<target>\w+?)\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    info: "Speed strip",
    length: 3.7,
    //multiLine: -1,
  },
  {
    id: "aeon",
    fullName: "Aeon",
    firstPerson:
      /^Standing the Aeon on your open palm, you blow it lightly at (?<target>\w+?) and watch as it seems to slow \w+ movement through the time stream\.$/,
    secondPerson:
      /^(?<user>\w+?) stands a tarot on \w+ open palm, and blows it lightly at you\. Suddenly your movement through the time stream is slowed\.$/,
    thirdPerson:
      /^(?<user>\w+?) stands an Aeon tarot on \w+ open palm, and blows it lightly at (?<target>\w+?)\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: [],
    info: false,
    length: 3.7,
    //multiLine: -1,
  },
  {
    id: "moon",
    fullName: "Moon",
    firstPerson:
      /^As you fling the Moon tarot at (?<target>\w+?), it turns an ominous, sickly red, before striking \w+ in the head\.$/,
    secondPerson:
      /^(?<user>\w+?) flings a tarot card at you which turns an ominous, sickly red before striking you in the head\.$/,
    thirdPerson:
      /^As (?<user>\w+?) flings a tarot card at (?<target>\w+?), it turns an ominous, sickly red before striking \w+ in the head\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "equilibrium",
    tags: [],
    info: false,
    length: 2.2,
    reaction(args) {
      if (
        args.match === "firstPerson" &&
        typeof insight.lastQueue !== "undefined"
      ) {
        const moon = insight.lastQueue.match(/FLING MOON AT \w+ (\w+)/);
        if (moon) {
          args.info = moon[1].toLowerCase();
        }
      }
    },
    //multiLine: -1,
  },
  {
    id: "priestess",
    fullName: "Priestess",
    firstPerson:
      /^Raising the High Priestess tarot over your head, parallel to the ground, you release it\. It instantly expands and moves downward, healing (?:you|(?<target>\w+)) as \w+ body passes through it\.$/,
    secondPerson:
      /^(?<user>\w+?) raises a tarot over \w+ head, parallel to the ground\. Upon releasing it, it instantly expands and moves downward until your entire body has been passed through it, healing you as it falls\.$/,
    thirdPerson:
      /^(?<user>\w+) raises a tarot card over the head of (?<target>\w+)\. Upon releasing it, it instantly expands and moves downward until \w+ entire body has been passed through it\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["heal"],
    length: 3.0,
  },
  {
    id: "fool",
    fullName: "Fool",
    firstPerson:
      /^^You press the Fool tarot to (?:your|(?<target>\w+)'s) forehead\.$/,
    secondPerson:
      /^(?<user>\w+?) presses a tarot to your forehead and a sensation of warmth ripples through your body\.$/,
    thirdPerson:
      /^(?<user>\w+?) presses a tarot to (?:\w+|(?<target>\w+)'s) forehead, producing a wan smile\.$/,
    profession: ["occultist", "jester"],
    skill: "tarot",
    balance: "balance",
    tags: ["cure"],
    length: 3.0,
  },
];
