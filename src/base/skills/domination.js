export const domination = [
  {
    id: "humbugCommand",
    fullName: "Humbug Command",
    firstPerson:
      /^You command your humbug to instill a ravenous hunger in (?<target>\w+?)\.$/,
    secondPerson:
      /A humbug latches onto your throat, and your guts feel like they're devouring themselves as an unnatural hunger comes over you\.$/,
    thirdPerson:
      /A humbug clutches to the throat of (?<target>\w+?), its grotesque body undulating\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.5,
  },
  {
    id: "houndCommand",
    fullName: "Hound Command",
    firstPerson:
      /^You command your hound to erode the will of (?<target>\w+?)\.$/,
    secondPerson:
      /A Chaos hound produces a baying howl, and you feel your will to resist slipping away\.\.\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  {
    id: "bubonisCommand",
    fullName: "Bubonis Command",
    firstPerson:
      /^You command your bubonis to bring the plague to (?<target>\w+?)\.$/,
    secondPerson:
      /A bubonis reaches out and strokes the side of your face, and you feel your entire body suffer. Boils form and rupture and you feel your lungs burn as they fill with fluid\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.4,
    multiLine: 1,
  },
];
