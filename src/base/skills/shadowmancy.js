export const shadowmancy = {
  reap: {
    //SHADOW REAP KHASEEM KALMIA
    //You rub some kalmia on a scythe of shadows.
    //You unleash a vicious reaping blow at Khaseem with a scythe of shadows.
    id: "reap",
    fullName: "Reap",
    firstPerson:
      /^You unleash a vicious reaping blow at (?<target>.+?) with .+?\.$/,
    secondPerson:
      /^(?<user>\w+) delivers a lightning-fast strike to you with .+?\.$/,
    thirdPerson:
      /^(?<user>\w+) lashes out with a swift, reaping blow at (?<target>.+?)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 2.4,
  },
  cull: {
    //SHADOW CULL KHASEEM KALMIA
    //You rub some kalmia on a scythe of shadows.
    //You lay into Khaseem with a vicious blow from a scythe of shadows.
    id: "cull",
    fullName: "Cull",
    firstPerson: /^You lay into (?<target>.+?) with a vicious blow from .+?\.$/,
    secondPerson: /^(?<user>\w+) lays into you with a savage blow from .+?\.$/,
    thirdPerson:
      /^(?<user>\w+) lays into (?<target>.+?) with a terrible blow from .+?\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 3.35,
  },
  shadowStrike: {
    id: "shadowStrike",
    fullName: "Shadow Strike",
    firstPerson: /^Raising .+?, you point it at (?<target>.+?)\.$/,
    secondPerson:
      /^(?<user>\w+) raises .+? and points it at you with a sinister smile\.$/,
    thirdPerson:
      /^(?<user>\w+) raises .+? and points it at (?<target>.+?) with a sinister smile\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 1.3,
  },
  shadowStrikeKneel: {
    id: "shadowStrikeKneel",
    fullName: "Shadow Strike",
    firstPerson:
      /^Raising .+? to point at (?<target>.+?), you enunciate your command: "Kneel"\.$/,
    secondPerson:
      /^Raising .+? to point at you, (?<user>\w+) clearly enunciates a single directive: "Kneel"\.$/,
    thirdPerson:
      /^Raising .+? to point at (?<target>.+?), (?<user>\w+) enunciates a single directive: "Kneel"\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    info: "Kneel",
    affs: ["prone"],
    tags: ["aff"],
    length: 2.4,
  },
  degeneration: {
    id: "degeneration",
    fullName: "Degeneration",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, unnatural green flame ignites upon the blade\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), the contact area begins to rot before your eyes\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
  },
  degenerationFull: {
    id: "degenerationFull",
    fullName: "Degeneration",
    firstPerson: false,
    secondPerson: /^Your body is wracked by the degenerative power\.$/,
    thirdPerson: /^The face of (?<target>\w+) contorts in pain\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
    info: "Full",
  },
  depression: {
    id: "depression",
    fullName: "Depression",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, it burns with a sickly yellow light\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), it burns with a sickly yellow glow\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
  },
  depressionFull: {
    id: "depressionFull",
    fullName: "Depression",
    firstPerson: false,
    secondPerson:
      /^Nothing will ever be right again - there can be no salvation\.$/,
    thirdPerson:
      /^A look of total despair crosses the face of (?<target>\w+)\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
    info: "Full",
  },
  retribution: {
    id: "retribution",
    fullName: "Retribution",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, the blade flashes an incandescent white\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), it blazes with incandescent white flame\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
  },
  retributionFull: {
    id: "retributionFull",
    fullName: "Retribution",
    firstPerson: false,
    secondPerson:
      /^The white flame leaps from the scythe to you, blazing brilliantly as it uses your mental might for fuel\.$/,
    thirdPerson:
      /^The white flame leaps from the scythe to (?<target>\w+), blazing with a terrible intensity before guttering out\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: [],
    length: 0.0,
    info: "Full",
  },
  madness: {
    id: "madness",
    fullName: "Madness",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your sanity slipping away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), \w+ face grows vacant and he begins to tremble\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
  },
  madnessFull: {
    id: "madnessFull",
    fullName: "Madness",
    firstPerson: false,
    secondPerson:
      /^The voices plaguing you reach a deafening crescendo, stunning you with their intensity\.$/,
    thirdPerson:
      /^The head of (?<target>\w+) snaps back as if struck and \w+ eyes roll madly\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
    info: "Full",
  },
  leach: {
    id: "leach",
    fullName: "Leach",
    firstPerson: false,
    secondPerson:
      /^As the weapon strikes you, you feel your strength being leeched away\.$/,
    thirdPerson:
      /^As the weapon strikes (?<target>\w+), \w+ seems greatly diminished\.$/,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
  },
  leachFull: {
    id: "leachFull",
    fullName: "Leach",
    firstPerson:
      /^As the scythe comes away, the writhing shadow of (?<target>\w+) clings to the weapon\.$/,
    secondPerson:
      /^As the scythe comes away, the writhing figure of your shadow clings to the blade\.$/,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "free",
    tags: ["affs"],
    length: 0.0,
    info: "Full",
  },
  consume: {
    id: "consume",
    fullName: "Consume",
    firstPerson:
      /^Reaching past (?<target>\w+), you plunge .+? into \w+ shadow\. \w+ grows paler as you feel a rush of energy\.$/,
    secondPerson:
      /^Reaching past you, (?<user>\w+) plunges .+? into your shadow\. You feel lightheaded, while \w+ seems suddenly invigourated\.$/,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 2.5,
    info: "Full",
  },
  attune: {
    id: "attune",
    fullName: "Attune",
    firstPerson:
      /^Reaching out to the shadow of (?<target>\w+), you plunge .+? into it and attune it to the directive of (?<info>\w+)\.$/,
    secondPerson: [
      /^(?<user>\w+) reaches past you, plunging .+? into your shadow\.$/,
      /^A sudden sense of foreboding comes over you\.$/,
    ],
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "equilibrium",
    tags: [],
    length: 2.2,
    info: false,
  },
  mutilate: {
    id: "mutilate",
    fullName: "Mutilate",
    firstPerson:
      /^Drawing the shadow of (?<user>\w+) from a bone phylactery, you plunge .+? savagely into the ephemeral mass\.$/,
    secondPerson:
      /^You feel a deep, piercing agony, that radiates outward from the centre of your chest and claws with icy fingers at your insides\. The metallic taste of salt fills your mouth and the dampness on your cheeks can only be blood$/,
    thirdPerson: false,
    profession: ["depthswalker"],
    skill: "shadowmancy",
    balance: "balance",
    tags: [],
    length: 2.3,
    info: false,
  },
};
//DW instill
//Focusing upon a scythe of shadows, you instill it with the directive of (\w+).

export default Object.values(shadowmancy);
