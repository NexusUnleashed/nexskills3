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
    profession: ["occultist"],
    skill: "tarot",
    balance: "tertiary",
    tags: [],
    length: 2.2,
    //multiLine: -1,
  },
  {
    id: "aeonStrip",
    fullName: "Aeon Strip",
    firstPerson:
      /^You stand an Aeon tarot on your palm, and blow it lightly at (?<target>\w+?)\.$/,
    secondPerson:
      /^Khaseem blows an Aeon tarot at you, destroying your speed defence\.$/,
    thirdPerson:
      /^Khaseem stands an Aeon tarot on \w+ palm and blows it at (?<target>\w+?)\.$/,
    profession: ["occultist"],
    skill: "tarot",
    balance: "tertiary",
    tags: [],
    info: "Speed strip",
    length: 2.2,
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
    profession: ["occultist"],
    skill: "tarot",
    balance: "tertiary",
    tags: [],
    info: false,
    length: 2.2,
    //multiLine: -1,
  },
  {
    id: "aeon",
    fullName: "Aeon",
    firstPerson:
      /^As you fling the Moon tarot at (?<target>\w+?), it turns an ominous, sickly red, before striking \w+ in the head\.$/,
    secondPerson:
      /^(?<user>\w+?) flings a tarot card at you which turns an ominous, sickly red before striking you in the head\.$/,
    thirdPerson:
      /^As (?<user>\w+?) flings a tarot card at (?<target>\w+?), it turns an ominous, sickly red before striking \w+ in the head\.$/,
    profession: ["occultist"],
    skill: "tarot",
    balance: "tertiary",
    tags: [],
    info: false,
    length: 2.2,
    //multiLine: -1,
  },
];
