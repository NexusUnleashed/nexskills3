const domination = {
  //#region COMMANDS
  dominationHumbugCommand: {
    id: "humbugCommand",
    fullName: "Humbug Command",
    firstPerson:
      /^You command your humbug to instill a ravenous hunger in (?<target>\w+)\.$/,
    secondPerson:
      /^A humbug latches onto your throat, and your guts feel like they're devouring themselves as an unnatural hunger comes over you\.$/,
    thirdPerson:
      /^A humbug clutches to the throat of (?<target>\w+), its grotesque body undulating\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.5,
  },
  dominationHoundCommand: {
    id: "houndCommand",
    fullName: "Hound Command",
    firstPerson:
      /^You command your hound to erode the will of (?<target>\w+)\.$/,
    secondPerson:
      /^A Chaos hound produces a baying howl, and you feel your will to resist slipping away\.\.\.$/,
    thirdPerson:
      /^A Chaos hound produces a baying howl, and (?<target>\w+) slumps with a sigh\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  dominationStormCommand: {
    id: "stormCommand",
    fullName: "Storm Command",
    firstPerson:
      /^You command your chaos storm to bring down the curse of vertigo upon (?<target>\w+)\.$/,
    secondPerson:
      /^A lash of energy whips out of the chaos storm to strike you, afflicting you with vertigo\.$/,
    thirdPerson:
      /^A lash of energy whips out of the chaos storm to strike (?<target>\w+), \w+ face going blank for a brief instant on contact\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  dominationBloodleechCommand: {
    id: "bloodleechCommand",
    fullName: "Bloodleech Command",
    firstPerson:
      /^You command your bloodleech to corrupt the blood of (?<target>\w+)\.$/,
    secondPerson:
      /^A bloodleech scuttles over your skin, tentacle-like appendages scratching and scraping\. Something is very wrong\.\.\.$/,
    thirdPerson:
      /^A bloodleech scuttles over the skin of (?<target>\w+), its tentacle-like appendages scratching and scraping\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
  },
  sycophantCommand: {
    id: "sycophantCommand",
    fullName: "Sycophant Command",
    firstPerson:
      /^You command your sycophant to weaken the mind of (?<target>\w+)\.$/,
    secondPerson:
      /^The muttering emanating from the sycophant increases to a sudden crescendo, and your head begins to spin\.$/,
    thirdPerson:
      /^The sycophant of (?<user>\w+) hunches forward and begins muttering incessantly at (?<target>\w+), who sways unsteadily\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2,
  },
  dominationSlimeCommand: {
    id: "slimeCommand",
    fullName: "Slime Command",
    firstPerson: /^You command your slime to envelop (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) gestures sharply in your direction, and a mass of green slime flows up and over you, coating your skin\.$/,
    thirdPerson:
      /^(?<user>\w+) gestures toward (?<target>\w+), and a mass of green slime flows up and over \w+\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.6,
  },
  dominationSlimeCommand2: {
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
  dominationChimeraCommandDeaf: {
    id: "chimeraCommandDeaf",
    fullName: "Chimera Command",
    firstPerson: false,
    secondPerson:
      /^A chimera throws all three of its heads forward and opens its mouth, but you hear only the slightest whisper of sound\.$/,
    thirdPerson:
      /^A chimera throws forward all three of its heads and roars at (?<target>\w+), but \w+ seems completely unphased\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    info: "Deaf",
    length: 2.6,
    //multiLine: -1
  },
  dominationChimeraCommand: {
    id: "chimeraCommand",
    fullName: "Chimera Command",
    firstPerson: false,
    secondPerson:
      /^A chimera lets out a concussive roar, all three of the creatures heads thrown forward toward you\.$/,
    thirdPerson: /^A chimera lets out a concussive roar at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "equilibrium",
    tags: [],
    length: 2.6,
    //multiLine: -1
  },
  dominationBubonisComand: {
    id: "bubonisCommand",
    fullName: "Bubonis Command",
    firstPerson: false,
    secondPerson:
      /^A bubonis reaches out and strokes the side of your face, and you feel your entire body suffer. Boils form and rupture and you feel your lungs burn as they fill with fluid\.$/,
    thirdPerson:
      /^A bubonis reaches out and strokes the side of (?<target>\w+)'s face, and boils form and rupture in an instant as \w+ begins hacking up black fluid\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.4,
    //multiLine: -1,
  },
  dominationWormCommand: {
    id: "wormCommand",
    fullName: "Worm Command",
    firstPerson:
      /^You command your worm to infest (?<target>\w+) with maggots\.$/,
    secondPerson:
      /^A worm spews a stream of maggots at you, and they begin burrowing into your flesh\.$/,
    thirdPerson:
      /^A worm spews a writhing mass of maggots at (?<target>\w+)\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
    //multiLine: -1,
  },
  dominationWormTick: {
    id: "wormTick",
    fullName: "Worm Tick",
    firstPerson: false, // same message as third person
    secondPerson:
      /^The maggots of Palpatar continue to feed upon your flesh, leeching away your vitality\.$/,
    thirdPerson:
      /^Many somethings writhe beneath the skin of (?<target>\w+), and the sickening sound of chewing can be heard\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: [],
    length: 2.2,
    //multiLine: -1,
  },
  dominationCroneCommand: {
    id: "croneCommand",
    fullName: "Crone Command",
    firstPerson:
      /^You command your crone to wither the (?<limb>.+) of (?<target>\w+)\.$/,
    secondPerson:
      /^A withered crone reaches out and caresses your (?<limb>.+), and an icy chill radiates up the limb as it withers away\.$/,
    thirdPerson:
      /^A withered crone reaches out to caress the (?<limb>.+) of (?<target>\w+), the limb withering away under her gnarled grasp\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    tags: ["aff"],
    length: 2.35,
    reaction(action) {
      action.info = action.args.groups.limb;
      action.affs.push(`broken${action.args.groups.limb.replace(" ", "")}`);
    },
    //multiLine: -1,
  },
  dominationAbominationCommand: {
    id: "abominationCommand",
    fullName: "Abomination Command",
    firstPerson:
      /^You command an eldritch abomination to discern the doom of Pamxen\.$/,
    secondPerson:
      /^Violet tendrils lash out from an eldritch abomination, plunging into you. Though they cause no physical harm, you feel a horrific tearing sensation, as if a fundamental part of your essence has been violated and exposed\.$/,
    thirdPerson:
      /^Incandescent tendrils lash out from an eldritch abomination, plunging into Pamxen. His back arches and eyes bulge as violet light pours from his mouth in a ghastly parody of a scream\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "tertiary",
    info: "truename",
    tags: [],
    length: 2.6,
    //multiLine: -1,
  },
  //#endregion
  //#region PRIMEBONDS
  dominationWormPrime: {
    id: "wormPrime",
    fullName: "Worm Primebond",
    firstPerson: false,
    secondPerson:
      /^The worm which is burrowed into your guts writhes and undulates, and you feel bile rising in the back of your throat\.$/,
    thirdPerson:
      /^The worm burrowing into (?<target>\w+) writhes and undulates\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 8.0,
  },
  dominationGremlinPrime: {
    id: "gremlinPrime",
    fullName: "Gremlin Primebond",
    firstPerson: false,
    secondPerson:
      /^The gremlin races between and around your legs, its eratic movement setting your head to spinning\.$/,
    thirdPerson:
      /^The gremlin races around and between the legs of (?<target>\w+), his eyes tracking it as he sways unsteadily\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 11.0,
  },
  dominationHumbugPrime: {
    id: "humbugPrime",
    fullName: "Humbug Primebond",
    firstPerson: false,
    secondPerson:
      /^You feel the humbug sucking horribly against your skin, drawing away your very will to fight\.$/,
    thirdPerson:
      /^The humbug clinging to the throat of (?<target>\w+) expands with a squelching sound\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 5.0,
  },
  dominationBloodleechPrime: {
    id: "bloodleechPrime",
    fullName: "Bloodleech Primebond",
    firstPerson: false,
    secondPerson:
      /^The tentacles of the bloodleech burrow into your skin, seeking the veins and fresh sources of life-giving fluid\.$/,
    thirdPerson:
      /^The bloodleech clinging to (?<target>\w+) expands and contracts with a sickening sound\.$/,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 5.0,
  },
  dominationSlimePrime: {
    id: "slimePrime",
    fullName: "Slime Primebond",
    firstPerson: false,
    secondPerson:
      /^You feel the slime attacking your physical well-being with its foul presence\.$/,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 10.0,
  },
  dominationBubonisPrime: {
    id: "bubonisPrime",
    fullName: "Bubonis Primebond",
    firstPerson:
      /^You sense the malignant glee of your bubonis as it infests (?<target>\w+)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["occultist"],
    skill: "domination",
    balance: "free",
    tags: [],
    length: 11.0,
  },
  //#endregion
};

export default Object.values(domination);
