import {
  checkSensitivity,
  checkRandomLimbs,
  checkTransfix,
} from "../utilities";

const underworld = [
  {
    user: "a lich of Nemuritoaure",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^A lich of Nemuritoaure turns its eyeless gaze upon you, shrieking maniacally such that all your thoughts are turned to dread horror\.$/,
    thirdPerson: false,
    tags: ["damage", "confusion", "stupidity", "epilepsy", "fear"],
    length: 2.0,
  },
  {
    user: "a lich of Nemuritoaure",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Robes billowing wide as it rises, a lich of Nemuritoaure hisses a sibilant incantation and instantly your flesh warps and withers beyond recognition\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis", "slickness", "clumsiness"],
    length: 2.0,
  },
  {
    user: "a lich of Nemuritoaure",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^A sickly rattling noise drowns out all else as a lich of Nemuritoaure raises a rotten hand, sending a wave of merciless cold to assault you\.$/,
    thirdPerson: false,
    tags: ["damage", "AGUE AGUE AGUE?"],
    length: 2.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a nascent vampire",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Shadow and blood entwine about the hand of a nascent vampire, giving shape to a fearsome ethereal scythe moments before its wicked blade descends upon you, rending your mind and setting fire to your skull even as it passes harmlessly through the rest of your body\.$/,
    thirdPerson: false,
    tags: ["damage", "impatience", "stupidity"],
    length: 3.0,
  },
  {
    user: "a nascent vampire",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Scythe and dagger coalesce in a nascent vampire's hands as he hurls himself forward, your every motion and manoeuvre utterly preempted by an unnatural swiftness as his cuts and slashes send spasms of agony through your body\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 3.0,
  },
  {
    user: "a nascent vampire",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Doubling over with frame-wracking spasms, the light of reason abruptly vanishes from a nascent vampire's eyes\. A moment later, he madly charges you, headbutting you with such force as to knock the breath off your chest and your feet off the ground before desperately sinking his fangs into you and feeding on your blood\.$/,
    thirdPerson: false,
    tags: ["damage", "haemophilia", "heal"],
    length: 3.0,
  },
  {
    user: "a deadly obsidian scorpion",
    areaId: [163],
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
    areaId: [163],
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
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^The massive tail of a deadly obsidian scorpion swipes down in a blur, plunging deep into your stomach and injecting you with poison\. A moment later, a second, soulbleed-formed stinger slams into place alongside the first\.$/,
    thirdPerson: false,
    tags: ["damage", "loki", "loki"],
    length: 3.5,
  },
  {
    user: "a deadly obsidian scorpion",
    areaId: [163],
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
  {
    user: "a soldier of Osterrych",
    areaId: [163],
    areaName: "the Underworld",
    //Falling into silence for a fraction of a second, a soldier of Osterrych's gaze falls upon you with ominous intent.
    firstPerson:
      /^In response to a soldier of Osterrych's whistled tune, a skeletal bird starts fluttering about you, distracting you long enough for her to skewer you with a ghostly rapier coalesced in her hand\.$/,
    thirdPerson: false,
    tags: ["damage", "paralysis"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "a soldier of Osterrych",
    areaId: [163],
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
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Grabbing her spectral mandolin by the neck, a soldier of Osterrych runs up to you, crouching moments before delivering a terrible upswing that sends you flying upward\.$/,
    thirdPerson: false,
    tags: ["damage", "prone"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  },
  {
    user: "an undead colonel",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Feinting with the tip of his spear, an undead colonel closes in on you and rams his knee against your mid-section before bringing his staff crashing down against the side of your head\.$/,
    thirdPerson: false,
    tags: ["damage", "stupidity", "nausea"],
    length: 2.5,
  },
  {
    user: "an undead colonel",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^Combining unarmed and spear techniques, an undead colonel swiftly alternates between jabs and kicks aimed at your weak points, using the motions of your own body against you before finally catching you off-balance and impaling you\.$/,
    thirdPerson: false,
    tags: ["damage", "confusion", "weariness", "dizziness"],
    length: 0,
  },
  {
    user: "an undead colonel",
    areaId: [163],
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
  {
    user: "a steel-encased Death Knight",
    areaId: [163],
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
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^A torrent of soulbleed abruptly forms into a blade in a steel-encased Death Knight's hands, and he violently slashes it along your throat\.$/,
    thirdPerson: false,
    tags: ["damage", "lasceratedthroat"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^A steel-encased Death Knight abruptly disappears in a flash of red, and a powerful grip wraps around your forehead and slams the back of your head into the ground\.$/,
    thirdPerson: false,
    tags: ["damage", "damagedhead", "prone"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163],
    areaName: "the Underworld",
    firstPerson:
      /^A steel-encased Death Knight punches a fist toward you, and a concussive blast of soulbleed knocks you off your feet\. Within moments, he looms over you, and crushes your torso with a savage stomp\.$/,
    thirdPerson: false,
    tags: ["damage", "crackedribs", "prone"],
    length: 0,
  },
  {
    user: "a steel-encased Death Knight",
    areaId: [163],
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
];

export default underworld;
