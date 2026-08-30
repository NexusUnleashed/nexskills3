import { actionDefinitions, npcDefinitions } from "./definitionCorpus";
import { createMatcher } from "./matching/createMatcher";
import { DefinitionRegistry } from "./models/DefinitionRegistry";

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

export const createNexSkills = ({
  actions = actionDefinitions,
  npcs = npcDefinitions,
  environment,
  exactIndexMode = "map",
} = {}) => {
  const builder = new DefinitionRegistry({ exactIndexMode });
  builder.addActions(actions);
  builder.addNpcs(npcs);
  const registry = builder.finalize();
  const matcher = createMatcher(registry, environment);

  return Object.freeze({
    actions: registry.actions,
    npcs: registry.npcs,
    checkSkills: matcher.checkSkills,
    checkNpcs: matcher.checkNpcs,
    find(id) {
      const skills = registry.actions.filter(
        (definition) => definition.id === id.toLowerCase()
      );
      console.log(skills);
      return skills;
    },
  });
};

export const nexSkills = createNexSkills();
globalThis.nexSkills = nexSkills;
