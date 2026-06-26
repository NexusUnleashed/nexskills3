import { BaseDefinition } from "./BaseDefinition";

export class NpcDefinition extends BaseDefinition {
  constructor(options = {}) {
    const { user, areaId, areaName, ...rest } = options;
    super(rest);

    this.user = user || "";
    this.areaId = Array.isArray(areaId)
      ? [...areaId]
      : areaId === undefined
        ? false
        : areaId;
    this.areaName = areaName || "";
  }
}
