import { BaseDefinition } from "./BaseDefinition";

export class SkillDefinition extends BaseDefinition {
  constructor(options = {}) {
    const { id, fullName, profession, skill, balance, ...rest } = options;
    super(rest);

    this.id = String(id || "").toLowerCase();
    this.fullName = fullName || "";
    this.profession = Array.isArray(profession) ? [...profession] : [];
    this.skill = skill || "";
    this.balance = balance === undefined ? null : balance;
  }
}
