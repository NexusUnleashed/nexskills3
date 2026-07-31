import { BaseDefinition } from "./BaseDefinition";

const EVENT_SKILL_PREFIX = "nexskill.match.skill";

export class SkillDefinition extends BaseDefinition {
  constructor(options = {}) {
    const { id, fullName, profession, skill, balance, ...rest } = options;
    super(rest);

    this.id = String(id || "").toLowerCase();
    this.fullName = fullName || "";
    this.profession = Array.isArray(profession) ? [...profession] : [];
    this.skill = skill || "";
    this.balance = balance === undefined ? null : balance;

    // Event names are static per definition, so build them once here instead of
    // allocating template strings on every match. A missing skill or id yields
    // "" so finalizeCheck can skip the raise rather than emit a name with an
    // empty segment (eventStream only rejects empty names, not empty segments).
    this.eventSkill = this.skill ? `${EVENT_SKILL_PREFIX}.${this.skill}` : "";
    this.eventAction =
      this.eventSkill && this.id ? `${this.eventSkill}.${this.id}` : "";
    // A few reactions rewrite action.id at match time; finalizeCheck compares
    // the live id against this to know whether eventAction is still accurate.
    this.eventActionId = this.id;

    if (!this.skill || !this.id) {
      console.warn(
        `nexSkills: definition missing ${!this.skill ? "skill" : "id"}, ` +
          "action-level events will not be raised for it",
        this
      );
    }
  }
}
