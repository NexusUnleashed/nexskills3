import { checkRandomLimbs, inBlock, checkTransfix } from "../utilities";
import { NpcDefinition } from "../models/NpcDefinition";
const elementalEmbassy = [
  //#region Air
  new NpcDefinition({
    user: "an air elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      /^An air elemental guard gestures before you, choking the breath from your lungs as the air seems to grow sluggish, your muscles unresponsive\.$/,
    thirdPerson:
      /^Using a lasso of air, an air elemental guard wraps the gossamer torso around (?<target>\w+?), pulling \w+ to the ground\.$/,
    tags: ["damage"],
    reaction(args) {
      if (inBlock("Your sense of time returns to normal.")) {
        args.tags.push("speed stripped");
      } else {
        args.tags.push("AEON");
      }
    },
    length: 3.0,
  }),
  new NpcDefinition({
    user: "an air elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "With a howl like the wind, razor-sharp ribbons of air burst from an air elemental guard to assail your flesh, gleaming like folded diamond. Rippling across your vision in a dizzying array of transfixing, refractive hues, the streams consume your senses in a twisting mosaic of colour.",
    tags: ["damage", "AOE"],
    length: 3.0,
    reaction(args) {
      checkTransfix(args);
    },
  }),
  new NpcDefinition({
    user: "an air elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson: false,
    thirdPerson:
      /^An air elemental guard gestures before (?<target>\w+?), choking the breath from \w+ lungs as the surrounding air thickens\.$/,
    tags: ["damage"],
    length: 3.0,
  }),
  //#endregion
  //#region Earth
  new NpcDefinition({
    user: "an earth elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "An earth elemental guard rumbles and roars, kicking up a great cloud of dust and sand that scourges your flesh, leaving you bleeding and vulnerable.",
    tags: ["damage", "undeaf?", "strip(2)"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "an earth elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "An earth elemental guard brings the pommel of its sword crashing into your head, leaving you stunned and dizzy",
    thirdPerson:
      /^An earth elemental guard assaults the head of (?<target>\w+?) with the pommel of its sword, leaving \w+ stunned and dizzy\.$/,
    tags: ["damage", "skullfracture", "nausea", "dizziness"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "an earth elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson: [
      "Calling on the powers of the earth, an earth elemental guard summons sticky vines that lash at you, tearing into muscle and bone alike as they flense the skin from your body.",
      "Belching soporific spores from opening flowers upon their length, you feel a peculiar lassitude overcoming your mind.",
    ],
    thirdPerson: [
      /^Calling on the powers of the earth, an earth elemental guard summons sticky vines that lash at (?<target>\w+?), tearing into muscle and bone alike as they flense the skin from \w+ body\.$/,
      /^Belching soporific spores from opening flowers upon their length, a hazy cloud enshrouds (?<target>\w+?) as \w+ gaze grows vacant\.$/,
    ],
    tags: [
      "damage",
      "peace",
      "web",
      "crackedribs",
      "brokenrightarm",
      "numbedrightarm",
    ],
    length: 3.0,
  }),
  //#endregion
  //#region Fire
  new NpcDefinition({
    user: "a fire elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "At the command of a fire elemental guard, pillars of white-hot flame erupt beneath your feet, scorching your skin as the world vanishes behind a sheet of fire.",
    tags: ["damage", "burning(2)", "AOE"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "a fire elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      /^A fire elemental guard glows white hot, exploding in a shower of ashes and cinders. You feel your vitality drain away as it reforms once more, perfectly whole\.$/,
    tags: ["damage", "AOE"], //dehydration, conflagration?
    length: 3.0,
  }),
  new NpcDefinition({
    user: "a fire elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      /^A fire elemental guard glows white hot, exploding in a shower of ashes and cinders. You feel your vitality drain away as it reforms once more, perfectly whole\.$/,
    tags: ["damage", "burning(2)", "conflagration", "dehydration", "AOE"],
    length: 3.0,
  }),
  //#endregion
  //#region Water
  new NpcDefinition({
    user: "a water elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "Undulating wildly, a water elemental guard transforms into an icy squall, battering you with gelid rains and frozen hail.",
    tags: ["damage", "frozen", "AOE"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "a water elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "Mist and foam spray outward from a water elemental guard as its form ripples and shifts, twisting into a confusing mirage of hazy images that overwhelms your mind.",
    tags: ["damage", "disrupted", "claustrophobia", "fear", "AOE"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "a water elemental guard",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson:
      "An immense geyser of icy-cold water bursts from within a water elemental guard's form, sending you flying across the ground.",
    thirdPerson:
      /^An immense geyser of icy-cold water bursts from within a water elemental guard's form, sending (?<target>\w+?) flying across the ground\.$/,
    tags: ["damage", "prone", "damagedrightleg"],
    length: 3.0,
    reaction(args) {
      checkRandomLimbs(args);
    },
  }),
  //#endregion
  //#region Chellen
  new NpcDefinition({
    user: "Chellen, the administrator",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson: false,
    thirdPerson:
      /^A blossom of fire streaks from the left hand of Chellen, the administrator, while a spear of frost shoots from her right, slamming into (?<target>\w+?) and concurrently searing and freezing \w+ flesh\.$/,
    tags: ["damage"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "Chellen, the administrator",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson: false,
    thirdPerson:
      /^Chellen, the administrator beseeches the Earth Ambassador for strength, slamming a fist into (?<target>\w+?) with incredible strength\.$/,
    tags: ["damage"],
    length: 3.0,
  }),
  new NpcDefinition({
    user: "Chellen, the administrator",
    areaId: [335],
    areaName: "The Elemental Embassy",
    firstPerson: [
      "Chellen, the administrator calls for aid from the Air Ambassador, raising her arms over her head.",
      "In response to the administrator's plea, forks of jagged lightning appear from nowhere, striking relentlessly at your body.",
    ],
    tags: ["damage", "burning"],
    length: 3.0,
  }),
  //#endregion
];

export default elementalEmbassy;
//The fires consuming your flesh begin to crackle with greater intensity. 2
//Your vision begins to fade with the all-consuming agony of the fires that are consuming you. 3

//The pain of your burned skin meeting salve makes your head spin. curing predict tenderskin
