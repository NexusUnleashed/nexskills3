// GMCP areaid 417

import { checkSensitivity, checkRandomLimbs, nextLine } from "../utilities";

// Crowdmap areaid 490
const lupineHuntingGrounds = [
  //#region Wild Centaur
  {
    user: "a wild centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A wild centaur pins you beneath his powerful front legs and drags his barbed spear across your stomach, steaming guts falling free in a shower of blood\.$/,
    thirdPerson:
      /^A wild centaur pins (?<target>\w+?) beneath his powerful front legs and drags his barbed spear across \w+ stomach, steaming guts falling free in a shower of blood\.$/,
    tags: ["damage", "parry torso"],
    length: 2.0,
  },
  {
    user: "a wild centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A wild centaur pins you beneath his powerful front legs and drags his barbed spear across your stomach, steaming guts falling free in a shower of blood\.$/,
    thirdPerson:
      /^Rage in his eyes, a wild centaur gallops in circles around (?<target>\w+?), slicing at the back of \w+ legs with each pass\.$/,
    tags: ["damage", "parry legs"],
    length: 2.0,
  },
  {
    user: "a wild centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rage in his eyes, a wild centaur gallops in circles around you, drawing his wicked spear across the backs of your legs each time he passes by.\.$/,
    thirdPerson: false,
    tags: ["damage", "parry legs"],
    length: 2.0,
  },
  {
    user: "a wild centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rising up, a wild centaur snaps his legs out and kicks you, throwing you to the ground\.$/,
    thirdPerson:
      /^Rising up, a wild centaur snaps his legs out and kicks (?<target>\w+?), throwing \w+ to the ground\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
  },
  //#endregion
  //#region Centaur Sage
  {
    user: "a centaur sage",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An imperious jade gleam erupts from a centaur sage's eyes as she levels her staff at you\. There is no reaction at first, before verdant vines explode outwards to entangle you with a strangling hold\.$/,
    thirdPerson:
      /^An imperious jade gleam erupts from a centaur sage's eyes as she levels her staff at (?<target>\w+?)\. There is no reaction at first, before verdant vines explode outwards to entangle \w+ with a strangling hold\.$/,
    tags: ["damage", "web"],
    length: 2.0,
  },
  {
    user: "a centaur sage",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A centaur sage raises her staff and points it at you, unleashing a blast of magic that sweeps you off your feet and sets you ablaze\.$/,
    thirdPerson:
      /^A centaur sage raises her staff and points it at (?<target>\w+?), unleashing a blast of magic that sweeps \w+ off her feet and sets \w+ ablaze\.$/,
    tags: ["damage", "burning", "prone"],
    length: 2.0,
  },
  {
    user: "a centaur sage",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A centaur sage unleashes an emerald torrent of magical strikes in your direction, each one striking true\.$/,
    thirdPerson:
      /^A centaur sage unleashes an emerald torrent of magical strikes in (?<target>\w+?)'s direction, each one striking true\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a centaur sage",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A centaur sage canters in close and sweeps her staff at your legs, breaking one of them before taking the opportunity to bash you in the face with the butt of her weapon\.$/,
    thirdPerson:
      /^A centaur sage canters in close and sweeps her staff at (?<target>\w+?)'s legs, breaking one of them before taking the opportunity to bash you in the face with the butt of her weapon\.$/,
    tags: ["damage", "disloyalty"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Elder Centaur
  {
    user: "an elder centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rearing up on her hind legs, an elder centaur kicks her hooves into your chest, bruising flesh and knocking you the ground\.$/,
    thirdPerson:
      /^Rearing up on her hind legs, an elder centaur kicks her hooves into (?<target>\w+?)'s chest, bruising flesh and knocking \w+ the ground\.$/,
    tags: ["damage", "crackedribs"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "an elder centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An elder centaur spins her spear over her head, bringing it around to slash a brutal wound across your throat\.$/,
    thirdPerson:
      /^An elder centaur spins her spear over her head, bringing it around to slash a brutal wound across (?<target>\w+?)'s throat\.$/,
    tags: ["damage", "asthma", "slashedthroat"],
    length: 2.0,
  },
  {
    user: "an elder centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Reversing her grip, an elder centaur thrusts her weapon forward, driving the haft into your temple with a crack of pain\.$/,
    thirdPerson:
      /^Reversing her grip, an elder centaur thrusts her weapon forward, driving the haft into (?<target>\w+?)'s temple\.$/,
    tags: ["damage", "stupidity"],
    length: 2.0,
  },
  {
    user: "an elder centaur",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An elder centaur thrusts her spear deep into your belly, savagely twisting as she rips through vital organs\.$/,
    thirdPerson:
      /^An elder centaur thrusts her spear deep into (?<target>\w+?)'s belly, savagely twisting as she rips through vital organs\.$/,
    tags: ["damage", "nausea"],
    length: 2.0,
  },
  //#endregion
  //#region Centaur Archer
  {
    user: "a centaur archer",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a look of utter concentration upon his face, a centaur archer pulls back on his bow before unleashing a heavy shot at you\.$/,
    //It slices through any protective barriers and rips through flesh, leaving you bleeding.
    thirdPerson:
      /^With a look of utter concentration upon his face, a centaur archer pulls back on his bow before unleashing a heavy shot at (?<target>\w+?)\.$/,
    tags: ["damage", "raze"],
    length: 2.0,
  },
  {
    user: "a centaur archer",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A centaur archer swiftly pulls back upon his bow and unleashes a quick shot of three arrows at you. The envenomed tips dig deep into you, poisoning you with myriad afflictions\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 2.0,
  },
  {
    user: "a centaur archer",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A centaur archer aims low and unleashes his arrow at your feet, aiming to pin you in place\.$/,
    //As it connects true, the venoms applied to the arrow tip floods into your body, leaving you weary and lethargic.
    thirdPerson: false,
    tags: ["damage", "hamstring", "lethargy", "weariness"],
    length: 2.0,
  },
  //#endregion
  //#region Centaur Chieftain
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a skilful swing of his spear, a centaur chieftain slices away at your legs, severing tendons and leaving deep gashes into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "clumsiness", "torntendons"],
    length: 2.0,
  },
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Reeling back upon his two hind legs, a centaur chieftain stows away his spear temporarily before charging in your direction\. An unstoppable force, his muscled frame smashes into you and tramples you underfoot\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      //A centaur chieftain charges in, spear at the ready.
      /^You writhe and scream as he drives the cruel spear deep into your side\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "stun"],
    length: 2.0,
  },
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a skilful swing of his spear, a centaur chieftain slices away at your legs, severing tendons and leaving deep gashes into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "torntendons"],
    length: 2.0,
  },
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Whirling his spear overhead, a centaur chieftain brings the weapon down to raze through your magical shield, and then back around to slice into your torso\.$/,
    thirdPerson: false,
    tags: ["damage", "raze", "parry torso"],
    length: 2.0,
  },
  {
    user: "a centaur chieftain",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^There is no stopping the ferocity of a centaur chieftain, as he expertly sends his spear whirling across your head, hitting you with the butt of the weapon before it whirls around again, biting deep into your throat\.$/,
    thirdPerson: false,
    tags: ["damage", "slashedthroat", "parry head"],
    length: 2.0,
  },
  //#endregion
  //#region Diamond-Back Rattlesnake
  {
    user: "a diamond-back rattlesnake",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A diamond-back rattlesnake coils his body around your feet, causing you to stumble and fall upon the floor\.$/,
    thirdPerson:
      /^A diamond-back rattlesnake coils his body around (?<target>\w+?)'s feet, causing \w+ to stumble and fall upon the floor\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
  },
  {
    user: "a diamond-back rattlesnake",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^The sleek patterning of a diamond-back rattlesnake's body dazzles and transfixes you as he undulates upon the desert floor\.$/,
    thirdPerson:
      /^The sleek patterning of a diamond-back rattlesnake's body dazzles and transfixes (?<target>\w+?) as he undulates upon the desert floor\.$/,
    //A diamond-back rattlesnake attempts to transfix (Poxie), but succeeds only in curing her blindness.
    tags: ["damage", "blindness TRANSFIX???"],
    length: 2.0,
  },
  {
    user: "a diamond-back rattlesnake",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A diamond-back rattlesnake coils his body around your feet, causing you to stumble and fall upon the floor\.$/,
    thirdPerson:
      /^A diamond-back rattlesnake lunges forward and sinks his fangs deep into (?<target>\w+?), and poison begins to flood relentlessly into \w+ body\.$/,
    tags: ["damage", "darkshade", "loki", "loki"],
    length: 2.0,
  },
  //#endregion
  //#region Ochre-Necked Oryx
  {
    user: "an ochre-necked oryx",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An ochre-necked oryx tilts his head downwards and charges at you, knocking you over and taking the opportunity to impale you with his horns\.$/,
    thirdPerson:
      /^An ochre-necked oryx tilts his head downwards and charges at (?<target>\w+?), knocking \w+ over and taking the opportunity to impale \w+ with his horns\.$/,
    tags: ["damage", "prone", "parry torso"],
    length: 2.0,
  },
  {
    user: "an ochre-necked oryx",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Turning swiftly upon his hindquarters, an ochre-necked oryx unleashes a powerful kick against your torso, cracking your ribs with brutal force\.$/,
    thirdPerson:
      /^Turning swiftly upon his hindquarters, an ochre-necked oryx unleashes a powerful kick against (?<target>\w+?)'s torso, cracking her ribs with brutal force\.$/,
    tags: ["damage", "crackedribs"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "an ochre-necked oryx",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Angered by your mere presence, an ochre-necked oryx bites down hard upon one of your arms, breaking it\.$/,
    thirdPerson:
      /^Angered by (?<target>\w+?)'s mere presence, an ochre-necked oryx bites down hard upon one of \w+ arms, breaking it\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Black-Tongued Lizard
  {
    user: "a black-tongued lizard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Opening his mouth wide, a black-tongued lizard exhales a large cloud of noxious vapour that burns your throat and lungs\.$/,
    thirdPerson: false,
    tags: ["damage", "asthma"],
    length: 2.0,
  },
  {
    user: "a black-tongued lizard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sharp teeth stab into your flesh as a black-tongued lizard bites down, dripping toxic saliva into your bloodstream\.$/,
    thirdPerson:
      /^Sharp teeth stab into flesh as a black-tongued lizard bites (?<target>\w+?), dripping toxic saliva into \w+ bloodstream\.$/,
    tags: ["damage", "loki", "loki"],
    length: 2.0,
  },
  {
    user: "a black-tongued lizard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Hissing loudly, a black-tongued lizard spits toxic saliva into your eyes\.$/,
    thirdPerson:
      /^Hissing loudly, a black-tongued lizard spits toxic saliva into (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "blackout"],
    length: 2.0,
  },
  //#endregion
  //#region Slavering Hyena
  {
    user: "a slavering hyena",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Seizing your leg in her jaws, a slavering hyena drags you to the ground, ripping away flesh in the process\.$/,
    thirdPerson:
      /^Seizing (?<target>\w+?)'s leg with her jaws, a slavering hyena drags \w+ to the ground, ripping away flesh in the process\.$/,
    tags: ["damage", "prone", "torntendons", "clumsiness"],
    length: 2.0,
  },
  {
    user: "a slavering hyena",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a disturbing laugh, a slavering hyena pounces on you, sinking her muzzle into your abdomen and tearing out a bloody hunk of flesh\.$/,
    thirdPerson:
      /^With a disturbing laugh, a slavering hyena pounces on (?<target>\w+?), tearing into \w+ abdomen and devouring a bloody hunk of flesh\.$/,
    tags: ["damage", "parry torso"],
    length: 2.0,
  },
  {
    user: "a slavering hyena",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Laughing maniacally, a slavering hyena rips into your flesh with her claws\.$/,
    thirdPerson:
      /^Hissing loudly, a black-tongued lizard spits toxic saliva into (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "clumsiness"],
    length: 2.0,
  },
  //#endregion
  //#region Crimson-Hued Scorpion
  {
    user: "a crimson-hued scorpion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A crimson-hued scorpion reaches out with his colossal claws, clamping them around your legs and snapping them in two\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a crimson-hued scorpion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a chittering hiss, a crimson-hued scorpion rushes forward, trampling over you with his immense bulk\.$/,
    thirdPerson:
      /^With a chittering hiss, a crimson-hued scorpion rushes and tramples over (?<target>\w+?), crushing limbs in his wake\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a crimson-hued scorpion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A crimson-hued scorpion impales you upon the deadly barb of his tail, dragging you across scalding-hot sands\.$/,
    thirdPerson: false,
    tags: ["damage", "impale", "prone"],
    length: 2.0,
  },
  {
    user: "a crimson-hued scorpion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A crimson-hued scorpion stings you with the deadly barb of his tail\.$/,
    //Your skin dries and cracks as a potent venom pulses through your body. // dehydrated
    //Your flesh begins to blister and burn as a potent venom flows through you. //scalded, burning
    //Your veins pulse with a white-hot intensity as a searing venom sets you aflame. // burning
    thirdPerson:
      /^A crimson-hued scorpion stings (?<target>\w+?) with the deadly barb of his tail\.$/,
    tags: ["damage", "dehydrated > scaled/burning? FIX"],
    length: 2.0,
  },
  //#endregion
  //#region Mud-Coated Hippo
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a rumble of displeasure, a mud-coated hippo slams his implacable mass into you\.$/,
    thirdPerson:
      /^With a rumble of displeasure, a mud-coated hippo slams his implacable mass into (?<target>\w+?)\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A mud-coated hippo ambles towards you, closing his powerful jaws about your skull in a powerful bite\.$/,
    thirdPerson:
      /^A mud-coated hippo ambles towards (?<target>\w+?), closing his powerful jaws about \w+ skull in a powerful bite\.$/,
    tags: ["damage", "concussion", "stupidity"],
    length: 2.0,
  },
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A mud-coated hippo charges forward with an enraged bellow, knocking you prone before trampling over you with his immense bulk\.$/,
    thirdPerson:
      /^A mud-coated hippo charges forward with an enraged bellow, knocking (?<target>\w+?) prone before trampling over \w+\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A mud-coated hippo ambles towards you, closing his powerful jaws about your leg and severing it in a single, powerful bite\.$/,
    thirdPerson: false,
    tags: ["damage", "parry leg"],
    length: 2.0,
  },
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^His immense bulk rippling, a mud-coated hippo slams his body down, disturbing the air with explosive force\.$/,
    thirdPerson: false,
    tags: ["throw", "stun"],
    length: 2.0,
  },
  {
    user: "a mud-coated hippo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Opening his immense jaws, a mud-coated hippo bites clean through your magical shield\.$/,
    thirdPerson: false,
    tags: ["damage", "raze"],
    length: 2.0,
  },
  //#endregion
  //#region Wide-Eyed Primate
  {
    user: "a wide-eyed primate",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A wide-eyed primate pounces from a nearby branch, landing on you and sinking his dirty teeth into your flesh\.$/,
    thirdPerson:
      /^A wide-eyed primate pounces from a nearby branch, landing on (?<target>\w+?) and sinking dirty teeth into \w+ flesh\.$/,
    tags: ["damage", "loki", "loki"],
    length: 2.0,
  },
  {
    user: "a wide-eyed primate",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaping from a nearby tree, a wide-eyed primate pounces on you and claws ferociously at your face\.$/,
    thirdPerson:
      /^Leaping from a nearby tree, a wide-eyed primate pounces on (?<target>\w+?) and claws ferociously at \w+ face\.$/,
    tags: ["damage", "disloyalty"],
    length: 2.0,
  },
  {
    user: "a wide-eyed primate",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Howling aloud, a wide-eyed primate flings a handful of fecal matter at you, covering you with the foul substance\.$/,
    thirdPerson:
      /^Howling aloud, a wide-eyed primate flings a handful of fecal matter at (?<target>\w+?), covering \w+ with the foul substance\.$/,
    tags: ["damage", "itching"],
    length: 2.0,
  },
  //#endregion
  //#region Agitated Jaguar
  {
    user: "an agitated jaguar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Lunging forward, an agitated jaguar clamps his jaws closed on your arm, ripping it apart in a flurry of motion\.$/,
    thirdPerson:
      /^Lunging forward, an agitated jaguar clamps his jaws closed on (?<target>\w+?)'s arm, ripping it apart in a flurry of motion\.$/,
    tags: ["damage", "parry arms"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "an agitated jaguar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaping to and fro, an agitated jaguar pounces onto you, slashing and flaying your skin to bloody ribbons\.$/,
    thirdPerson:
      /^Leaping to and fro, an agitated jaguar pounces onto (?<target>\w+?), slashing and flaying \w+ skin to bloody ribbons\.$/,
    tags: ["damage", "slashedthroat"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "an agitated jaguar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Razor-sharp claws glint as an agitated jaguar rakes your flesh\.$/,
    thirdPerson:
      /^Razor-sharp claws glint as an agitated jaguar rakes (?<target>\w+?)'s flesh\.$/,
    tags: ["damage", "haemophilia"],
    length: 2.0,
  },
  //Muscles ripple beneath the coat of an agitated jaguar as he lunges forward, driving his claws clean through (Poxie)'s magical shield. //Raze
  //#endregion
  //#region Shaggy Water Buffalo
  {
    user: "a shaggy water buffalo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A shaggy water buffalo slams his bulk into you, knocking you violently to the ground before he tramples over you\.$/,
    thirdPerson:
      /^A shaggy water buffalo slams his bulk into (?<target>\w+?), knocking \w+ violently to the ground before trampling over \w+\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a shaggy water buffalo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Charging forward, a shaggy water buffalo rams his horns into your gut\.$/,
    thirdPerson:
      /^Charging forward, a shaggy water buffalo rams his horns into (?<target>\w+?)'s gut\.$/,
    tags: ["damage", "nausea", "parry torso"],
    length: 2.0,
  },
  {
    user: "a shaggy water buffalo",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With an irritated grunt, a shaggy water buffalo kicks you soundly in the torso\.$/,
    thirdPerson:
      /^With an irritated grunt, a shaggy water buffalo kicks (?<target>\w+?) soundly in the torso\.$/,
    tags: ["damage", "crackedribs"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
  //#region Scarred Bull Elephant
  {
    user: "a scarred bull elephant",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Trumpeting loudly, a scarred bull elephant sweeps your legs out with his tusks, tossing you aside in a brutal motion\.$/,
    thirdPerson:
      /^Trumpeting loudly, a scarred bull elephant sweeps (Poxie) legs out with his tusks, tossing her aside in a brutal motion\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a scarred bull elephant",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a forceful toss of his head, a scarred bull elephant gores you with his tusks\.$/,
    thirdPerson:
      /^With a forceful toss of his head, a scarred bull elephant gores (Poxie) with his tusks\.$/,
    tags: ["damage", "parry torso"],
    length: 2.0,
  },
  {
    user: "a scarred bull elephant",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A scarred bull elephant raises his scarred trunk and trumpets loudly, blasting your eardrums into deafening silence\.$/,
    thirdPerson: false,
    tags: ["aoe", "damage", "disrupt"],
    length: 2.0,
  },
  {
    user: "a scarred bull elephant",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A scarred bull elephant stampedes forward, trampling over you with his immense bulk\.$/,
    thirdPerson:
      /^A scarred bull elephant stampedes forward, trampling over (Poxie) with his immense bulk\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Fearsome Lion
  {
    user: "a fearsome lion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A fearsome lion rakes his claws down your face, ripping through flesh and bone with exceptional ease\.$/,
    thirdPerson:
      /^A fearsome lion rakes his claws down (?<target>\w+?)'s face, ripping through flesh and bone with exceptional ease\.$/,
    tags: ["damage", "parry head"],
    length: 2.0,
  },
  {
    user: "a fearsome lion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your heart palpitates in your chest as a fearsome lion rears back and unleashes a harrowing roar\.$/,
    thirdPerson: false,
    tags: ["damage", "claustrophobia", "loneliness"],
    length: 2.0,
  },
  {
    user: "a fearsome lion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A fearsome lion lunges forward and sinks his teeth into your leg, gouging great wounds when he rips his fangs out of your flesh\.$/,
    thirdPerson:
      /^A fearsome lion lunges forward and sinks his teeth into (?<target>\w+?)'s leg, gouging great wounds when he rips his fangs out\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Shadowy Basilisk
  {
    user: "a shadowy basilisk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A shadowy basilisk strikes at you with his fangs, injecting you with a strange venom\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 2.0,
  },
  {
    user: "a shadowy basilisk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your thoughts scatter to the wind as a shadowy basilisk gazes into your mind\.$/,
    thirdPerson:
      /^(?<target>\w+?)'s eyes grow vacant and \w+ begins to sway, influenced by the gaze of a shadowy basilisk\.$/,
    tags: ["damage", "impatience", "mental"],
    length: 2.0,
  },
  {
    user: "a shadowy basilisk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your muscles begin to slowly petrify, locking in place as a shadowy basilisk stares into your eyes\.$/,
    thirdPerson:
      /^(?<target>\w+?) stiffens abruptly as a shadowy basilisk stares into \w+ eyes\.$/,
    tags: ["damage", "paralysis"],
    length: 2.0,
  },
  //#endregion
  //#region Savage Boar
  {
    user: "a savage boar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A savage boar charges at you, ripping your stomach open as he brutally gores you\.$/,
    thirdPerson: false,
    tags: ["damage", "anorexia"],
    length: 2.0,
  },
  {
    user: "a savage boar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Charging forward with primal ferocity, a savage boar tramples over you, breaking bones with his muscled bulk\.$/,
    thirdPerson:
      /^Charging forward with primal ferocity, a savage boar tramples over (?<target>\w+?), breaking \w+ bones with a loud 'crack'\.$/,
    tags: ["damage", "prone", "parry head"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a savage boar",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A savage boar slashes at you with his sharp tusks, tearing a dirty wound in your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 2.0,
  },
  //#endregion
  //#region Enraged Spikehog
  {
    user: "an enraged spikehog",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An enraged spikehog throws his weight into you, tearing apart your flesh as his spikes make contact\.$/,
    thirdPerson:
      /^An enraged spikehog throws his weight into (?<target>\w+?), tearing apart \w+ flesh as his spikes make contact\.$/,
    tags: ["damage", "healthleech"],
    length: 2.0,
  },
  {
    user: "an enraged spikehog",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Tensing up as he turns to faces you, an enraged spikehog expels a cluster of barbed spines into your abdomen\.$/,
    thirdPerson:
      /^Tensing up as he turns to faces (?<target>\w+?), an enraged spikehog expels a cluster of barbed spines into \w+ abdomen\.$/,
    tags: ["damage", "impale", "prone"],
    length: 2.0,
  },
  {
    user: "an enraged spikehog",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Shuddering in place, an enraged spikehog expels dozens of deadly spines, each ripping through your flesh in a spray of crimson\.$/,
    thirdPerson: false,
    tags: ["damage", "impale", "prone"],
    length: 2.0,
  },
  //#endregion
  //#region Immense Harpy Eagle
  {
    user: "an immense harpy eagle",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An immense harpy eagle rips into you with his beak, tearing bloody chunks from your flesh\.$/,
    thirdPerson:
      /^An immense harpy eagle rips into (?<target>\w+?) with his beak, tearing off bloody chunks of flesh\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "an immense harpy eagle",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your ears begin to run with warm blood as an immense harpy eagle shrieks loudly and slashes at your throat with his poised talons\.$/,
    thirdPerson: false,
    tags: ["damage", "slashedthroat", "disrupted"],
    length: 2.0,
  },
  {
    user: "an immense harpy eagle",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Holding your arm in his vice-like talons, an immense harpy eagle splinters bone with brutal ease\.$/,
    thirdPerson: false,
    tags: ["damage", "numbedrightarm?", "parry arms"],
    length: 2.0,
  },
  //#endregion
  //#region Irate Mountain Goat
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An irate mountain goat rams into you, knocking you to the ground where your head connects with a loud 'crack'\.$/,
    thirdPerson:
      /^An irate mountain goat rams into (?<target>\w+?), knocking \w+ to the ground where her head connects with a loud 'crack'\.$/,
    tags: ["damage", "prone", "stupidity", "stuttering"],
    length: 2.0,
  },
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Spinning around, an irate mountain goat rears up on his front legs and kicks you hard in the stomach\.$/,
    thirdPerson:
      /^Spinning around, an irate mountain goat rears up on his front legs and kicks (?<target>\w+?) hard in the stomach\.$/,
    tags: ["damage", "stun"],
    length: 2.0,
  },
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaning his head down low, an irate mountain goat rushes forward into your leg\.$/,
    thirdPerson:
      /^Leaning his head down low, an irate mountain goat rushes forward into (?<target>\w+?)'s leg\.$/,
    tags: ["damage", "prone", "parry legs"],
    length: 2.0,
  },
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Charging quickly, an irate mountain goat rams you with his horns, sending you tumbling away\.$/,
    thirdPerson: false,
    tags: ["damage", "throw"],
    length: 2.0,
  },
  //#endregion
  //#region Fierce Black Panther
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Stalking around you, a fierce black panther glares with predatory eyes before pouncing, ravaging your flesh in a flurry of claws and fangs\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 1.7,
  },
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a deep growl, a fierce black panther rakes her razor-sharp claws across your skin\.$/,
    thirdPerson:
      /^With a deep growl, a fierce black panther rakes her razor-sharp claws across (?<target>\w+?)'s skin\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a roar of rage, a fierce black panther leaps forward and knocks you to the ground, ripping apart your flesh with \w+ claws\.$/,
    thirdPerson:
      /^With a roar of rage, a fierce black panther leaps forward and knocks (?<target>\w+?) to the ground, ripping apart \w+ flesh with claws\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
  },
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A fierce black panther roars mightily and sinks her teeth into your leg, gouging great wounds when she rips them out of your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "hamstring"],
    length: 2.0,
  },
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Muscles ripple beneath the coat of a fierce black panther as she lunges forward, driving her claws clean through your magical shield\.$/,
    thirdPerson: false,
    tags: ["damage", "raze"],
    length: 2.0,
  },
  //#endregion
  //#region Giant Fire Eel
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Digging its razor sharp teeth into your flesh, a giant fire eel rips a chunk of flesh from your body, cauterizing the wound with sizzling saliva\.$/,
    thirdPerson:
      /^Digging its razor sharp teeth into (?<target>\w+?)'s flesh, a giant fire eel rips a chunk of flesh from \w+ body, cauterizing \w+ wound with sizzling saliva\.$/,
    tags: ["damage", "burning"],
    length: 2.0,
  },
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your breath rushes out of your lungs in a gasp as a giant fire eel coils its red-hot body around you and squeezes\.$/,
    thirdPerson:
      /^(?<target>\w+?) gasps as a giant fire eel coils its red-hot body around \w+ and squeezes\.$/,
    tags: ["damage", "web", "burning"],
    length: 2.0,
  },
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A blinding sizzle of fiery light pulsates across the length of a giant fire eel as it darts at you, delivering a powerful blow that sets your skin aflame\.$/,
    thirdPerson: false,
    tags: ["damage", "dehydrated", "burning"],
    length: 2.0,
  },
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A giant fire eel glows red-hot before lashing out at the nearby water, sending a torrent of scalding water into your face\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.0,
  },
  //#region Frost-Rimed Panther
  {
    user: "a frost-rimed panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Stalking around you, a frost-rimed panther glares with predatory eyes before pouncing, ravaging your flesh in a flurry of ice-cold claws and fangs\.$/,
    thirdPerson:
      /^Stalking around (?<target>\w+?), a frost-rimed panther glares with predatory eyes before pouncing, ravaging \w+ flesh in a flurry of ice-cold claws and fangs\.$/,
    tags: ["damage", "icefisted"],
    length: 2.0,
  },
  {
    user: "a frost-rimed panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a deep growl, a frost-rimed panther rakes his razor-sharp claws across your skin\.$/,
    thirdPerson:
      /^With a deep growl, a frost-rimed panther rakes his razor-sharp claws across (?<target>\w+?)'s skin\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a frost-rimed panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sinking his teeth into your leg, a frost-rimed panther rips open an artery, spilling great gouts of warm blood\.$/,
    thirdPerson:
      /^Sinking his teeth into (?<target>\w+?)'s leg, a frost-rimed panther rips open an artery, spilling great gouts of warm blood\.$/,
    tags: ["damage", "hypothermia"],
    length: 2.0,
  },
  {
    user: "a frost-rimed panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^His snow-white fur gleaming with the motion, a frost-rimed panther lunges at you and drives his frigid claws into your chest\.$/,
    thirdPerson:
      /^His snow-white fur gleaming with the motion, a frost-rimed panther lunges at (?<target>\w+?) before driving frigid claws into \w+ chest\.$/,
    tags: ["damage", "caloric???"],
    length: 2.0,
  },
  {
    user: "a frost-rimed panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Muscles ripple beneath the coat of a frost-rimed panther as he lunges forward, driving his claws clean through your magical shield\.$/,
    thirdPerson: false,
    tags: ["damage", "raze"],
    length: 2.0,
  },
  //#endregion
  //#region Slate-grey Mountain Hawk
  {
    user: "a slate-grey mountain hawk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Razor-sharp talons carve bloody rents in your chest as a slate-grey mountain hawk descends upon you\.$/,
    thirdPerson:
      /^Razor-sharp talons carve bloody rents in (?<target>\w+?)'s chest as a slate-grey mountain hawk descends up \w+\.$/,
    tags: ["damage", "healthleech"],
    length: 2.0,
    id: "slateGreyMountainHawk-healthleech",
  },
  {
    user: "a slate-grey mountain hawk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a shrill shriek, a slate-grey mountain hawk plunges his talons into your throat, slicing it open in a spray of scarlet\.$/,
    thirdPerson:
      /^With a shrill shriek, a slate-grey mountain hawk plunges his talons into (?<target>\w+?)'s throat, slicing it open in a spray of scarlet\.$/,
    tags: ["damage", "slashedthroat"],
    length: 2.0,
  },
  {
    user: "a slate-grey mountain hawk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sweeping down from the skies, a slate-grey mountain hawk rakes his talons across your eyes\.$/,
    thirdPerson:
      /^Sweeping down from the skies, a slate-grey mountain hawk rakes his talons across (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "blackout"],
    length: 2.0,
  },
  //#endregion
  //#region Ice-Fanged Snow Leopard
  {
    user: "an ice-fanged snow leopard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^White fur glistens like fresh-fallen snow as an ice-fanged snow leopard pounces across the terrain, ravaging your flesh in a flurry of claws and scarlet blood\.$/,
    thirdPerson:
      /^Sweeping down from the skies, a slate-grey mountain hawk rakes his talons across (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "haemophilia"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "an ice-fanged snow leopard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Pouncing on you from behind, an ice-fanged snow leopard sinks his teeth into your back, snapping the bone of your spine with an audible crack\.$/,
    thirdPerson:
      /^Sweeping down from the skies, a slate-grey mountain hawk rakes his talons across (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "paralysis", "lethargy", "weariness"],
    length: 2.0,
  },
  {
    user: "an ice-fanged snow leopard",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rearing up on his hind legs, an ice-fanged snow leopard roars ferociously before sinking his frigid teeth into your throat\.$/,
    thirdPerson:
      /^Sweeping down from the skies, a slate-grey mountain hawk rakes his talons across (?<target>\w+?)'s eyes\.$/,
    tags: ["damage", "haemophilia", "asthma"],
    length: 2.0,
  },
  //#endregion
  //#region Ravening Bainligor
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Bloody rents open in your flesh as a ravening bainligor rakes you with his sharp claws\.$/,
    thirdPerson:
      /^Bloody rents open in (?<target>\w+?)'s flesh as a ravening bainligor rakes \w+ with sharp claws\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Hellish screeches echo from a ravening bainligor before he sinks his jaws into your neck, ripping out your throat in a bloody mess\.$/,
    thirdPerson:
      /^Hellish screeches echo from a ravening bainligor before he sinks his jaws into (?<target>\w+?)'s neck, ripping out \w+ throat in a bloody mess\.$/,
    tags: ["damage", "slashedthroat"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rushing wildly towards you, a ravening bainligor tears apart flesh and muscle with his sharp claws\.$/,
    thirdPerson:
      /^Rushing wildly towards (?<target>\w+?), a ravening bainligor tears apart \w+ flesh and muscle with sharp claws\.$/,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Opening his maw, a ravening bainligor screeches with ungodly hunger, the ear-piercing sound spiking shards of pain in your mind\.$/,
    thirdPerson: false,
    tags: ["damage", "confusion", "dizziness", "disrupted"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Thirsting for blood, a ravening bainligor slices his claws clean through your magical shield, pushing on with relentless intent\.$/,
    thirdPerson: false,
    tags: ["raze"],
    length: 2.0,
  },
  //#endregion
  //#region Gohlbrorn
  {
    user: "a massive gohlbrorn",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With an ear-splitting roar, a massive gohlbrorn knocks you to the ground before stomping upon your chest, collapsing your lungs and shattering ribs with his titanic weight\.$/,
    thirdPerson:
      /^With an ear-splitting roar, a massive gohlbrorn knocks (?<target>\w+?) to the ground before stomping upon \w+ chest, collapsing both lungs and shattering \w+ ribs with titanic force\.$/,
    tags: ["damage", "prone", "crackedribs", "asthma"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "a massive gohlbrorn",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rumbling the ground with his colossal bulk, a massive gohlbrorn tramples over you\.$/,
    thirdPerson:
      /^Rumbling the ground with his colossal bulk, a massive gohlbrorn tramples over (?<target>\w+?)\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a massive gohlbrorn",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Swinging his club-like tail towards your head, a massive gohlbrorn connects in a brutal impact, nearly removing your skull entirely\.$/,
    thirdPerson:
      /^Swinging his club-like tail towards (?<target>\w+?)'s head, a massive gohlbrorn connects in a brutal impact, nearly removing \w+ skull entirely\.$/,
    tags: ["damage", "concussion", "stupidity", "impatience", "stun"],
    length: 2.0,
  },
  //#endregion
  //#region Silver Spider
  {
    user: "a silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your throat swells up and your body locks as a silver spider injects you with a potent dose of paralysing venom\.$/,
    thirdPerson:
      /^(?<target>\w+?) grasps at \w+ throat before locking in place as a silver spider sinks its fangs into \w+\.$/,
    tags: ["damage", "paralysis", "asthma"],
    length: 2.0,
  },
  {
    user: "a silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A silver spider bites you with sharp fangs, injecting a numbing venom that leaves your muscles tingling\.$/,
    thirdPerson:
      /^A silver spider bites (?<target>\w+?) with sharp fangs, injecting \w+ with a numbing venom\.$/,
    tags: ["damage", "clumsiness", "weariness"],
    length: 2.0,
  },
  {
    user: "a silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Pain blossoms behind your eyes as a silver spider sinks its fangs into your body, muddling your thoughts with a potent dose of venom\.$/,
    thirdPerson:
      /^(?<target>\w+?) blinks \w+ eyes rapidly as a silver spider sinks its fangs into \w+ body, injecting \w+ with a potent venom\.$/,
    tags: ["damage", "impatience", "MENTAL??"],
    length: 2.0,
  },
  {
    user: "a silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your skin begins to secrete an irritating, foul oil as a silver spider bites into you with venomous fangs\.$/,
    thirdPerson:
      /^(?<target>\w+?) scratches at \w+ skin as a silver spider bites into \w+ with venomous fangs\.$/,
    tags: ["damage", "itching", "slickness"],
    length: 2.0,
  },
  {
    user: "a silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a harsh hissing sound, a silver spider sprays a tangle of silvery webbing over your body\.$/,
    thirdPerson:
      /^With a harsh hissing sound, a silver spider sprays a tangle of silvery webbing over (?<target>\w+?)\.$/,
    tags: ["web"],
    length: 2.0,
  },
  //#endregion
  //#region Silver Spiderling
  {
    user: "a silver spiderling",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Skittering up your leg, a silver spiderling pierces your thigh with its fangs, injecting you with a potent dose of nocuous venom\.$/,
    thirdPerson:
      /^A silver spiderling skitters up (?<target>\w+?)'s leg, biting \w+ thigh and injecting \w+ with venom\.$/,
    tags: ["damage", "loki"],
    length: 2.0,
  },
  {
    user: "a silver spiderling",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A silver spiderling crawls over to you and bites into your flesh, sending toxic venom flooding through your veins\.$/,
    thirdPerson:
      /^A silver spiderling crawls over and bites (?<target>\w+?), injecting \w+ with a potent dose of venom\.$/,
    tags: ["damage", "loki"],
    length: 2.0,
  },
  //#endregion
  //#region Colossal Silver Spider
  {
    user: "a colossal silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    //A colossal silver spider sinks her fangs into your flesh, injecting a soothing venom that lulls you away from the pain. //peace, indifference
    //A colossal silver spider sinks her fangs into your flesh, injecting a vicious venom that wracks both mind and body. //manaleech, healthleech
    //A colossal silver spider sinks her fangs into your flesh, injecting a nocuous venom that burns at your stomach and intestines. //anorexia, loki
    firstPerson:
      /^A colossal silver spider sinks her fangs into your flesh, injecting (.+)\.$/,
    thirdPerson:
      /^A colossal silver spider sinks her fangs into (?<target>\w+?)'s flesh, injecting \w+ with a potent dose of venom\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      if (
        args.args[1] == "a soothing venom that lulls you away from the pain"
      ) {
        args.tags.push("peace", "indifference");
      } else if (
        args.args[1] == "a vicious venom that wracks both mind and body"
      ) {
        args.tags.push("manaleech", "healthleech");
      } else if (
        args.args[1] ==
        "a nocuous venom that burns at your stomach and intestines"
      ) {
        args.tags.push("anorexia", "loki");
      }
    },
  },
  {
    user: "a colossal silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A colossal silver spider lunges in your direction, stabbing you through the abdomen with one of her long legs\.$/,
    thirdPerson: false,
    tags: ["damage", "impaled", "nausea", "prone"],
    length: 2.0,
  },
  {
    user: "a colossal silver spider",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^From the spinnerets of a colossal silver spider bursts a webbing of steel-hard silk, entangling you in a sticky mess\.$/,
    thirdPerson: false,
    tags: ["damage", "web"],
    length: 2.0,
  },
  //#endregion
  //#region Hulking Cave bear
  {
    user: "a hulking cave bear",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Lunging forward in a surge of fur and muscle, a hulking cave bear swipes his claws into your leg, tearing apart flesh and bone\.$/,
    thirdPerson:
      /^Lunging forward in a surge of fur and muscle, a hulking cave bear swipes his claws into (?<target>\w+?)'s leg, tearing apart flesh and bone\.$/,
    tags: ["damage", "prone", "parry legs"],
    length: 2.0,
  },
  {
    user: "a hulking cave bear",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rotten effluvia spills from the slavering jaws of a hulking cave bear as he roars and sinks his teeth into your arm, infecting your wounds with foetid saliva\.$/,
    thirdPerson:
      /^Rotten effluvia spills from the slavering jaws of a hulking cave bear as he roars and sinks his teeth into (?<target>\w+?)'s arm\.$/,
    tags: ["damage", "loki", "parry arms"],
    length: 2.0,
  },
  {
    user: "a hulking cave bear",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a bone-chilling roar, a hulking cave bear stands up tall and wraps its muscled arms around you, constricting you and allowing him to lock its strong jaws around your skull\.$/,
    thirdPerson: false,
    tags: ["damage", "damagedhead"],
    length: 2.0,
  },

  //A predatory alligator brings his jaws down upon your left arm, bone white teeth digging into your flesh as the predator clamps on with tremendous force.
  //A predatory alligator moves into a savage death roll with his jaws clamped upon your right leg, wrenching your leg from its socket in a whirling flurry of raw muscle. // limb damage?
  //Surging forward with savage ferocity, a predatory alligator slams his body into your right side, throwing you aside in a display of raw power. //numbedrightarm
  //With a dreadful growl, a predatory alligator whips his tail around and into your skull, sending you rolling with the force of the blow. // prone, skullfractures, nausea
  //With brutal ferocity, a predatory alligator dives beneath the murky lake, dragging you below the stagnant water as he surges away.
  //A predatory alligator sinks his teeth into your flesh, tearing loose a bloody hunk in a visceral spray of dark red.
  //#endregion
  //#region Feral Varkha
  {
    user: "a feral varkha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sinking his teeth into your shoulder, a feral varkha rips out a chunk of flesh, leaving your wounds to fester and tingle\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 2.0,
  },
  {
    user: "a feral varkha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Lunging forward with a chilling screech, a feral varkha plunges his claws into your abdomen\.$/,
    thirdPerson:
      /^Lunging forward with a chilling screech, a feral varkha plunges his claws into (?<target>\w+?)'s abdomen\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      if (
        nextLine("Your blood gushes freely as he slashes into your spleen.")
      ) {
        args.tags.push("haemophilia");
      } else if (
        nextLine(
          "Noxious bile floods your system as he wraps his talons around your liver and crushes."
        )
      ) {
        args.tags.push("nausea");
      } else if (
        nextLine(
          "Gastric acid burns away at your insides as he rips apart stomach and intenstine."
        )
      ) {
        args.tags.push("anorexia");
      } else if (
        nextLine(
          "Driving past your organs, he grips onto your spine and snaps it with a jolt of sharp pain."
        )
      ) {
        args.tags.push("paralysis");
      }
      ///^Your blood gushes freely as he slashes into your spleen\.$/, haemophilia
      //Noxious bile floods your system as he wraps his talons around your liver and crushes. nausea
      //Gastric acid burns away at your insides as he rips apart stomach and intenstine. anorexia
      //Driving past your organs, he grips onto your spine and snaps it with a jolt of sharp pain. paralysis
    },
  },
  {
    user: "a feral varkha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson: false,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 2.0,
  },
  //#endregion
  //#region Fungal Toad
  {
    user: "a fungal toad",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A fungal toad shudders, coaxing the fungi upon her back to emit a cloud of umber-hued spores into the air\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 2.0,
  },
  {
    user: "a fungal toad",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaping with her muscled hindlegs, a fungal toad slams her bulk into you\.$/,
    thirdPerson:
      /^Leaping with her muscled hindlegs, a fungal toad slams her bulk into (?<target>\w+?)\.$/,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a fungal toad",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a resonant croak, a fungal toad spews a breath of nocuous spores in your direction\.$/,
    //You double over as the spores invade your lungs, retching up blood and bile.
    thirdPerson:
      /^With a resonant croak, a fungal toad spews a breath of nocuous spores in (?<target>\w+?)'s direction, causing \w+ to retch up blood and bile\.$/,
    tags: ["damage", "asthma", "loki"],
    length: 2.0,
  },
  //#endregion
  //#region Massive Swamp Python
  {
    user: "a massive swamp python",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Coiling around your leg and dragging you down, a massive swamp python crushes bone with her muscled bulk\.$/,
    thirdPerson:
      /^Coiling around (?<target>\w+?)'s leg and dragging \w+ down, a massive swamp python crushes bone with muscled force\.$/,
    tags: ["damage", "prone"],
    length: 3.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a massive swamp python",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A massive swamp python darts forwards and sinks her teeth into your throat, tearing them free in a spray of warm blood\.$/,
    thirdPerson: false,
    tags: ["damage", "slashedthroat", "laceratedthroat"],
    length: 3.0,
  },
  {
    user: "a massive swamp python",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Slithering around your body, a massive swamp python constricts your torso and denies you breath\.$/,
    thirdPerson: false,
    tags: ["damage", "web", "asthma"],
    length: 3.0,
  },
  //#endregion
  //#region School of Bloodthirsty Piranha
  {
    user: "a school of bloodthirsty piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A school of bloodthirsty piranha swarms viciously around you, their teeth ripping hungrily into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "haemophilia"],
    length: 3.0,
  },
  {
    user: "a school of bloodthirsty piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sharp teeth dig into your skin as a vicious piranha jumps out of the water and bites you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a school of bloodthirsty piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaping from the school, a vicious piranha sinks its teeth into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 1.4,
  },
  {
    user: "a school of bloodthirsty piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your blood runs freely as a vicious piranha swims past and slices into you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  //#endregion
];

export default lupineHuntingGrounds;
