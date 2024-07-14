//BLADEDANCE
bladedanceJab = {
  blank: {
    id: "jab",
    fullName: "Jab",
    firstPerson: /^You dart out .+ in a lightning-fast jab to the (?<limb>.+) of (?<target>.+?)\.$/, //line in-game: You dart out an etched, Vashnari rapier in a lightning-fast jab to the left arm of (Laorir).
    secondPerson: /^(?<user>\w+) darts out with .+ in a lightning-fast jab towards your (?<limb>.+)\.$/,  //line in-game: Dzak darts out with an etched, Vashnari rapier in a lightning-fast jab towards your left arm.
    thirdPerson: false,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    multiLine: 2,
    tags: [],
    affs: ["brokenleftarm", "brokenrightarm", "nausea", "clumsiness", "asthma", "weariness", "anorexia"], // From front at the arms: broken limb. From front at torso: nausea. From side at arms: clumsiness. From side at torso: asthma. From back at arms: weariness. From back at torso: anorexia
    info: false,
    length: 2.3,
  },
};
//raze miss
bladedancePunctuate = {
  blank: {
    id: "punctuate",
    fullName: "Punctuate",
    firstPerson: /^Your rapier strikes only air in front of (?<target>\w+)\.$/,  //There are 2 lines in-game, the first is generic, the second depends on if you miss or hit. I think we'd want to only capture the second, but here are both: the first line: Your blade's song punctuates every jab as your movements become a flurry of blows aimed at (Laorir). The second line: Your rapier strikes only air in front of (Laorir).
    secondPerson: /^(?<user>\w+) strikes only air with \w+ flurry of blows, the tip of \w+ rapier flickering before your face\.$/,  //line in-game: Dzak strikes only air with his flurry of blows, the tip of his rapier flickering before your face.   note: 2 lines for this as well, the first being generic and is: The staccato song of an etched, Vashnari rapier punctuates a flurry of blows as Dzak's blade pursues you relentlessly.
    thirdPerson: false,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    multiLine: 1,
    tags: ["raze"],
    affs: false,
    info: false,
    length: 2.0,
  },
};
//raze hit
bladedancePunctuate = {
    blank: {
      id: "punctuate",
      fullName: "Punctuate",
      firstPerson: /^The anti-weapon field surrounding (?<target>\w+) shatters under the point of your rapier\.$/,  //There are 2 lines in-game, the first is generic, the second depends on if you miss or hit. I think we'd want to only capture the second, but here are both: the first line: Your blade's song punctuates every jab as your movements become a flurry of blows aimed at (Laorir). The second line: The anti-weapon field surrounding (Laorir) shatters under the point of your rapier.
      secondPerson: /^The anti-weapon field surrounding you shatters under the flurry of strikes\.$/,  //line in-game: The anti-weapon field surrounding you shatters under the flurry of strikes.    Note: 2 lines for this as well, the first being: The staccato song of an etched, Vashnari rapier punctuates a flurry of blows as Dzak's blade pursues you relentlessly.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 1,
      tags: ["raze"],
      affs: false,
      info: false,
      length: 2.0,
    },
  };
bladedanceHound = {
  blank: {
    id: "hound",
    fullName: "Hound",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "bladedance",
    balance: "balance",
    multiLine: 0,
    tags: [],
    affs: false,
    info: false,
    length: 3.0,
  },
};
bladedanceFlick = {
    blank: {
      id: "flick",
      fullName: "Flick",
      firstPerson: /^You flick out with the point of .+ song blessed steel singing a keening note towards (?<target>.+?)\.$/,   //line in-game: You flick out with the point of an etched, Vashnari rapier, song blessed steel singing a keening note towards (Laorir).
      secondPerson: /^(?<user>\w+) flicks out with .+ towards you, a keening note raising from the blade's lunge\.$/,   //line in-game: Dzak flicks out with an etched, Vashnari rapier towards you, a keening note raising from the blade's lunge.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: ["aff"],
      affs: ["crescendo", "earworm"], // From front: crescendo. From side: earworm. From back: both crescendo and earworm.
      info: false,
      length: 2.3,
    },
  };
  bladedanceFlourish = {
    blank: {
      id: "flourish",
      fullName: "Flourish",
      firstPerson: /^You weave .+ through the air in a dazzling display, the music of your bladesong sweeping forth to wash over (?<target>.+?) while your feet shift to a new stance\.$/,   //line in-game: You weave an etched, Vashnari rapier through the air in a dazzling display, the music of your bladesong sweeping forth to wash over (Laorir) while your feet shift to a new stance.
      secondPerson: /^(?<user>\w+) weaves .+ through the air in a dazzling display, and in the moment of your distraction \w+ is no longer where \w+ was\.$/,  //line in-game: Dzak weaves an etched, Vashnari rapier through the air in a dazzling display, and in the moment of your distraction he is no longer where he was.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: 2.3,
    },
  };
  bladedanceHighsun = {
    blank: {
      id: "highsun",
      fullName: "Highsun",
      firstPerson: /^With a flourish of .+ you step smoothly into (?<target>.+?), your blade slicing at \w+ (?<limb>.+)\.$/,  //line in-game: With a flourish of an etched, Vashnari rapier you step smoothly into (Laorir), your blade slicing at his head.
      secondPerson: /^With a flourish of .+ (?<user>\w+) steps in close, \w+ blade slicing at your (?<limb>.+)\.$/,  //line in-game: With a flourish of an etched, Vashnari rapier Dzak steps in close, his blade slicing at your head.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: ["aff"],
      affs: ["clumsiness", "weariness", "recklessness", "addiction", "generosity", "confusion", "paralysis", "diminished", "haemophilia", "clumsiness", "healthleech", "sensitivity"], // Will give the first of the following afflictions that target does not have: From front at head: clumisness, weariness, recklessness. From side at head: addiction, generosity, confusion. From back at head: paralysis, generosity, diminished. From front at arms: clumsiness, weariness, haemophilia. From side at arms: weariness, clumsiness, healthleech. From back at arms: paralysis, healthleech, sensitivity.
      info: false,
      length: 2.3,
    },
  };
  bladedanceHeelsnap = {
    blank: {
      id: "heelsnap",
      fullName: "Heelsnap",
      firstPerson: /^.+ sings with a metallic song as you direct a deep cut toward (?<target>.+?) (?<limb>.+)\.$/,   //line in-game: An etched, Vashnari rapier sings with a metallic song as you direct a deep cut toward (Laorir)'s left leg.
      secondPerson: /^(?<user>\w+) blade sings with a metallic song as \w+ directs a deep cut towards your (?<limb>.+)\.$/,  //line in-game: Dzak's blade sings with a metallic song as he directs a deep cut towards your left leg.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: ["aff"],
      affs: ["brokenlegleft", "brokenlegright", "healthleech", "sensitivity", "hamstrung",], // From front: breaks leg. From side at left leg: healthleech. From side at right leg: sensitivity. From back: hamstrung and dismount.
      info: false,
      length: 2.3,
    },
  };
  bladedanceSunrise = {
    blank: {
      id: "sunrise",
      fullName: "Sunrise",
      firstPerson: false,
      secondPerson: false,
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: 2.3,
    },
  };
  bladedanceSunset = {
    blank: {
      id: "sunset",
      fullName: "Sunset",
      firstPerson: false,
      secondPerson: false,
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: 2.3,
    },
  };
  bladedanceDeathfrombelow = {
    blank: {
      id: "deathfrombelow",
      fullName: "Deathfrombelow",
      firstPerson: /^Carried into the skies by the force of feet and fury, your blade pierces the flesh of (?<target>\w+) as your ululating cry gives way to a shout, .+$/,   //2 lines in game, first is this which I am not capturing: You drop into a crouch, knees bent in perfect synchronicity as one foot sweeps out in a wide arc before tucking in close and tight. The power of a coiled spring surges within as muscle and bone and nerve contract and expand, and with an ululating shout you launch yourself like a living missile from ground to sky, your warcry ringing forth to herald your coming!. Second is this: Carried into the skies by the force of feet and fury, your blade pierces the flesh of (Laorir) as your ululating cry gives way to a shout, "DEATH FROM BELOW!"
      secondPerson: /^An ululating cry rings out from below, but you have nary a moment to even react as like a living missile (?<user>\w+) launches \w+ upward, \w+ blade piercing your flesh while \w+ shouts, .+$/,  //line in-game: An ululating cry rings out from below, but you have nary a moment to even react as like a living missile Dzak launches himself upward, his blade piercing your flesh while he shouts, "DEATH FROM BELOW!"
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: "balance",
      multiLine: 1,
      tags: [],
      affs: false,
      info: false,
      length: 3,
    },
  };
  bladedanceFootwork = {
    blank: {
      id: "footwork",
      fullName: "Footwork",
      firstPerson: /^On feet as light as snow, you begin to circle (?<target>\w+), your partner in this most deadly dance\.$/,  //line in-game: On feet as light as snow, you begin to circle (Laorir), your partner in this most deadly dance.
      secondPerson: /^With a deadly grace (?<user>\w+) begins to circle you, rapier poised and ready to strike\.$/,   //line in-game: With a deadly grace Dzak begins to circle you, rapier poised and ready to strike.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: false, //passive positioning. It always begins in the front position, but the "start" of the footwork passive gives a different line.
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: false,
    },
  };
  bladedanceFootworkfront = {
    blank: {
      id: "footworkfront",
      fullName: "Footworkfront",
      firstPerson: /^Your deadly dance carries you back around to face (?<target>\w+)\.$/,
      secondPerson: /^(?<user>.+?) circles back to your front, rapier languidly swaying with the hypnotic grace of \w+ dance\.$/,  //line in-game: Dzak circles back to your front, rapier languidly swaying with the hypnotic grace of his dance.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: false, //passive positioning.
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: false,
    },
  };
  bladedanceFootworkside = {
    blank: {
      id: "footworkside",
      fullName: "Footworkside",
      firstPerson: /^You continue to circle (?<target>\w+), your deadly dance carrying you around to \w+ flank\.$/,   //line in-game: You continue to circle (Laorir), your deadly dance carrying you around to his flank.
      secondPerson: /^(?<user>.+?) continues to circle you, \w+ deadly dance carrying \w+ poised and ready around to your flank\.$/,   //line in-game: Dzak continues to circle you, his deadly dance carrying him poised and ready around to your flank.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: false, //passive positioning.
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: false,
    },
  };
  bladedanceFootworkback = {
    blank: {
      id: "footworkback",
      fullName: "Footworkback",
      firstPerson: /^Your deadly dance carries you with lethal promise to the blindspot of (?<target>\w+)\.$/,  //line in-game: Your deadly dance carries you with lethal promise to the blindspot of (Laorir).
      secondPerson: /^(?<user>.+?) continues to circle you, slipping in and out of your blindspot as \w+ dances behind you\.$/,  //line in-game: Dzak continues to circle you, slipping in and out of your blindspot as he dances behind you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "bladedance",
      balance: false, //passive positioning.
      multiLine: 0,
      tags: [],
      affs: false,
      info: false,
      length: false,
    },
  };




//COMPOSITION
//refrained attacks

  compositionRefrainpaean = {
    blank: {
      id: "refrainpaean",
      fullName: "Refrainpaean",
      firstPerson: /^Your paean slams into (?<target>\w+) with all the weight of history's greatest triumphs\.$/,   //line in-game: Your paean slams into (Laorir) with all the weight of history's greatest triumphs.
      secondPerson: /^(?<user>.+?) paean slams into you with all the weight of history's greatest triumphs\.$/,  //line in-game: Dzak's paean slams into you with all the weight of history's greatest triumphs.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["paralysis"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefrainbhajan = {
    blank: {
      id: "refrainbhajan",
      fullName: "Refrainbhajan",
      firstPerson: /^The sinister implications of your refrain plague (?<target>\w+)\.$/,  //line in-game: The sinister implications of your refrain plague (Laorir).
      secondPerson: /^The sinister implications of (?<user>.+?) refrain plague you\.$/,   //line in-game: The sinister implications of Dzak's refrain plague you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["dizziness"],
      info: false,
      length: 2.3,
    },
  };

  //refrained Nomos hit
  compositionRefrainnomoshit = {
    blank: {
      id: "refrainnomoshis",
      fullName: "Refrainnomoshis",
      firstPerson: /^Your nomos sings out as it shatters the anti-weapon field surrounding (?<target>\w+)\.$/,
      secondPerson: /^The nomos of (?<user>.+?) sings out as it shatters the anti-weapon field surrounding you.$/,  //line in-game: The nomos of Dzak sings out as it shatters the anti-weapon field surrounding you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff", "raze"],
      affs: ["raze"],
      info: false,
      length: 2.3,
    },
  };

  //refrained Nomos miss
  compositionRefrainnomosmiss = {
    blank: {
      id: "refrainnomosmiss",
      fullName: "Refrainnomosmiss",
      firstPerson: /^You call forth the skill in your nomos\.$/,  //line in-game: You call forth the skill in your nomos.
      secondPerson: /^The nomos of (?<user>.+?) wails discordantly as it finds nothing surrounding you to destroy\.$/,   //line in-game: The nomos of Dzak wails discordantly as it finds nothing surrounding you to destroy.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff", "raze"],
      affs: ["raze"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefraingusheh = {
    blank: {
      id: "refraingusheh",
      fullName: "Refraingusheh",
      firstPerson: /^Your refrain brings on an unending appetite in (?<target>\w+)\.$/,  //line in-game: Your refrain brings on an unending appetite in (Laorir).
      secondPerson: /^(?<user>.+?) gusheh brings on an unending appetite in you\.$/,   //line in-game: Dzak's gusheh brings on an unending appetite in you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["addiction"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefrainode = {
    blank: {
      id: "refrainode",
      fullName: "Refrainode",
      firstPerson: /^Your ode leaves (?<target>\w+) gasping for breath\.$/,  //line in-game: Your ode leaves (Laorir) gasping for breath.
      secondPerson: /^(?<user>.+?) refrain leaves you gasping for breath\.$/,
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["asthma"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefrainghazal = {
    blank: {
      id: "refrainghazal",
      fullName: "Refrainghazal",
      firstPerson: false,  //missing
      secondPerson: false,  //missing
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["slickness"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefrainelegy = {
    blank: {
      id: "refrainelegy",
      fullName: "Refrainelegy",
      firstPerson: /^You call forth the mourning in your elegy\.$/,  //line in-game: You call forth the mourning in your elegy.
      secondPerson: /^The great losses of your life weigh heavy upon your soul with (?<user>.+?) elegy for the departed\.$/,   //line in-game:The great losses of your life weigh heavy upon your soul with Dzak's elegy for the departed.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["lethargy"],
      info: false,
      length: 2.3,
    },
  };
  compositionRefrainprosodion = {
    blank: {
      id: "refrainprosodion",
      fullName: "Refrainprosodion",
      firstPerson: /^You call forth the nobility of the Elder Days in your prosodion\.$/,  //line in-game: You call forth the nobility of the Elder Days in your prosodion.
      secondPerson: /^The nobility of (?<user>.+?) prosodion brings misfortune unto you\.$/,   //line in-game: The nobility of Dzak's prosodion brings misfortune unto you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, // refrains hit separately and simultaneously (technically before) blade attacks. Thus they don't consume a balance but simply accompany the blade attack balance.
      multiLine: 1,
      tags: ["aff"],
      affs: ["sensitivity"],
      info: false,
      length: 2.3,
    },
  };

//COMPOSITION
//Composed songs

compositionPaean = {
    blank: {
      id: "paean",
      fullName: "Paean",
      firstPerson: /^You raise .+ and channel avenging hostility into a rousing paean\.$/,  //line in-game: You raise a bard's mandolin and channel avenging hostility into a rousing paean.
      secondPerson: /^(?<user>.+?) raises .+ and channels avenging hostility into a rousing paean\.$/,  //line in-game: Dzak raises a bard's mandolin and channels avenging hostility into a rousing paean.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium",
      multiLine: 0,
      tags: [],
      affs: [], //makes enemies bleed small amount or 20% of current bleeding, whichever is higher.
      info: false,
      length: 2.5,
    },
  };
  compositionBhajan = {
    blank: {
      id: "bhajan",
      fullName: "Bhajan",
      firstPerson: /^With frantic motions, you bring forth the dark, foreboding curse of a bhajan\.$/,   //With frantic motions, you bring forth the dark, foreboding curse of a bhajan.
      secondPerson: /^With frantic motions, (?<user>.+?) brings forth the dark, foreboding curse of a bhajan\.$/,  //With frantic motions, Dzak brings forth the dark, foreboding curse of a bhajan.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium",
      multiLine: 0,
      tags: ["aff"],
      affs: ["fear"],
      info: false,
      length: 2.5,
    },
  };
  compositionNomos = {
    blank: {
      id: "nomos",
      fullName: "Nomos",
      firstPerson: /^You still your racing heart and steady your shaking hands to play your nomos with unbreaking discipline and control\.$/,   //You still your racing heart and steady your shaking hands to play your nomos with unbreaking discipline and control.
      secondPerson: /^(?<user>.+?) begins to play a famous nomos with unbreaking discipline and control\.$/,  //Dzak begins to play a famous nomos with unbreaking discipline and control.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //reflections are destroyed (if 1) or halfed (if more than 1).
      info: false,
      length: 2.5,
    },
  };
  compositionGusheh = {
    blank: {
      id: "gusheh",
      fullName: "Gusheh",
      firstPerson: /^The sweeping, upbeat music of a gusheh flows unending from your instrument like wine from an amphora\.$/,   //The sweeping, upbeat music of a gusheh flows unending from your instrument like wine from an amphora.
      secondPerson: /^The sweeping, upbeat music of a gusheh flows unending from (?<user>.+?) instrument like wine from an amphora\.$/, //The sweeping, upbeat music of a gusheh flows unending from Dzak's instrument like wine from an amphora.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //stuns for a short time.
      info: false,
      length: 2.5,
    },
  };
  compositionOde = {
    blank: {
      id: "ode",
      fullName: "Ode",
      firstPerson: /^With a heart full of music and your .+, you bring forth the memories of the greatest heroes of Sapience\.$/,   //With a heart full of music and your a bard's mandolin, you bring forth the memories of the greatest heroes of Sapience.
      secondPerson: /^With reverent mien, (?<user>.+?) brings forth the memories of the greatest heroes of Sapience\.$/,  //With reverent mien, Dzak brings forth the memories of the greatest heroes of Sapience.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //enemies cannot use the SAY command.
      info: false,
      length: 2.5,
    },
  };
  compositionGhazal = {
    blank: {
      id: "ghazal",
      fullName: "Ghazal",
      firstPerson: /^With hooded eyes, you take up your .+ and breathe the spirit of love into the world around you\.$/,  //With hooded eyes, you take up your a bard's mandolin and breathe the spirit of love into the world around you.
      secondPerson: /^With hooded eyes, (?<user>.+?) takes up .+ and breathes the spirit of love into the world around you\.$/,  //With hooded eyes, Dzak takes up a bard's mandolin and breathes the spirit of love into the world around you.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //all enemy checks have a chance to fail outright.
      info: false,
      length: 2.5,
    },
  };
  compositionElegy = {
    blank: {
      id: "elegy",
      fullName: "Elegy",
      firstPerson: /^You steady your nerves and bring forth a noble elegy with .+, honouring the memory of those who came before\.$/,  //You steady your nerves and bring forth a noble elegy with a bard's mandolin, honouring the memory of those who came before.
      secondPerson: /^(?<user>.+?) brings forth a noble elegy upon .+, honouring the memory of those who came before\.$/,  //Dzak brings forth a noble elegy upon a bard's mandolin, honouring the memory of those who came before.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //reduces celerity.
      info: false,
      length: 2.5,
    },
  };
  compositionProsodion = {
    blank: {
      id: "prosodion",
      fullName: "Prosodion",
      firstPerson: /^You play your .+ with a heart full of worship, dutifully offering your music for the glory of the Gods\.$/,  //line in-game: You play your a bard's mandolin with a heart full of worship, dutifully offering your music for the glory of the Gods.
      secondPerson: /^(?<user>.+?) plays .+ to dutifully offer \w+ music for the glory of the Gods.$/,  //Dzak plays his a bard's mandolin to dutifully offer his music for the glory of the Gods.
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: "equilibrium", 
      multiLine: 0,
      tags: [],
      affs: [], //deals passive damage to enemies.
      info: false,
      length: 2.5,
    },
  };


  
//COMPOSITION
//Passive movement heals and misc.

  compositionScherzo = {
    blank: {
      id: "scherzo",
      fullName: "Scherzo",
      firstPerson: /^The playful scherzo fills you with vigour\.$/,
      secondPerson: false,
      thirdPerson: false,
      profession: ["bard"],
      skill: "composition",
      balance: false, 
      multiLine: 0,
      tags: [],
      affs: [],
      info: false,
      length: false,
    },
  };







//Lines for limb tracking:
//As you carve into (Laorir), you perceive that you have dealt 15.0% damage to his left arm.
//As you carve into (Laorir), you perceive that you have dealt 15.0% damage to his right arm.



//LINES TO GAG:
//Paean refrained lines:
// /^You call forth the fury in your paean\.$/, 
// /^The paean already refrains from your song blessed blade\.$/,

//Bhajan refrain 1st line:
//You call forth the omens in your bhajan.

//Nomos refrain 1st line:
//You call forth the skill in your nomos.

//Gusheh refrain 1st line:
//You command insatiability with your gusheh.

//Ode refrain 1st line:
//You call forth the magnificence in your ode.

//Ghaza refrain 1st line:
//MISSING

//Elegy refrain 1st line:
//You call forth the magnificence in your ode.

//Nomos refrained lines:
// The sundering note of the Nomos already keens forth from your blade.
// Your nomos wails discordantly as it finds nothing surrounding

//Blade jab left arm, no refrain
//You feel the satisfying vibration of your blade's tip striking bone.


//first line for Deathfrombelow:
//You drop into a crouch, knees bent in perfect synchronicity as one foot sweeps out in a wide arc before tucking in close and tight. The power of a coiled spring surges within as muscle and bone and nerve contract and expand, and with an ululating shout you launch yourself like a living missile from ground to sky, your warcry ringing forth to herald your coming!