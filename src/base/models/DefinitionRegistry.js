import {
  MATCH_FIRST,
  compileDefinitionEntries,
  freezeDefinition,
} from "../matching/entryCompilation";
import { buildCandidateIndex } from "../matching/candidateIndex";

class FinalizedDefinitionRegistry {
  #areaRecords;
  #actionEntries;

  constructor(actions, npcs, actionEntries, areaRecords, exactIndexMode) {
    this.actions = actions;
    this.npcs = npcs;
    this.#actionEntries = actionEntries;
    this.#areaRecords = areaRecords;
    this.exactIndexMode = exactIndexMode;
    this.areaKeys = Object.freeze([...areaRecords.keys()]);
    this.emptyAreaRecord = Object.freeze({
      key: undefined,
      npcs: Object.freeze([]),
      index: buildCandidateIndex([], { exactIndexMode }),
    });
    Object.freeze(this);
  }

  hasArea(key) {
    return this.#areaRecords.has(key);
  }

  getAreaRecord(key) {
    return this.#areaRecords.get(key) ?? this.emptyAreaRecord;
  }

  buildActionIndex(normalizedClass) {
    return buildCandidateIndex(
      this.#actionEntries.filter(
        (entry) =>
          entry.matchTypeIdx !== MATCH_FIRST ||
          entry.firstPersonProfessions.includes(normalizedClass) ||
          entry.firstPersonProfessions.includes("general")
      ),
      { exactIndexMode: this.exactIndexMode }
    );
  }
}

export class DefinitionRegistry {
  constructor({ exactIndexMode = "map" } = {}) {
    this.actions = [];
    this.npcs = [];
    this.snapshot = false;
    this.exactIndexMode = exactIndexMode;
  }

  addAction(definition) {
    this.#assertMutable();
    this.actions.push(definition);
    return definition;
  }

  addActions(definitions = []) {
    this.#assertMutable();
    definitions.forEach((definition) => this.addAction(definition));
    return this;
  }

  addNpc(definition) {
    this.#assertMutable();
    this.npcs.push(definition);
    return definition;
  }

  addNpcs(definitions = []) {
    this.#assertMutable();
    definitions.forEach((definition) => this.addNpc(definition));
    return this;
  }

  #assertMutable() {
    if (this.snapshot) {
      throw new TypeError("DefinitionRegistry is already finalized");
    }
  }

  finalize() {
    if (this.snapshot) {
      return this.snapshot;
    }

    this.actions.forEach(freezeDefinition);
    this.npcs.forEach(freezeDefinition);
    const actions = Object.freeze([...this.actions]);
    const npcs = Object.freeze([...this.npcs]);
    const actionEntries = compileDefinitionEntries(actions, "action");
    const npcEntries = compileDefinitionEntries(npcs, "npc");
    const areaDefinitions = new Map();

    npcs.forEach((npc) => {
      if (!npc.areaId) {
        if (!areaDefinitions.has(npc.areaName)) {
          areaDefinitions.set(npc.areaName, []);
        }
        areaDefinitions.get(npc.areaName).push(npc);
        return;
      }

      const ids = Array.isArray(npc.areaId) ? npc.areaId : [npc.areaId];
      ids.forEach((areaId) => {
        if (!areaDefinitions.has(areaId)) {
          areaDefinitions.set(areaId, []);
        }
        areaDefinitions.get(areaId).push(npc);
      });
    });

    const areaRecords = new Map();
    for (const [key, areaNpcs] of areaDefinitions) {
      const frozenNpcs = Object.freeze([...areaNpcs]);
      const definitions = new Set(frozenNpcs);
      const entries = npcEntries.filter((entry) => definitions.has(entry.def));
      areaRecords.set(
        key,
        Object.freeze({
          key,
          npcs: frozenNpcs,
          index: buildCandidateIndex(entries, {
            exactIndexMode: this.exactIndexMode,
          }),
        })
      );
    }

    // Release the mutable builder arrays. Public consumers receive only the
    // finalized copies and no authoritative Map is exposed.
    this.actions = actions;
    this.npcs = npcs;
    this.snapshot = new FinalizedDefinitionRegistry(
      actions,
      npcs,
      actionEntries,
      areaRecords,
      this.exactIndexMode
    );
    Object.freeze(this);
    return this.snapshot;
  }
}
