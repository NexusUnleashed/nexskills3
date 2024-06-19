/* global eventStream, GMCP, nexGui */

import { startUp } from "./mongo";
//Attainment
import depthswalker from "./skills/attainment/depthswalker";
import dragon from "./skills/attainment/dragon";
import occultist from "./skills/attainment/occultist";
import runewarden from "./skills/attainment/runewarden";
import sylvan from "./skills/attainment/sylvan";
//Skills
import aeonics from "./skills/aeonics";
import curses from "./skills/curses";
import devotion from "./skills/devotion";
import domination from "./skills/domination";
import dragoncraft from "./skills/dragoncraft";
import harmonics from "./skills/harmonics";
import ignition from "./skills/ignition";
import memorium from "./skills/memorium";
import occultism from "./skills/occultism";
import oppression from "./skills/oppression";
import pranks from "./skills/pranks";
import propagation from "./skills/propagation";
import shadowmancy from "./skills/shadowmancy";
import spirituality from "./skills/spirituality";
import subterfuge from "./skills/subterfuge";
import swashbuckling from "./skills/swashbuckling";
import tarot from "./skills/tarot";
import tekura from "./skills/tekura";
import venom from "./skills/venom";
import voicecraft from "./skills/voicecraft";
import weaponmastery from "./skills/weaponmastery";
import weatherweaving from "./skills/weatherweaving";
import weaving from "./skills/weaving";
import zeal from "./skills/zeal";
//General
import curing from "./general/curing";
import general from "./general/general";
import tattoos from "./general/tattoos";
//NPCS
import barrow from "./areas/barrow";
import battlesite from "./areas/battlesite";
import grukaiSwamp from "./areas/grukaiSwamp";
import istarion from "./areas/istarion";
import judgementMountain from "./areas/judgementMountain";
import nur from "./areas/nur";
import riagath from "./areas/riagath";
import tirMuran from "./areas/tirMuran";
import tuar from "./areas/tuar";
import yggdrasil from "./areas/yggdrasil";

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

const npcsMap = new Map();
npcs.forEach((npc) => {
  npc.areaId.forEach((areaId) => {
    if (!npcsMap.has(areaId)) {
      npcsMap.set(areaId, []);
    }
    npcsMap.get(areaId).push(npc);
  });
});

const actions = [
  //Attainment
  ...depthswalker,
  ...dragon,
  ...occultist,
  ...runewarden,
  ...sylvan,
  //Skills
  ...aeonics,
  ...curses,
  ...devotion,
  ...domination,
  ...dragoncraft,
  ...harmonics,
  ...ignition,
  ...memorium,
  ...occultism,
  ...oppression,
  ...pranks,
  ...propagation,
  ...shadowmancy,
  ...spirituality,
  ...subterfuge,
  ...swashbuckling,
  ...tarot,
  ...tekura,
  ...venom,
  ...voicecraft,
  ...weaponmastery,
  ...weatherweaving,
  ...weaving,
  ...zeal,
  //General
  ...curing,
  ...general,
  ...tattoos,
];

export const classList = {
  Alchemist: ["Alchemy", "Physiology", "Formulation", "Sublimation"],
  Apostate: ["Evileye", "Necromancy", "Apostasy"],
  Bard: ["Voicecraft", "Swashbuckling", "Harmonics", "Woe"],
  Blademaster: ["TwoArts", "Striking", "Shindo"],
  Depthswalker: ["Aeonics", "Shadowmancy", "Teminus"],
  Dragon: ["Dragoncraft"],
  Druid: ["Groves", "Metamorphosis", "Reclamation"],
  Infernal: ["Weaponmastery", "Oppression", "Malignity"],
  Jester: ["Tarot", "Pranks", "Puppetry"],
  Magi: ["Elementalism", "Crystalism", "Artificing"],
  Monk: ["Tekura", "Shikudo", "Kaido", "Telepathy"],
  Occultist: ["Occultism", "Tarot", "Domination"],
  Paladin: ["Weaponmastery", "Excision", "Valour"],
  Pariah: ["Memorium", "Pestilence", "Charnel"],
  Priest: ["Spirituality", "Devotion", "Zeal"],
  Psion: ["Weaving", "Psionics", "Emulation"],
  Runewarden: ["Weaponmastery", "Runelore", "Discipline"],
  Sentinel: ["Metamorphosis", "Woodlore", "Skirmishing"],
  Serpent: ["Subterfuge", "Venom", "Hypnosis"],
  Shaman: ["Spiritlore", "Curses", "Vodun"],
  Sylvan: ["Propagation", "Groves", "Weatherweaving"],
  Unnamable: ["Weaponmastery", "Anathema", "Domination"],
  "Air elemental lord": ["Duress"],
  "Earth elemental lord": ["Sculpting"],
  "Fire elemental lord": ["Ignition"],
  "Water elemental lord": ["Pervasion"],
};

const checkSkills = (text) => {
  let result = false;
  let action = false;
  const profession = GMCP.Char.Status.class.toLowerCase();

  for (let i = 0; i < actions.length; i++) {
    action = actions[i];
    if (
      action.profession.includes(profession) ||
      action.profession.includes("general")
    ) {
      result = action.firstPerson ? text.match(action.firstPerson) : false;
      if (result) {
        action.user = "self";
        action.target = "";
        action.match = "firstPerson";
        if (result.groups) {
          action.target = result.groups.target;
          action.info = result.groups.info || false;
        }
        if (action.target.toLowerCase() === "you") {
          action.target = "self";
        }
        break;
      }
    }

    result = action.secondPerson ? text.match(action.secondPerson) : false;
    if (result) {
      action.target = "self";
      action.match = "secondPerson";
      if (result.groups) {
        action.user = result.groups.user || "";
        action.info = result.groups.info || false;
      }
      break;
    }

    result = action.thirdPerson ? text.match(action.thirdPerson) : false;
    if (result) {
      action.user = result.groups.user || "";
      action.target = result.groups.target || "";
      action.info = result.groups.info || false;
      action.match = "thirdPerson";
      break;
    }
  }

  if (result) {
    action.args = result;
    if (action.reaction) {
      action.reaction(action);
    }

    eventStream.raiseEvent("nexSkillMatch", action);
    eventStream.raiseEvent(`nexSkillMatch${action.id}`, action);
  } else {
    return checkNpcs(text);
  }

  return result ? action : false;
};

const checkNpcs = (text) => {
  const areaId = GMCP.Location.areaid;
  const areaNpcs = npcsMap.get(areaId) || [];
  let result = false;
  let action = false;

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
