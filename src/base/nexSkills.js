/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";

import { actions as occultist } from "./skills/occultist";
import { actions as dragon } from "./skills/dragon";
import { actions as depthswalker } from "./skills/depthswalker";
import { actions as pariah } from "./skills/occultist";
import { actions as psion } from "./skills/psion";
import { actions as tattoos } from "./skills/tattoos";

import { npcs as battlesite } from "./areas/battlesite";
import { npcs as judgementMountain } from "./areas/judgementMountain";
import { npcs as grukaiSwamp } from "./areas/grukaiSwamp";
import { npcs as istarion } from "./areas/istarion";
import { npcs as nur } from "./areas/nur";
import { npcs as riagath } from "./areas/riagath";
import { npcs as tirMuran } from "./areas/tirMuran";
import { npcs as tuar } from "./areas/tuar";
import { npcs as yggdrasil } from "./areas/yggdrasil";

const npcs = [
  ...battlesite,
  ...judgementMountain,
  ...grukaiSwamp,
  ...istarion,
  ...nur,
  ...riagath,
  ...tirMuran,
  ...tuar,
  ...yggdrasil,
];

const actions = [...occultist, ...dragon, ...depthswalker, ...pariah, ...psion];

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
  "Air elemental lord",
  "Earth elemental lord",
  "Fire elemental lord",
  "Water elemental lord",
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

export const nextLine = (num = 1) => {
  const nextLine =
    nexusclient.current_block[
    nexusclient.current_block.indexOf(nexusclient.current_line) + num
    ];
  return nextLine.parsed_line ? nextLine.parsed_line.text() : "";
};

const checkSkills = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (GMCP.Char.Status.class.toLowerCase().includes(action.profession)) {
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

  const areaNpcs = npcs.filter((e) => e.areaId.includes(GMCP.Location.areaid));
  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    action = areaNpcs[i];

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
    eventStream.raiseEvent("nexSkillNpcMatch", action);
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
