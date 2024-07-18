/* global eventStream, GMCP, nexGui */

//import { startUp } from "./mongo";
//Attainment
import depthswalker from "./skills/attainment/depthswalker";
import dragon from "./skills/attainment/dragon";
import occultist from "./skills/attainment/occultist";
import runewarden from "./skills/attainment/runewarden";
import sylvan from "./skills/attainment/sylvan";
//Skills
import aeonics from "./skills/aeonics";
import bladedance from "./skills/bladedance";
import curses from "./skills/curses";
import devotion from "./skills/devotion";
import domination from "./skills/domination";
import dragoncraft from "./skills/dragoncraft";
import ignition from "./skills/ignition";
import memorium from "./skills/memorium";
import occultism from "./skills/occultism";
import oppression from "./skills/oppression";
import pranks from "./skills/pranks";
import propagation from "./skills/propagation";
import shadowmancy from "./skills/shadowmancy";
import spirituality from "./skills/spirituality";
import subterfuge from "./skills/subterfuge";
import tarot from "./skills/tarot";
import tekura from "./skills/tekura";
import venom from "./skills/venom";
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
  ...ignition,
  ...memorium,
  ...occultism,
  ...oppression,
  ...pranks,
  ...propagation,
  ...shadowmancy,
  ...spirituality,
  ...subterfuge,
  ...tarot,
  ...tekura,
  ...venom,
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

const processMatch = (
  result,
  action,
  matchType,
  defaultUser,
  defaultTarget
) => {
  if (result) {
    const { groups } = result;
    action.match = matchType;
    action.user = groups?.user || defaultUser;
    action.target = groups?.target || defaultTarget;
    action.info = groups?.info || false;
    action.args = result;
    return true;
  } else {
    return false;
  }
};

const evaluateText = (action, text, matchType, defaultUser, defaultTarget) => {
  if (!action[matchType]) {
    return false;
  }

  const result = text.match(action[matchType]);
  if (result) {
    processMatch(result, action, "secondPerson", "", "self");
  } else {
    return false;
  }
};

const finalizeCheck = (action) => {
  if (action.reaction) {
    action.reaction(action);
  }

  eventStream.raiseEvent("nexSkillMatch", action);
  eventStream.raiseEvent(`nexSkillMatch${action.id}`, action);

  return action;
};

const checkSkills = (text) => {
  let result = false;
  let action = false;
  const profession = GMCP.Char.Status.class.toLowerCase();

  for (let i = 0; i < actions.length; i++) {
    action = { ...actions[i] };

    if (
      action.profession.includes(profession) ||
      action.profession.includes("general")
    ) {
      if (evaluateText(result, action, text, "firstPerson", "self", "")) {
        if (action.target.toLowerCase() === "you") {
          action.target = "self";
        }
        return finalizeCheck(result, action);
      }
    }

    if (evaluateText(result, action, text, "secondPerson", "", "self")) {
      return finalizeCheck(result, action);
    }

    if (evaluateText(result, action, text, "thirdPerson", "", "")) {
      return finalizeCheck(result, action);
    }
  }

  return checkNpcs(text);
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
  //startUp: startUp,
};

globalThis.nexSkills = nexSkills;

const txt =
  "Khaseem reaches out and clenches a fist before Pamxen, who screams and doubles over in agony as his skin suddenly bubbles with gangrenous growths.";
const regexify = (txt) => {
  const words = txt.split(" ");
  const user = "Khaseem";
  const target = "Pamxen";
  const pronouns = [
    "he",
    "He",
    "him",
    "Him",
    "his",
    "His",
    "himself",
    "Himself",
    "she",
    "She",
    "her",
    "Her",
    "hers",
    "Hers",
    "herself",
    "Herself",
    "fae",
    "Fae",
    "faen",
    "Faen",
    "faenself",
    "Faenself",
  ];
  for (let i = 0; i < words.length; i++) {
    const cleanWord = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    if (pronouns.includes(cleanWord)) {
      words[i] = words[i].replace(cleanWord, "\\w+");
    } else if (cleanWord === user) {
      words[i] = words[i].replace(cleanWord, "(?<user>.+?)");
    } else if (cleanWord === target) {
      words[i] = words[i].replace(cleanWord, "(?<target>.+?)");
    }
  }
  let result = words.join(" ");
  result = result.replaceAll(".", "\\.");
  result = "/^" + result;
  result += "$/";
  console.log(result);
};
regexify(txt);
