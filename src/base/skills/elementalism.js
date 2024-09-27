const elementalism = {
  holocaust: {
    id: "holocaust",
    fullName: "Holocaust",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) fashions a holocaust globe out of pure elemental fire and arms it\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 6.0,
  },
  freeze: {
    id: "freeze",
    fullName: "Freeze",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) raises a hand towards (?<target>\w+) and blasts \w+ with cold, frigid air\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  mudslide: {
    id: "mudslide",
    fullName: "Mudslide",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) weaves earth and water and a torrent of thick mud thunders forth to roll over (?<target>\w+), knocking \w+ sprawling\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  bombard: {
    id: "bombard",
    fullName: "Bombard",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^The air thrums about (?<user>\w+) as a flurry of rocks materialise to bombard (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  fulminate: {
    id: "fulminate",
    fullName: "Fulminate",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) clicks \w+ fingers and a bolt of lightning strikes from the air in a fulminous flash to transfix (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
};

export default Object.values(elementalism);
/*
(Myrddin) points his staff at you, and a bolt of lightning cascades out and roars, screaming, into your body.

A bolt of lightning roars into Ogoun's body.

Lyndee attempts to transfix you, but succeeds only in curing your blindness.

With blinding speed, (Myrddin) transfixes you with a swirling pattern of fire and air.

Lyndee attempts to transfix you, but succeeds only in curing your blindness.
The mesmerising patterns draw your attention away from the matters at hand...  //stupidity

Lyndee weaves fire and air together to transfix someone.
The eyes of Ogoun grow distant as he observes the complex patterns.

(Mizik) casts a spell over you, and a reflection of yourself appears next to you.

The sky grows dark as Aegoth calls upon powerful magics. Raising his hands balefully, he causes lightning bolts, the hammer of the storm, to shoot from his hands and slam into Amranu.

Emanation?(air?): Aegoth sweeps a disfigured staff of kindled birch overhead and a great wind rises, picking up Amranu and casting him violently about before hurling him back to the ground.

Resonance:
-Air
--1 Amranu clutches at his throat as he gasps for breath.
--2 A vicious wind rises, lashing and flaying at the body of Amranu to leave him sensitive and raw.
--3 A dreadful pallor overcomes the features of Amranu.
-Fire
?? Aegoth sends a spray of sparks to sear the flesh of Amranu.
--1 The air between Aegoth and Amranu ripples with a haze of heat.
--2 The air between Aegoth and Amranu ripple with a haze of heat, and flames ignite upon the skin of Amranu.
--3 Blisters burst open across the body of Amranu as his skin glows as if lit from within.
---(Blister proc) As Amranu over extends his blisters rip open, blood and pus dripping from the open wounds.
-Water
--1 A freezing wave of water materialises as if from nothing, crashing down upon Amranu.
--2 A flurry of freezing icicles materialise to slash at Amranu in a shower of freezing daggers.
--3 Aegoth makes no motion or word, but Amranu turns shockingly pale and staggers as if struck.
-Earth
--1 A loud crack emanates from the right arm of Amranu.
--2 Amranu buckles under an unseen blow.
--3 Amranu hacks and coughs as a series of unpleasant cracks sound in grim staccato from his chest.
*/
