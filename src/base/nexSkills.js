/* global eventStream, GMCP, nexGui */

import { DefinitionRegistry } from "./models/DefinitionRegistry";
//Attainment
import {
  bard,
  depthswalker,
  dragon,
  magi,
  occultist,
  runewarden,
  sylvan,
} from "./skills/attainment";
//Skills
import {
  aeonics,
  artificing,
  bladedance,
  composition,
  curses,
  devotion,
  domination,
  dragoncraft,
  elementalism,
  emulation,
  evileye,
  ignition,
  knights,
  memorium,
  occultism,
  oppression,
  pranks,
  propagation,
  shadowmancy,
  spirituality,
  subterfuge,
  tarot,
  tekura,
  venom,
  weaponmastery,
  weatherweaving,
  weaving,
  zeal,
} from "./skills";
//General
import { curing, general, talismans, gear, tattoos } from "./general";
//NPCS
import {
  ageiro,
  barrow,
  battlesite,
  crust,
  emberveil,
  grukaiSwamp,
  istarion,
  judgementMountain,
  lupineHuntingGrounds,
  mannamot,
  nur,
  riagath,
  tapoa,
  tirMurann,
  tuar,
  underworld,
  yggdrasil,
} from "./areas";

const registry = new DefinitionRegistry();

registry.addNpcs([
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
]);
registry.buildNpcMap();

registry.addActions([
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
]);

const { actions, npcs, npcsMap } = registry;

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
    action.match = result;
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
  const patterns =
    baseAction.patterns?.[matchType] ?? baseAction[matchType];
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
    // A throwing reaction must not take the match down with it. eventStream
    // guards listener callbacks the same way, but this runs before any raise.
    try {
      action.reaction(action);
    } catch (error) {
      console.error(
        "nexSkills reaction error:\nskill: %s\nid: %s\nline: %s\nerror: %o",
        action.skill,
        action.id,
        action.originalLine,
        error
      );
      eventStream.raiseEvent("nexskill.error.reaction", { action, error });
    }
  }

  // This check allows some action.reactions to void the match
  if (!action.matchType) {
    // Suppression is deliberate, but silent suppression is undebuggable.
    eventStream.raiseEvent("nexskill.match.voided", action);
    return false;
  }

  eventStream.raiseEvent("nexskill.match", action);

  if (type === "npc") {
    eventStream.raiseEvent("nexskill.match.npc", action);
    return action;
  }

  // Raised before the skill guard below: the match is a skill match by virtue
  // of the code path, whether or not the definition populated its skill field.
  eventStream.raiseEvent("nexskill.match.skill", action);

  // Empty skill/id would produce a name with an empty segment, which registers
  // and dispatches silently. Skip those levels instead.
  if (!action.eventSkill) {
    return action;
  }

  eventStream.raiseEvent(action.eventSkill, action);

  // Precomputed unless a reaction rewrote the id (bladedance, occultism compel).
  const eventAction =
    action.id === action.eventActionId
      ? action.eventAction
      : `${action.eventSkill}.${action.id}`;

  if (eventAction) {
    eventStream.raiseEvent(eventAction, action);
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

// The active NPC set is resolved lazily, so nexskill.area.changed means "the
// area nexSkills is matching against changed" - it is observed on the first
// line to reach checkNpcs after a transition, not at the moment of the move.
// Caching it also drops the two npcsMap lookups from every unmatched line.
let activeAreaKey;
let activeAreaNpcs = [];

const resolveAreaNpcs = () => {
  const { areaid, area } = GMCP.Location;
  // Preserves the original areaid-then-area resolution order.
  const key = npcsMap.has(areaid) ? areaid : area;

  if (key === activeAreaKey) {
    return activeAreaNpcs;
  }

  const previous = activeAreaKey;
  activeAreaKey = key;
  activeAreaNpcs = npcsMap.get(key) ?? [];

  eventStream.raiseEvent("nexskill.area.changed", {
    area: key,
    previous,
    npcs: activeAreaNpcs,
  });

  return activeAreaNpcs;
};

const checkNpcs = (text) => {
  const areaNpcs = resolveAreaNpcs();

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
