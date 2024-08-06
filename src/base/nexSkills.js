/* global eventStream, GMCP, nexGui */

//Attainment
import bard from "./skills/attainment/bard";
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
import talismans from "./general/talismans";
import tattoos from "./general/tattoos";
//NPCS
import ageiro from "./areas/ageiro";
import barrow from "./areas/barrow";
import battlesite from "./areas/battlesite";
import grukaiSwamp from "./areas/grukaiSwamp";
import istarion from "./areas/istarion";
import judgementMountain from "./areas/judgementMountain";
import nur from "./areas/nur";
import riagath from "./areas/riagath";
import tapoa from "./areas/tapoa";
import tirMuran from "./areas/tirMuran";
import tuar from "./areas/tuar";
import yggdrasil from "./areas/yggdrasil";

const npcs = [
  ...ageiro,
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
  ...tapoa,
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
  ...bard,
  ...depthswalker,
  ...dragon,
  ...occultist,
  ...runewarden,
  ...sylvan,
  //Skills
  ...aeonics,
  ...bladedance,
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
  ...talismans,
  ...tattoos,
];

export const classList = {
  Alchemist: ["Alchemy", "Physiology", "Formulation", "Sublimation"],
  Apostate: ["Evileye", "Necromancy", "Apostasy"],
  Bard: ["Bladedance", "Composition", "Sagas", "Woe"],
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
    action.line = result.input;
    action.matchType = matchType;
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
  const patterns = action[matchType];
  if (!patterns) {
    return false;
  }

  let result = false;
  if (Array.isArray(patterns)) {
    const { current_block: cb, current_line: cl } = nexusclient;

    for (let i = 0; i < patterns.length; i++) {
      result = cb[cl.index + i].parsed_line.text().match(patterns[i]);
      if (!result) {
        break;
      }
    }
  } else {
    result = text.match(patterns);
  }

  return processMatch(result, action, matchType, defaultUser, defaultTarget);
};

const finalizeCheck = (action, type = false) => {
  if (action.reaction) {
    action.reaction(action);
  }

  // This check allows some action.reactions to void the match
  if (!action.matchType) {
    return false;
  }

  if (type === "npc") {
    eventStream.raiseEvent("nexSkillNpcMatch", action);
  } else {
    eventStream.raiseEvent("nexSkillMatch", action);
    eventStream.raiseEvent(`nexSkillMatch${action.id}`, action);
  }
  return action;
};

const checkSkills = (text) => {
  const profession = GMCP.Char.Status.class.toLowerCase();

  for (let i = 0; i < actions.length; i++) {
    const action = { ...actions[i] };

    if (
      action.profession?.includes(profession) ||
      action.profession?.includes("general")
    ) {
      if (evaluateText(action, text, "firstPerson", "self", "")) {
        if (action.target.toLowerCase() === "you") {
          action.target = "self";
        }
        return finalizeCheck(action);
      }
    }

    if (evaluateText(action, text, "secondPerson", "", "self")) {
      return finalizeCheck(action);
    }

    if (evaluateText(action, text, "thirdPerson", "", "")) {
      return finalizeCheck(action);
    }
  }

  return checkNpcs(text);
  //console.log("checkSkills false", false);
  //return false;
};

const checkNpcs = (text) => {
  const areaId = GMCP.Location.areaid;
  const areaNpcs = npcsMap.get(areaId) || [];

  if (areaNpcs.length === 0) {
    return false;
  }

  for (let i = 0; i < areaNpcs.length; i++) {
    const action = { ...areaNpcs[i] };

    if (evaluateText(action, text, "firstPerson", action.user, "self")) {
      return finalizeCheck(action, "npc");
    }
    if (evaluateText(action, text, "thirdPerson", action.user, "self")) {
      return finalizeCheck(action, "npc");
    }
  }

  return false;
};

export const nexSkills = {
  actions,
  npcs,

  checkSkills,
  checkNpcs,
  //startUp,

  find(id) {
    const skills = actions.filter((e) => e.id === id.toLowerCase());
    console.log(skills);
    return skills;
  },
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
//regexify(txt);
