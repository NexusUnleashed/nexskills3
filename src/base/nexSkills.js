/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";

import { actions as depthswalker } from "./professions/depthswalker";
import { actions as dragon } from "./professions/dragon";
import { actions as infernal } from "./professions/infernal";
import { actions as jester } from "./professions/jester";
import { actions as occultist } from "./professions/occultist";
import { actions as pariah } from "./professions/pariah";
import { actions as priest } from "./professions/priest";
import { actions as psion } from "./professions/psion";
import { actions as runewarden } from "./professions/runewarden";
import { actions as serpent } from "./professions/serpent";
import { sylvan } from "./professions/sylvan";

import { actions as weaponmastery } from "./skills/weaponmastery";
import { actions as harmonics } from "./skills/harmonics";
import { actions as ignition } from "./skills/ignition";
import { actions as swashbuckling } from "./skills/swashbuckling";
import { actions as voicecraft } from "./skills/voicecraft";
import { actions as tekura } from "./skills/tekura";
import { propagation } from "./skills/propagation";
import { weatherweaving } from "./skills/weatherweaving";
import { domination } from "./skills/domination";
import { tarot } from "./skills/tarot";

import { actions as tattoos } from "./general/tattoos";
import { actions as curing } from "./general/curing";
import { actions as general } from "./general/general";

import { npcs as battlesite } from "./areas/battlesite";
import { npcs as judgementMountain } from "./areas/judgementMountain";
import { npcs as grukaiSwamp } from "./areas/grukaiSwamp";
import { npcs as istarion } from "./areas/istarion";
import { npcs as nur } from "./areas/nur";
import { npcs as riagath } from "./areas/riagath";
import { npcs as tirMuran } from "./areas/tirMuran";
import { npcs as tuar } from "./areas/tuar";
import { npcs as yggdrasil } from "./areas/yggdrasil";
import { barrow } from "./areas/barrow";

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
  ...barrow,
];

const actions = [
  ...depthswalker,
  ...dragon,
  ...infernal,
  ...jester,
  ...occultist,
  ...pariah,
  ...priest,
  ...psion,
  ...runewarden,
  ...serpent,
  ...sylvan,

  ...tarot,
  ...domination,
  ...weaponmastery,
  ...harmonics,
  ...ignition,
  ...propagation,
  ...swashbuckling,
  ...voicecraft,
  ...tekura,
  ...weatherweaving,
  ...tattoos,
  ...curing,
  ...general,
];

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

const checkSkills = (text) => {
  let result = false;
  let action = false;

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (
      action.profession.includes(GMCP.Char.Status.class.toLowerCase()) ||
      action.profession.includes("general")
    ) {
      result = action.firstPerson ? text.match(action.firstPerson) : false;
      if (result) {
        action.user = "self";
        if (result.groups) {
          action.target = result.groups.target || false;
          action.info = result.groups.info || false;
        }
        break;
      }
    }

    result = action.secondPerson ? text.match(action.secondPerson) : false;
    if (result) {
      action.target = "self";
      if (result.groups) {
        action.user = result.groups.user;
        action.info = result.groups.info || false;
      }
      break;
    }

    result = action.thirdPerson ? text.match(action.thirdPerson) : false;
    if (result) {
      action.user = result.groups.user;
      action.target = result.groups.target || false;
      action.info = result.groups.info || false;
      break;
    }
  }

  if (result) {
    action.args = result;
    if (action.reaction) {
      action.reaction(action);
    }
    eventStream.raiseEvent("nexSkillMatch", action);
  } else {
    return checkNpcs(text);
  }

  return result ? action : false;
};

const checkNpcs = (text) => {
  let result = false;
  let action = false;

  const areaNpcs = npcs.filter(
    (e) => e.areaId.includes(GMCP.Location.areaid) || e.areaId.length === 0
  );

  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    action = areaNpcs[i];

    result = action.firstPerson ? text.match(action.firstPerson) : false;
    if (result) {
      action.target = "self";
      if (result.groups?.user) {
        action.user = result.groups.user;
      }
      break;
    }

    result = action.thirdPerson ? text.match(action.thirdPerson) : false;
    if (result) {
      action.target = result.groups.target;
      break;
    }
  }

  if (result) {
    action.args = result;
    eventStream.raiseEvent("nexSkillNpcMatch", action);
  }

  return result ? action : false;
};

export const nexSkills = {
  actions: actions,
  npcs: npcs,

  checkSkills: checkSkills,
  checkNpcs: checkNpcs,
  startUp: startUp,
};

globalThis.nexSkills = nexSkills;
