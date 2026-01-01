import { SkillDefinition } from "../models/SkillDefinition";
export const crystalism = {
  destabilise: new SkillDefinition({
    id: "destabilise",
    fullName: "Destabilise",
    firstPerson:
      /^Turning your attention to a (?<info>\w+) vibration, you observe the crystal resonance for a moment before producing a single, piercing note to destabilise its frequency\.$/,
    thirdPerson:
      /^A single, piercing note emanates from (?<user>\w+), a sound to set teeth on edge and glass to shattering.$/,
    profession: ["magi"],
    skill: "crystalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 5,
    reaction(action) {
      switch (
        nexusclient.current_block[
          nexusclient.current_line.index + 1
        ].parsed_line.text()
      ) {
        case "A spike of agony suddenly blossoms behind your eyes.":
          action.info = "dissipate";
          break;
        case "Your heart shudders violently in your chest, threatening to stop entirely.":
          action.info = "palpitation";
          break;
        case "You are suffused with terrible pain as your skin catches aflame.":
          action.info = "heat";
          break;
        case "The ground gives a violent lurch beneath your feet, great slabs being torn up and flung about by the tremors.":
          action.info = "tremors";
          break;
        case "A soothing warmth rushes over you.":
          action.info = "harmony";
          break;
        case "A primal terror comes over you.":
          action.info = "creeps";
          break;
        case "A terrible, all-consuming silence comes over you.":
          action.info = "silence";
          break;
        case "A violent force suddenly takes hold of you and launches you high into the sky.":
          action.info = "grounding";
          break;
        case "A keening note sends a spike of pain through your skull, throwing your mind into utter disarray.":
          action.info = "oscillate";
          break;
        case "Your head swims and you stumble to the ground.":
          action.info = "disorientation";
          break;
        case "The high pitched whining disrupts your mental equilibrium.":
          action.info = "stridulation";
          break;
        case "A dissonant tone shatters the magical shield surrounding you.":
          action.info = "dissonance";
          break;
        case "Agony shoots up your legs and right arm as they all break simultaneously.":
          action.info = "plague";
          break;
        case "A bone-deep weariness comes over you.":
          action.info = "lullaby";
          break;
        case "The world seems to speed up around you - you feel ever so slow.":
          action.info = "retardation";
          break;
        default:
          action.info = false;
          break;
      }

      if (action.info) {
        nexusclient.current_block[
          nexusclient.current_line.index + 1
        ].gag = true;
      }
    },
  }),
};

export default Object.values(crystalism);
/*
//Turning your attention to a dissipate vibration, you observe the crystal resonance for a moment before producing a single, piercing note to destabilise its frequency.
22:10:46.235 A single, piercing note emanates from Khaseem, a sound to set teeth on edge and glass to shattering.
22:10:46.235 Your heart shudders violently in your chest, threatening to stop entirely.

*/