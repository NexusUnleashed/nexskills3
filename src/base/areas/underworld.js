import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";

const underworld = [
  //#region Lich
  {
    user: "a lich of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A lich of Nemuritoaure turns its eyeless gaze upon you, shrieking maniacally such that all your thoughts are turned to dread horror\.$/,
    thirdPerson:
      /^A lich of Nemuritoaure turns its eyeless gaze upon (?<target>\w+?), who wilts beneath the onslaught of some malign power\.$/,
    tags: ["damage", "confusion", "stupidity", "epilepsy", "fear"],
    length: 2.0,
  },
  {
    user: "a lich of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Robes billowing wide as it rises, a lich of Nemuritoaure hisses a sibilant incantation and instantly your flesh warps and withers beyond recognition\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "slickness", "clumsiness"],
    length: 2.0,
  },
  {
    user: "a lich of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    //Shrieking with the fury of the grave, a lich of Nemuritoaure hovers determinedly as it readies another attack.
    //A sickly rattling noise drowns out all else as a lich of Nemuritoaure raises a rotten hand, sending a wave of merciless cold to assault you.
    firstPerson:
      /^A sickly rattling noise drowns out all else as a lich of Nemuritoaure raises a rotten hand, sending a wave of merciless cold to assault you\.$/,
    thirdPerson: false,
    tags: ["damage", "AGUE AGUE AGUE?", "AOE"],
    length: 2.0,
    reaction(args) {
      // 1 limb
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Vampire
  {
    user: "a nascent vampire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Shadow and blood entwine about the hand of a nascent vampire, giving shape to a fearsome ethereal scythe moments before its wicked blade descends upon you, rending your mind and setting fire to your skull even as it passes harmlessly through the rest of your body\.$/,
    thirdPerson: false,
    tags: ["damage", "impatience", "stupidity"],
    length: 3.0,
  },
  {
    user: "a nascent vampire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Scythe and dagger coalesce in a nascent vampire's hands as he hurls himself forward, your every motion and manoeuvre utterly preempted by an unnatural swiftness as his cuts and slashes send spasms of agony through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 3.0,
  },
  {
    user: "a nascent vampire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Doubling over with frame-wracking spasms, the light of reason abruptly vanishes from a nascent vampire's eyes\. A moment later, he madly charges you, headbutting you with such force as to knock the breath off your chest and your feet off the ground before desperately sinking his fangs into you and feeding on your blood\.$/,
    thirdPerson: false,
    tags: ["damage", "haemophilia", "heal"],
    length: 3.0,
  },
  //#endregion
  //#region Scorpion
  {
    user: "a deadly obsidian scorpion",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Hissing in anger, a deadly obsidian scorpion vomits a stream of acid onto you, and your skin begins to melt under the substance\.$/,
    thirdPerson: false,
    tags: ["damage", "slickness"],
    length: 3.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a deadly obsidian scorpion",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A deadly obsidian scorpion stampedes over you, knocking you to the ground and crushing your legs underneath his bulk\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 3.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a deadly obsidian scorpion",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^The massive tail of a deadly obsidian scorpion swipes down in a blur, plunging deep into your stomach and injecting you with poison\. A moment later, a second, soulbleed-formed stinger slams into place alongside the first\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 3.5,
  },
  {
    user: "a deadly obsidian scorpion",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A deadly obsidian scorpion whirls around and slams his tail into your torso, and ribs crack from the impact\.$/,
    thirdPerson: false,
    tags: ["damage", "crackedribs"],
    length: 3.5,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
  //#region Soldier of Osterrych
  {
    user: "a soldier of Osterrych",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    //Falling into silence for a fraction of a second, a soldier of Osterrych's gaze falls upon you with ominous intent.
    firstPerson:
      /^In response to a soldier of Osterrych's whistled tune, a skeletal bird starts fluttering about you, distracting you long enough for her to skewer you with a ghostly rapier coalesced in her hand\.$/,
    thirdPerson: false,
    //Falling into silence for a fraction of a second, a soldier of Osterrych's gaze falls upon (Poxie) with ominous intent.
    //Leaping back and turning her attention to her instrument, a soldier of Osterrych strums an enchantingly foreign melody.
    //A soldier of Osterrych attempts to transfix (Poxie), but succeeds only in curing her blindness.
    tags: ["damage", "paralysis"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a soldier of Osterrych",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Leaping back and turning her attention to her instrument, a soldier of Osterrych strums an enchantingly foreign melody\.$/,
    thirdPerson: false,
    tags: ["damage", "loki"],
    length: 2.5,
    reaction(args) {
      checkTransfix(args);
    },
  },
  {
    user: "a soldier of Osterrych",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Grabbing her spectral mandolin by the neck, a soldier of Osterrych runs up to you, crouching moments before delivering a terrible upswing that sends you flying upward\.$/,
    thirdPerson:
      /^Grabbing her spectral mandolin by the neck, a soldier of Osterrych runs up to (?<target>\w+?), crouching moments before delivering a terrible upswing that sends \w+ flying upwar\.$/,
    tags: ["damage", "prone"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Soldier of Nemuritoaure
  {
    user: "a soldier of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Tearing a half-buried spear from his body with the sickening, scraping sound of steel on bone, a soldier of Nemuritoaure immediately lashes out and skewers you with it\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "loki"],
    length: 2.0,
  },
  {
    user: "a soldier of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A soldier of Nemuritoaure looses a shrill, unpleasant cry that is promptly answered by others in the vicinity\.$/,
    thirdPerson: false,
    tags: ["damage", "blackout"],
    length: 2.0,
  },
  {
    user: "a soldier of Nemuritoaure",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^First bashing you with his splintered shield, a soldier of Nemuritoaure thrusts his weathered longsword between the cracks of your armour and deep into the unguarded softness beneath\.$/,
    thirdPerson: false,
    tags: ["damage", "undeaf", "sensitivity", "STUN"],
    length: 2.0,
  },
  //#endregion
  //#region Colonel
  {
    user: "an undead colonel",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Feinting with the tip of his spear, an undead colonel closes in on you and rams his knee against your mid-section before bringing his staff crashing down against the side of your head\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity", "nausea"],
    length: 2.5,
  },
  {
    user: "an undead colonel",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Combining unarmed and spear techniques, an undead colonel swiftly alternates between jabs and kicks aimed at your weak points, using the motions of your own body against you before finally catching you off-balance and impaling you\.$/,
    thirdPerson: false,
    tags: ["damage", "confusion", "weariness", "dizziness"],
    length: 0,
  },
  {
    user: "an undead colonel",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^In a demonstration of breathtaking speed, an undead colonel thrusts his spear faster than the eye can follow, cutting and slicing you numerous times before you can clear out of his reach\.$/,
    thirdPerson: false,
    tags: ["damage", "fear"],
    length: 0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
  //#region Veteran Death Knight commander
  {
    user: "a veteran Death Knight commander",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Stepping in close, a veteran Death Knight commander weaves around your defences with an agility that belies her size. Missing not a moment, her gauntleted fists find their mark, each bone-crunching blow threatening to grind your innards to paste\.$/,
    thirdPerson: false,
    tags: ["damage", "crackedribs"],
    length: 0,
    reaction(args) {
      checkRandomLimbs(args);
      checkSensitivity(args);
    },
  },
  {
    user: "a veteran Death Knight commander",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Striding towards you with a monstrous claymore in each hand, a veteran Death Knight commander delivers an unforgiving series of devastating slashes with a consummate, inescapable swiftness\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "dizziness"],
    length: 0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "a veteran Death Knight commander",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Foregoing one of her monstrous blades, a veteran Death Knight commander's gauntleted hand swiftly closes about your skull with a vice-like grip, holding you in place while she brutally and repeatedly skewers you, before finally hurling you away\.$/,
    thirdPerson: false,
    tags: ["damage", "Parry Head", "prone"],
    length: 0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a veteran Death Knight commander",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A massive, translucent hammer rises out of a veteran Death Knight commander's tattoo and smashes your magical shield\.$/,
    thirdPerson: false,
    tags: ["damage", "RAZE"],
    length: 0,
  },
  //#endregion
  //#region Steel-encased Death Knight
  //Foregoing one of her monstrous blades, a veteran Death Knight commander's gauntleted hand swiftly closes about (Poxie)'s skull with a vice-like grip, holding her in place while she brutally and repeatedly skewers her, before finally hurling her away.
  {
    user: "a steel-encased Death Knight",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Rearing back and unleashing a roar, a steel-encased Death Knight slams his gauntlet into your arm, crushing the bone painfully into your ribs and sending you to the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "crackedribs", "prone"],
    length: 0,
    reaction(args) {
      checkRandomLimbs(args);
      checkSensitivity(args);
    },
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A torrent of soulbleed abruptly forms into a blade in a steel-encased Death Knight's hands, and he violently slashes it along your throat\.$/,
    thirdPerson: false,
    tags: ["damage", "lasceratedthroat"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A steel-encased Death Knight abruptly disappears in a flash of red, and a powerful grip wraps around your forehead and slams the back of your head into the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "damagedhead", "prone"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^A steel-encased Death Knight punches a fist toward you, and a concussive blast of soulbleed knocks you off your feet\. Within moments, he looms over you, and crushes your torso with a savage stomp\.$/,
    thirdPerson: false,
    tags: ["damage", "crackedribs", "prone"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Raising an armour-encased boot, a steel-encased Death Knight slams it down at an angle against the side of your knee, snapping it easily\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //#endregion
  //#region Nautilus
  {
    user: "an undead nautilus",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^An eerily calming noise emanates from inside the shell of an undead nautilus, and your mind becomes transfixed by the soothing melody\. However, not all feels quite right\.\.\.$/,
    thirdPerson: false,
    tags: ["damage", "hypochondria", "dizziness"],
    length: 2.0,
    reaction(args) {
      checkTransfix(args);
    },
  },
  {
    user: "an undead nautilus",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Colours explode along the intricate linings of an undead nautilus's shell, and the transfixing sight overloads your mind\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity", "epilepsy"],
    length: 2.0,
    reaction(args) {
      checkTransfix(args);
    },
  },
  {
    user: "an undead nautilus",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^An undead nautilus's attention focusses upon you, and an incredible psychic power surges through your thoughts, battering your mind mercilessly\.$/,
    thirdPerson: false,
    tags: ["damage", "epilepsy", "stupidity", "impatience"],
    length: 2.0,
  },
  {
    user: "an undead nautilus",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^The swirls of an undead nautilus's shell sway hypnotically, transfixing your mind. The patterns abruptly turn diabolical, and madness overtakes your mind\.$/,
    thirdPerson: false,
    tags: ["damage", "hellsight", "paranoia"],
    length: 2.0,
  },
  //#endregion
  //#region Undead Squire
  {
    user: "an undead squire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Wielding his staff in both hands, an undead squire takes advantage of its superior reach to punish you with a series of powerful, bone-shattering blows\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  //^Standing stock-still for a moment, an undead squire approaches you with his pennon held defensively before himself\.$/,
  {
    user: "an undead squire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Noticing a momentary lapse in your guard, an undead squire puts his training to test, jamming his rusty shortsword between your ribs and carving you up\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "crackedribs"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  {
    user: "an undead squire",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Taking a clattering step back, an undead squire shifts his grip on his staff, holding it as if it were a spear\. Evincing a surprising amount of coordination, the undead takes impulse, aiming it squarely at your chest before delivering a throw of such swiftness and strength as to knock you flat and nearly impale you upon the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "nausea", "concussion", "prone"],
    length: 2.0,
  },
  //#endregion
  //#region Grotesque Experiment
  {
    user: "a grotesque experiment",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^With a guttural roar rumbling from deep within, a grotesque experiment's arms lash wildly from all angles with swords wielded as if they were clubs, the numerous blows threatening to overwhelm you\.$/,
    thirdPerson: false,
    tags: ["damage"],
    length: 2.0,
  },
  {
    user: "a grotesque experiment",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Scuttling at an impressive speed towards you, a grotesque experiment bashes you with its disgusting, sac-like head, dousing you with a disgusting, oozing fluid that sets your skin and blood alike alight\.$/,
    thirdPerson: false,
    tags: ["damage", "blackout", "loki"],
    length: 2.0,
  },
  {
    user: "a grotesque experiment",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Tossing you upon the ground with a backhand swing from one of its numerous arms, a grotesque experiment moves wildly about you, the many blades raining upon you with deadly intent, very nearly slicing you to ribbons\.$/,
    thirdPerson: false,
    tags: ["damage", "prone", "Parry Leg"],
    length: 2.0,
  },
  //#endregion
  //#region Disfigured Ghost
  {
    user: "a disfigured ghost",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^With a startlingly icy grip, a disfigured ghost latches onto you, screaming for help with nearly mindless horror as it once more relives its monstrous torture\.$/,
    thirdPerson: false,
    tags: ["damage", "fear", "AGUE AGUE AGUE?"],
    length: 2.0,
  },
  {
    user: "a disfigured ghost",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^An otherwordly chill ripples up and down your spine as a disfigured ghost flows into your body and attempts to take control of it\.$/,
    thirdPerson: false,
    tags: ["damage", "recklessness"],
    length: 2.0,
  },
  {
    user: "a disfigured ghost",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^You feel yourself sinking into the black, endless pits of a disfigured ghost's eyeless sockets, momentarily reliving in your own flesh the anguish of its suffering\.$/,
    thirdPerson: false,
    tags: ["damage", "nausea", "masochism"],
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
  //#region Cowled resarcher
  {
    user: "a cowled researcher",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Holding his hand out palm up, a cowled researcher blows a fine powder onto you, and your skin begins to burn\.$/,
    thirdPerson: false,
    tags: ["damage", "darkshade", "nausea", "slickness"],
    length: 2.0,
  },
  {
    user: "a cowled researcher",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Grabbing a needle from within his cowl, a cowled researcher jabs it quickly into a vein in your arm, and your body grows weak and hungry\.$/,
    thirdPerson: false,
    tags: ["damage", "addiction", "lethargy"],
    length: 2.0,
  },
  {
    user: "a cowled researcher",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^Recognising your lethargy, a cowled researcher approaches you with scalpel in hand and begins carving into your stomach, inducing heavy bleeding\.$/,
    thirdPerson: false,
    tags: ["damage", "haemophilia", "brokentorso"],
    length: 2.0,
  },
  {
    user: "a cowled researcher",
    areaId: [163, 281, 166, 323, 320],
    areaName: "the Underworld",
    firstPerson:
      /^With a loud fizzing noise, green smoke rises from the ground to envelop you, wracking your body with agony\.$/,
    thirdPerson: false,
    tags: ["damage", "asthma", "loki"], //loki, undeaf, asthma
    length: 2.0,
    reaction(args) {
      checkSensitivity(args);
    },
  },
  //#endregion
];

export default underworld;
