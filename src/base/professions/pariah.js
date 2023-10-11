export const actions = [
  //#region Pariah
  {
    id: "fissure",
    fullName: "Epitaph Fissure",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Crimson fire trails the knife of (?<user>\w+) as \w+ slashes \w+ knife through the air before (?<target>.+?), a jagged logograph hanging in its passing\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["raze"],
    length: 2.2,
  },
  {
    id: "serpent",
    fullName: "Epitaph Serpent",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a writhing logograph in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["paralysis"], //Gives voyria when following scorpion. How to account?
    length: 2.2,
  },
  {
    id: "skein",
    fullName: "Epitaph Skein",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a skein in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: [],
    length: 2.2,
  },
  {
    id: "sun",
    fullName: "Epitaph Sun",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a sunburst in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["epilepsy"],
    length: 2.2,
  },
  {
    id: "jackal",
    fullName: "Epitaph Jackal",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph depicting a leaping jackal in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    //As the logograph becomes fully formed it leaps for Amranu, sinking into his skin just below his throat.
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["asthma"],
    length: 2.2,
  },
  {
    id: "scales",
    fullName: "Epitaph Scales",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph shaped like a set of scales in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    //As the logograph becomes fully formed it suddenly shatters, Amranu staggering drunkenly backwards.
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["clumsiness"],
    length: 2.2,
  },
  {
    id: "scales",
    fullName: "Epitaph Scales",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph depicting a striking scorpion in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    //The logograph is still solidifying as it leaps from the air to Amranu, an insubstantial stinger rising and falling thrice in terrible succession before the logograph is gone.
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["scytherus"],
    length: 2.2,
  },
  {
    id: "bear",
    fullName: "Epitaph Bear",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph depicting a lunging bear in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    //Even as the logograph becomes fully formed it leaps from the air to Amranu, ephemeral claws plunging into his chest.
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["haemophilia", "bleeding"],
    length: 2.2,
  },
  {
    id: "nest",
    fullName: "Epitaph Nest",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) traces a logograph that is all twisted lines and angles in the air before (?<target>.+?), the blood upon \w+ knife bursting into arcane flame as it hangs in the wake of the blade's passage\.$/,
    //Amranu suddenly sways, his eyes drooping as he sags.
    profession: ["pariah"],
    skill: "memorium",
    balance: "balance",
    multiLine: 0,
    tags: ["weariness"],
    length: 2.2,
  },
  //#endregion
];

//Mizik sweeps a leaf-bladed ritual knife in a circle above his head, the point coming to rest aimed at Amranu. A fine crimson spray patters about the two of them, though nothing else seems to have changed.
//09:15:56.502 A great black cloud of buzzing humming darkness rises up, descending upon Amranu all at once in a wave of stinging death.
/*
09:15:19.863 Mizik raises his right hand, and snaps his fingers.
09:15:19.863 A tide of writhing bodies boils up from the ground, descending upon Amranu and burrowing into his flesh in a gnawing chittering mass.
*/
/*
09:15:29.645 Mizik raises his right hand, and imperiously snaps his fingers.
09:15:29.645 Amranu looks suddenly nauseous, a ghostly pallor suffusing his features.
*/
/*
09:15:35.098 Mizik raises his right hand, and snaps his fingers.
09:15:35.098 The skin of Amranu undulates and writhes as myriad bodies shift beneath the surface. Blood sprays as they seek escape, a black tide rolling away from Amranu.
09:15:35.098 The magical shield surrounding Amranu is torn apart from within as the black cloud struggles free.
*/
//09:15:36.798 Mizik fixes his gaze to that of Amranu, raising his right hand and sharply snapping his fingers.
/*
09:15:54.558 Something pulses from within the chest of Mizik, and he seems more vital.
09:15:54.558 Amranu coughs, his face starting to turn blue.
09:15:54.558 A bright red light shines from within the chest of Amranu.
09:15:54.558 Horror overcomes Amranu's face as his body stiffens into paralysis.
*/
/*
09:16:16.144 Amranu eats an aurum flake.
09:16:16.144 Mizik eats a magnesium chip.
09:16:16.144 Mizik tips a few droplets of something from a vial onto the blood-slick surface of a leaf-bladed ritual knife.
09:16:16.144 Amranu sways on his feet, face draining of colour.
09:16:16.144 Mizik fixes his gaze to that of Amranu, raising his right hand and sharply snapping his fingers.
*/
/*
09:16:17.602 A violent cracking sound from the air in front of Amranu heralds his magical shield exploding into a shower of translucent shards.
09:16:17.602 Amranu violently quakes and shudders, his eyes rolling in their sockets.
*/
/*
09:15:36.798 Mizik ceases to wield a Shield of Absorption in his right hand.
09:15:36.798 Mizik fixes his gaze to that of Amranu, raising his right hand and sharply snapping his fingers.
09:15:36.798 Mizik traces a logograph depicting a lunging bear in the air before Amranu, the blood upon his knife bursting into arcane flame as it hangs in the wake of the blade's passage.
09:15:36.798 Even as the logograph becomes fully formed it leaps from the air to Amranu, ephemeral claws plunging into his chest.
09:15:36.798 Mizik fixes his gaze to that of Amranu, raising his right hand and sharply snapping his fingers.
*/
//Mizik unscrews the lid from a small stone jar, holding it at eye level as a thick red smoke pours from the open mouth.
//Mizik carefully unscrews the lid of a small stone jar, tapping a leaf-bladed ritual knife against the open mouth and letting the life's blood upon the blade drip inside.
//Mizik withdraws a small stone jar from a pouch at his waist, tipping a few drops of the contents onto a leaf-bladed ritual knife.