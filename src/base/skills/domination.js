export const domination = [
  {
    id: "humbugCommand",
    fullName: "Humbug Command",
    firstPerson:
      /^You command your humbug to instill a ravenous hunger in (?<target>\w+?)\.$/,
    secondPerson:
      /^A humbug latches onto your throat, and your guts feel like they're devouring themselves as an unnatural hunger comes over you\.$/,
    thirdPerson:
      /^A humbug clutches to the throat of (?<target>\w+?), its grotesque body undulating\.$/,
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
      /^A Chaos hound produces a baying howl, and you feel your will to resist slipping away\.\.\.$/,
    thirdPerson:
      /^A Chaos hound produces a baying howl, and (?<target>\w+?) slumps with a sigh\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  {
    id: "stormCommand",
    fullName: "Storm Command",
    firstPerson:
      /^You command your chaos storm to bring down the curse of vertigo upon (?<target>\w+?)\.$/,
    secondPerson:
      /^A lash of energy whips out of the chaos storm to strike you, afflicting you with vertigo\.$/,
    thirdPerson:
      /^A lash of energy whips out of the chaos storm to strike (?<target>\w+?), \w+ face going blank for a brief instant on contact\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  {
    id: "bloodleechCommand",
    fullName: "Bloodleech Command",
    firstPerson:
      /^You command your bloodleech to corrupt the blood of (?<target>\w+?)\.$/,
    secondPerson:
      /^A bloodleech scuttles over your skin, tentacle-like appendages scratching and scraping\. Something is very wrong\.\.\.$/,
    thirdPerson:
      /^A bloodleech scuttles over the skin of (?<target>\w+?), its tentacle-like appendages scratching and scraping\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  {
    id: "sycophantCommand",
    fullName: "Sycophant Command",
    firstPerson:
      /^You command your sycophant to weaken the mind of (?<target>\w+?)\.$/,
    secondPerson:
      /^The muttering emanating from the sycophant increases to a sudden crescendo, and your head begins to spin\.$/,
    thirdPerson:
      /^The sycophant of (?<user>\w+) hunches forward and begins muttering incessantly at (?<target>\w+?), who sways unsteadily\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2,
  },
  {
    id: "slimeCommand",
    fullName: "Slime Command",
    firstPerson: /^You command your slime to envelop (?<target>\w+?)\.$/,
    secondPerson:
      /^(?<user>\w+) gestures sharply in your direction, and a mass of green slime flows up and over you, coating your skin\.$/,
    thirdPerson:
      /^(?<user>\w+) gestures toward (?<target>\w+?), and a mass of green slime flows up and over \w+\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.6,
  },
  {
    id: "slimeCommand2",
    fullName: "Slime Command",
    firstPerson: false,
    secondPerson:
      /^Despite your best efforts some of the slime slips into your mouth and down your throat, your body struggling to breathe but receiving only virilant sludge\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.6,
  },
  {
    id: "bubonisCommand",
    fullName: "Bubonis Command",
    firstPerson:
      /^You command your bubonis to bring the plague to (?<target>\w+?)\.$/,
    secondPerson:
      /^A bubonis reaches out and strokes the side of your face, and you feel your entire body suffer. Boils form and rupture and you feel your lungs burn as they fill with fluid\.$/,
    thirdPerson:
      /^A bubonis reaches out and strokes the side of (?<target>\w+?)'s face, and boils form and rupture in an instant as \w+ begins hacking up black fluid\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.4,
    multiLine: 1,
  },
];
