/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";
import { skills } from "./skills";
import { npcs } from "./npcs";

export const classList = [
  "Alchemist",
  "Apostate",
  "Bard",
  "Blademaster",
  "Depthswalker",
  "Dragon",
  "Druid",
  "Infernal",
  "Jester",
  "Magi",
  "Monk",
  "Occultist",
  "Paladin",
  "Pariah",
  "Priest",
  "Psion",
  "Runewarden",
  "Sentinel",
  "Serpent",
  "Shaman",
  "Sylvan",
  "Unnamable",
  "Air Elemental Lord",
  "Earth Elemental Lord",
  "Fire Elemental Lord",
  "Water Elemental Lord",
];

//You can use another Battlerage ability again. Available abilities: Overwhelm
//You can use Dragonblaze again.
//The flames of dragonbreath fade from a fortress guardsman's skin.
//A knight of the Siroccian Order's blackened flesh slowly knits together.

const checkSkillsOld = (line) => {
  const text = line;
  let result = false;

  for (let i = 0; i < skills.length; i++) {
    const element = skills[i];
    const checks = [];
    if (
      element.profession === GMCP.Char.Status.class.toLowerCase() ||
      GMCP.Char.Status.class.toLowerCase().indexOf(element.profession) > -1
    ) {
      checks.push(element.firstPerson);
    }
    checks.push(element.secondPerson, element.thirdPerson);

    for (const check of checks) {
      result = text.match(check);
      if (result) {
        break;
      }
    }

    if (result) {
      result.groups.skill = element.id;
      eventStream.raiseEvent("nexSkillMatch", {
        matches: result,
        skill: element,
      });
      break;
    }
  }

  return result ? result : false;
};

const checkSkills = (text) => {
  let result = false;
  let skill = false;

  for (let i = 0; i < skills.length; i++) {
    skill = skills[i];
    if (GMCP.Char.Status.class.toLowerCase().indexOf(skill.profession) > -1) {
      result = text.match(skill.firstPerson);
      if (result) {
        result.groups.user = "self";
        break;
      }
    }

    result = text.match(skill.secondPerson);
    if (result) {
      result.groups.target = "self";
      break;
    }

    result = text.match(skill.thirdPerson);
    if (result) {
      break;
    }
  }

  if (result) {
    console.log({
      matches: result,
      skill: skill,
    });
    eventStream.raiseEvent("nexSkillMatch", {
      matches: result,
      skill: skill,
    });
  }

  if (!result) {
    return checkNpcs(text);
  }
  return result;
};

const checkNpcs = (text) => {
  let result = false;
  let skill = false;

  for (let i = 0; i < npcs.length; i++) {
    skill = skills[i];

    result = text.match(skill.firstPerson);
    if (result) {
      result.groups.target = "self";
      result.groups.user ??= skill.npc;
      break;
    }

    result = text.match(skill.thirdPerson);
    if (result) {
      result.groups.user ??= skill.npc;
      break;
    }
  }

  if (result) {
    console.log({
      matches: result,
      skill: skill,
    });
    eventStream.raiseEvent("nexSkillMatch", {
      matches: result,
      skill: skill,
    });
  }

  return result ? result : false;
};

const nexGuiMsgReplacement = ({ matches, skill }) => {
  nexGui.msg.actionMsg(
    matches.groups.user || "Self",
    skill.id || skill.tags,
    matches.groups.target || "Self"
  );
};

if (typeof eventStream !== "undefined") {
  eventStream.removeListener("nexSkillMatch", "nexGuiMsgReplacement");
  eventStream.registerEvent("nexSkillMatch", nexGuiMsgReplacement);

  eventStream.removeListener("nexSkillMatch", "nexGuiMsgReplacement");
  eventStream.registerEvent("nexSkillMatch", nexGuiMsgReplacement);
}

export const nexSkills = {
  skills: skills,
  npcs: npcs,
  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};
