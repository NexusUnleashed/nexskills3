import { checkSensitivity, checkRandomLimbs } from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";

const emberveil = [
  //#region an unbound firestorm elemental
  //A scorching wind sweeps over you, throwing you back and forth like a brittle rag-doll. //brokenlimb
  //A scorching wind sweeps over you, scraping hot against your skin like razors of sand. //itching
  //A surge of blistering wind rushes past, and your skin erupts in sudden, agonising heat. //scalded
  new NpcDefinition({
    user: "an unbound firestorm elemental",
    firstPerson:
      /^Jets of flame spiral out of an unbound firestorm elemental, engulfing you in a blaze of searing heat\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound firestorm elemental",
    firstPerson:
      /^White-hot sparks whip out from an unbound firestorm elemental's vortex, scraping hot against your skin like burning grit\.$/,
    tags: ["damage", "itching"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound firestorm elemental",
    firstPerson:
      /^A blast of scorching-hot air from an unbound firestorm elemental hammers your arm backward at an unnatural angle\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  //#endregion
  //#region an errant firestorm elemental
  new NpcDefinition({
    user: "an errant firestorm elemental",
    firstPerson:
      /^Flames surge from an errant firestorm elemental, singeing your flesh until it begins to char\.$/,
    tags: ["damage"],
    length: 2.5,
    reaction(args) {
      checkSensitivity(args);
    },
  }),
  new NpcDefinition({
    user: "an errant firestorm elemental",
    firstPerson:
      /^With a sudden twist, an errant firestorm elemental envelops you in a swirl of suffocating heat\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant firestorm elemental",
    firstPerson:
      /^An errant firestorm elemental erupts skyward then crashes down upon you, flame cascading over your body\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant firestorm elemental",
    firstPerson:
      /^A shrill howl echoes as an errant firestorm elemental sends a cyclonic blast straight into your chest\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  //#endregion
  //#region a fiery djinn
  new NpcDefinition({
    user: "a fiery djinn",
    firstPerson: [
      /^With a soundless clap, a fiery djinn sends a rippling shockwave through the air\.$/,
      /^You feel your body begin to vibrate in tune with the disruptive harmonies\.$/,
    ],
    tags: ["damage", "dissonance"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a fiery djinn",
    firstPerson:
      /^A fork of burning lightning arcs from a fiery djinn into you, shocking your skin in a flash of mind-scrambling pain\.$/,
    tags: ["damage", "fulminated", "stupidity"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a fiery djinn",
    firstPerson:
      /^A fiery djinn twists the air around you into a violent spiral, flinging you back and forth through the searing wind\.$/,
    tags: ["damage", "clumsiness", "dizziness"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a fiery djinn",
    firstPerson:
      /^Gesturing skyward, a fiery djinn calls down a lightning bolt that crashes violently into you\.$/,
    tags: ["damage", "paralysis", "epilepsy"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a fiery djinn",
    firstPerson:
      /^Your vision blurs and your thoughts break apart as a fiery djinn heats the air around you to a suffocating degree\.$/,
    //You're tired. So very tired.
    tags: ["damage", "impatience", "sandfever"],
    length: 2.5,
  }),
  //#endregion
  //#region a smoke wisp
  new NpcDefinition({
    user: "a smoke wisp",
    firstPerson:
      /^A smoke wisp crackles loudly and blasts you with soot-tinged flame\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a smoke wisp",
    firstPerson:
      /^Surging through the air, a smoke wisp scorches you as it makes contact\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  //#endregion
  //#region an unbound smoke elemental
  new NpcDefinition({
    user: "an unbound smoke elemental",
    firstPerson:
      /^With a crackle like a roaring fire, an unbound smoke elemental coughs out a smoke wisp that twists through the air\.$/,
    tags: ["SUMMON"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound smoke elemental",
    firstPerson:
      /^An unbound smoke elemental breathes a suffocating plume of smoke into your lungs, its heat searing you from within\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound smoke elemental",
    firstPerson:
      /^An unbound smoke elemental slithers forward and envelopes you in a torrent of choking haze\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound smoke elemental",
    firstPerson:
      /^Your skin bubbles and blisters as an unbound smoke elemental's tendrils surge over you, scorching everything they touch\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an unbound smoke elemental",
    firstPerson:
      /^With a hissing shriek, an unbound smoke elemental lashes you with a tendril of scalding-hot ash\.$/,
    tags: ["damage", "scalded"],
    length: 2.5,
  }),
  //#endregion
  //#region an errant smoke elemental
  new NpcDefinition({
    user: "an errant smoke elemental",
    firstPerson:
      /^An errant smoke elemental exhales a choking cloud of ash that burns your lungs\.$/,
    tags: ["damage", "asthma"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant smoke elemental",
    firstPerson:
      /^Lurching forward, an errant smoke elemental grabs onto you and breaths fire against your face\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant smoke elemental",
    firstPerson:
      /^An errant smoke elemental lurches into you, its body bursting into oily haze and sputtering fire on contact\.$/,
    tags: ["damage", "slickness"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant smoke elemental",
    firstPerson:
      /^Hazy plumes of smog erupt from an errant smoke elemental as it stumbles into you, engulfing you in a suffocating cloud of dark soot\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "an errant smoke elemental",
    firstPerson:
      /^Leaning into one final stagger, an errant smoke elemental lurches forward and slams into you before erupting into a cloud of thick, acrid smog\.$/,
    tags: ["blackout"],
    length: 2.5,
  }),

  //#endregion
  //#region a burning zephyr
  new NpcDefinition({
    user: "a burning zephyr",
    firstPerson:
      /^Your vision warps as a burning zephyr flows over you, flooding your sight with heat-born delirium\.$/,
    tags: ["damage", "hallucinations", "paranoia"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a burning zephyr",
    firstPerson:
      /^Heat engulfs you as a burning zephyr twists around your frame, setting you ablaze\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a burning zephyr",
    firstPerson:
      /^Surging forward, a burning zephyr rushes towards you, throwing you backwards with a gust of scorching-hot wind\.$/,
    tags: ["damage", "prone"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a burning zephyr",
    firstPerson:
      /^Searing-hot winds rake burns across your body as a burning zephyr rushes past\.$/,
    tags: ["damage", "tenderskin"],
    length: 2.5,
  }),
  //#endregion
  //#region a sparking candela
  new NpcDefinition({
    user: "a sparking candela",
    firstPerson:
      /^A sparking candela flickers violently, discharging a static bolt that strikes you with a blinding crack of light\.$/,
    tags: ["damage", "epilepsy"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a sparking candela",
    firstPerson:
      /^Light and flame burst from a sparking candela in a bright flash, searing you momentarily as pain blossoms across your skin\.$/,
    tags: ["damage", "solarburn"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a sparking candela",
    firstPerson:
      /^Flames spiral outward from a sparking candela, washing over you in waves of heat that burn your skin raw\.$/,
    tags: ["damage", "burning"],
    length: 2.5,
  }),
  new NpcDefinition({
    user: "a sparking candela",
    firstPerson:
      /^A sparking candela pulses once before a blast of burning ozone crashes into you and throws you backward\.$/,
    tags: ["damage"],
    length: 2.5,
  }),
  //#endregion
];

emberveil.forEach((event) => {
  event.areaId = [440]; // IRE 440
  event.areaName = "Emberveil";
});

export default emberveil;