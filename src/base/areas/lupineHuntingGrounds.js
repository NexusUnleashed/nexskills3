// GMCP areaid 417

import { checkSensitivity, checkRandomLimbs } from "../utilities";

// Crowdmap areaid 490
const lupineHuntingGrounds = [
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
      /^Rising up, a wild centaur snaps his legs out and kicks you, throwing you to the ground\.$/,
    thirdPerson:
      /^Rising up, a wild centaur snaps his legs out and kicks (?<target>\w+?), throwing \w+ to the ground\.$/,
    tags: ["damage", "prone"],
    length: 2.0,
  },
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
    tags: ["damage", "burning"],
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
    thirdPerson: false,
    tags: ["damage", "dehydrated/scaled/burning?"],
    length: 2.0,
  },
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
  {
    user: "a fearsome lion",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A fearsome lion rakes his claws down your face, ripping through flesh and bone with exceptional ease\.$/,
    thirdPerson: false,
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
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
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
    thirdPerson: false,
    tags: ["damage", "impatience", "mental"],
    length: 2.0,
  },
  {
    user: "a shadowy basilisk",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your muscles begin to slowly petrify, locking in place as a shadowy basilisk stares into your eyes\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 2.0,
  },
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
    thirdPerson: false,
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
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^An irate mountain goat rams into you, knocking you to the ground where your head connects with a loud 'crack'\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "stupidity", "stuttering"],
    length: 2.0,
  },
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Spinning around, an irate mountain goat rears up on his front legs and kicks you hard in the stomach\.$/,
    thirdPerson: false,
    tags: ["damage", "stun"],
    length: 2.0,
  },
  {
    user: "an irate mountain goat",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaning his head down low, an irate mountain goat rushes forward into your leg\.$/,
    thirdPerson: false,
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
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a fierce black panther",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With a roar of rage, a fierce black panther leaps forward and knocks you to the ground, ripping apart your flesh with his claws\.$/,
    thirdPerson: false,
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
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Digging its razor sharp teeth into your flesh, a giant fire eel rips a chunk of flesh from your body, cauterizing the wound with sizzling saliva\.$/,
    thirdPerson: false,
    tags: ["damage", "burning"],
    length: 2.0,
  },
  {
    user: "a giant fire eel",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your breath rushes out of your lungs in a gasp as a giant fire eel coils its red-hot body around you and squeezes\.$/,
    thirdPerson: false,
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
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Bloody rents open in your flesh as a ravening bainligor rakes you with his sharp claws\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Hellish screeches echo from a ravening bainligor before he sinks his jaws into your neck, ripping out your throat in a bloody mess\.$/,
    thirdPerson: false,
    tags: ["damage", "slashedthroat"],
    length: 2.0,
  },
  {
    user: "a ravening bainligor",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Rushing wildly towards you, a ravening bainligor tears apart flesh and muscle with his sharp claws\.$/,
    thirdPerson: false,
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
  {
    user: "a massive gohlbrorn",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^With an ear-splitting roar, a massive gohlbrorn knocks you to the ground before stomping upon your chest, collapsing your lungs and shattering ribs with his titanic weight\.$/,
    thirdPerson: false,
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
    thirdPerson: false,
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
    thirdPerson: false,
    tags: ["damage", "concussion", "stupidity", "impatience", "stun"],
    length: 2.0,
  },
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
    thirdPerson: false,
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
    thirdPerson: false,
    tags: ["damage", "asthma", "loki"],
    length: 2.0,
  },
  {
    user: "a massive swamp python",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Coiling around your leg and dragging you down, a massive swamp python crushes bone with her muscled bulk\.$/,
    thirdPerson: false,
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
  {
    user: "a school of bloodthirst piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^A school of bloodthirsty piranha swarms viciously around you, their teeth ripping hungrily into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage", "haemophilia"],
    length: 3.0,
  },
  {
    user: "a school of bloodthirst piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Sharp teeth dig into your skin as a vicious piranha jumps out of the water and bites you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
  {
    user: "a school of bloodthirst piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Leaping from the school, a vicious piranha sinks its teeth into your flesh\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 1.4,
  },
  {
    user: "a school of bloodthirst piranha",
    areaId: [417],
    areaName: "the Lupine Hunting Grounds",
    firstPerson:
      /^Your blood runs freely as a vicious piranha swims past and slices into you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 3.0,
  },
];

export default lupineHuntingGrounds;
