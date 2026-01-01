export class DefinitionRegistry {
  constructor() {
    this.actions = [];
    this.npcs = [];
    this.npcsMap = new Map();
  }

  addAction(definition) {
    this.actions.push(definition);
    return definition;
  }

  addActions(definitions = []) {
    definitions.forEach((definition) => this.addAction(definition));
    return this;
  }

  addNpc(definition) {
    this.npcs.push(definition);
    return definition;
  }

  addNpcs(definitions = []) {
    definitions.forEach((definition) => this.addNpc(definition));
    return this;
  }

  buildNpcMap() {
    const map = new Map();

    this.npcs.forEach((npc) => {
      if (!npc.areaId) {
        if (!map.has(npc.areaName)) {
          map.set(npc.areaName, []);
        }
        map.get(npc.areaName).push(npc);
        return;
      }

      const ids = Array.isArray(npc.areaId) ? npc.areaId : [npc.areaId];
      ids.forEach((areaId) => {
        if (!map.has(areaId)) {
          map.set(areaId, []);
        }
        map.get(areaId).push(npc);
      });
    });

    this.npcsMap = map;
    return map;
  }
}
