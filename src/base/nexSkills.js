/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";
import { actions } from "./actions";
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

  for (let i = 0; i < actions.length; i++) {
    const element = actions[i];
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
      result.groups.action = element.id;
      eventStream.raiseEvent("nexSkillMatch", {
        matches: result,
        action: element,
      });
      break;
    }
  }

  return result ? result : false;
};

export const nextLine = () => {
  const nextLine =
    nexusclient.current_block[
      nexusclient.current_block.indexOf(nexusclient.current_line) + 1
    ];
  return nextLine.parsed_line ? nextLine.parsed_line.text() : "";
};

const checkSkills = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (GMCP.Char.Status.class.toLowerCase().indexOf(action.profession) > -1) {
      result = text.match(action.firstPerson);
      if (result) {
        action.user = "self";
        action.target = result.groups.target;
        break;
      }
    }

    result = text.match(action.secondPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = "self";
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.user = result.groups.user;
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    eventStream.raiseEvent("nexSkillMatch", action);
  }

  if (!result) {
    return checkNpcs(text);
  }
  return result;
};

const checkNpcs = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < npcs.length; i++) {
    action = npcs[i];

    result = text.match(action.firstPerson);
    if (result) {
      action.target = "self";
      if (result.groups?.user) {
        action.user = result.groups.user;
      }
      break;
    }

    result = text.match(action.thirdPerson);
    if (result) {
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    eventStream.raiseEvent("nexSkillMatch", action);
  }

  return result ? result : false;
};

export const nexSkills = {
  actions: actions,
  npcs: npcs,
  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};

globalThis.nexSkills = nexSkills;
