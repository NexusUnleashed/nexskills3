export class BaseDefinition {
  get length() {
    return 0;
  }

  set length(value) {
    Object.defineProperty(this, "length", {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  constructor(options = {}) {
    const {
      patterns,
      firstPerson,
      secondPerson,
      thirdPerson,
      tags,
      affs,
      info,
      length,
      reaction,
      ...rest
    } = options;

    const normalized = BaseDefinition.normalizePatterns(patterns, {
      firstPerson,
      secondPerson,
      thirdPerson,
    });

    this.patterns = normalized;
    if (tags !== undefined) {
      this.tags = Array.isArray(tags) ? [...tags] : tags;
    }

    if (affs !== undefined) {
      this.affs = Array.isArray(affs) ? [...affs] : affs;
    }

    if (info !== undefined) {
      this.info = info;
    }

    if (length !== undefined) {
      this.length = length;
    }

    if (reaction !== undefined) {
      this.reaction = reaction;
    }

    Object.assign(this, rest);
  }

  static normalizePatterns(patterns, fallback = {}) {
    const source = patterns ?? fallback ?? {};
    return {
      firstPerson:
        source.firstPerson === undefined ? false : source.firstPerson,
      secondPerson:
        source.secondPerson === undefined ? false : source.secondPerson,
      thirdPerson: source.thirdPerson === undefined ? false : source.thirdPerson,
    };
  }
}
