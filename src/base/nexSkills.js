/* global eventStream, GMCP, nexGui */

//Attainment
import bard from "./skills/attainment/bard";
import depthswalker from "./skills/attainment/depthswalker";
import dragon from "./skills/attainment/dragon";
import magi from "./skills/attainment/magi";
import occultist from "./skills/attainment/occultist";
import runewarden from "./skills/attainment/runewarden";
import sylvan from "./skills/attainment/sylvan";
//Skills
import aeonics from "./skills/aeonics";
import artificing from "./skills/artificing";
import bladedance from "./skills/bladedance";
import composition from "./skills/composition";
import curses from "./skills/curses";
import devotion from "./skills/devotion";
import domination from "./skills/domination";
import dragoncraft from "./skills/dragoncraft";
import elementalism from "./skills/elementalism";
import emulation from "./skills/emulation";
import evileye from "./skills/evileye";
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
import gear from "./general/gear";
import tattoos from "./general/tattoos";
import knights from "./skills/knights";
//NPCS
import ageiro from "./areas/ageiro";
import barrow from "./areas/barrow";
import battlesite from "./areas/battlesite";
import grukaiSwamp from "./areas/grukaiSwamp";
import istarion from "./areas/istarion";
import judgementMountain from "./areas/judgementMountain";
import lupineHuntingGrounds from "./areas/lupineHuntingGrounds";
import mannamot from "./areas/mannamot";
import nur from "./areas/nur";
import riagath from "./areas/riagath";
import tapoa from "./areas/tapoa";
import tirMurann from "./areas/tirMurann";
import tuar from "./areas/tuar";
import underworld from "./areas/underworld";
import yggdrasil from "./areas/yggdrasil";
import emberveil from "./areas/emberveil";
import crust from "./areas/crust";

const npcs = [
  ...ageiro,
  ...barrow,
  ...battlesite,
  ...crust,
  ...emberveil,
  ...grukaiSwamp,
  ...istarion,
  ...judgementMountain,
  ...lupineHuntingGrounds,
  ...mannamot,
  ...nur,
  ...riagath,
  ...tapoa,
  ...tirMurann,
  ...tuar,
  ...underworld,
  ...yggdrasil,
];

const npcsMap = new Map();
npcs.forEach((npc) => {
  if (!npc.areaId) {
    if (!npcsMap.has(npc.areaName)) {
      npcsMap.set(npc.areaName, []);
    }
    npcsMap.get(npc.areaName).push(npc);
  } else {
    npc.areaId.forEach((areaId) => {
      if (!npcsMap.has(areaId)) {
        npcsMap.set(areaId, []);
      }
      npcsMap.get(areaId).push(npc);
    });
  }
});
//console.log(npcsMap);

const actions = [
  //Attainment
  ...bard,
  ...depthswalker,
  ...dragon,
  ...magi,
  ...occultist,
  ...runewarden,
  ...sylvan,
  //Skills
  ...aeonics,
  ...artificing,
  ...bladedance,
  ...composition,
  ...curses,
  ...devotion,
  ...domination,
  ...dragoncraft,
  ...elementalism,
  ...emulation,
  ...evileye,
  ...ignition,
  ...knights,
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
  ...gear,
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
    action.matchType = matchType;
    action.user = groups?.user || defaultUser;
    action.target = groups?.target || defaultTarget;
    action.info = groups?.info || action.info;
    action.limb = groups?.limb || false;
    action.originalLine = result[0];
    action.args = result;
    return action;
  } else {
    return false;
  }
};

const evaluateText = (
  baseAction,
  text,
  matchType,
  defaultUser,
  defaultTarget
) => {
  const patterns = baseAction[matchType];
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

  if (!result) {
    return false;
  }

  // Clone only when a match is found to avoid unnecessary allocations
  const action = {
    ...baseAction,
    affs: baseAction.affs ? [...baseAction.affs] : [],
    tags: baseAction.tags ? [...baseAction.tags] : [],
  };

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
    eventStream.raiseEvent(`nexSkillMatch.${action.id}`, action);
    eventStream.raiseEvent(
      `nexSkillMatch.${action.id}.${action.matchType}`,
      action
    );
  }
  return action;
};

const checkSkills = (text) => {
  const profession = GMCP.Char.Status.class.toLowerCase();

  for (let i = 0; i < actions.length; i++) {
    const baseAction = actions[i];

    if (
      baseAction.profession?.includes(profession) ||
      baseAction.profession?.includes("general")
    ) {
      const firstMatch = evaluateText(
        baseAction,
        text,
        "firstPerson",
        "self",
        ""
      );
      if (firstMatch) {
        if (firstMatch.target.toLowerCase() === "you") {
          firstMatch.target = "self";
        }
        return finalizeCheck(firstMatch);
      }
    }

    const secondMatch = evaluateText(
      baseAction,
      text,
      "secondPerson",
      "",
      "self"
    );
    if (secondMatch) {
      return finalizeCheck(secondMatch);
    }

    const thirdMatch = evaluateText(baseAction, text, "thirdPerson", "", "");
    if (thirdMatch) {
      return finalizeCheck(thirdMatch);
    }
  }

  return checkNpcs(text);
  //console.log("checkSkills false", false);
  //return false;
};

const checkNpcs = (text) => {
  const { areaid, area } = GMCP.Location;

  const areaNpcs = npcsMap.get(areaid) ?? npcsMap.get(area) ?? [];

  for (let i = 0; i < areaNpcs.length; i++) {
    const baseNpc = areaNpcs[i];

    const firstMatch = evaluateText(
      baseNpc,
      text,
      "firstPerson",
      baseNpc.user,
      "self"
    );
    if (firstMatch) {
      return finalizeCheck(firstMatch, "npc");
    }
    const thirdMatch = evaluateText(
      baseNpc,
      text,
      "thirdPerson",
      baseNpc.user,
      "self"
    );
    if (thirdMatch) {
      return finalizeCheck(thirdMatch, "npc");
    }
  }

  return false;
};

export const nexSkills = {
  actions,
  npcs,
  npcsMap,

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
