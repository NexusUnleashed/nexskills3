const EMPTY = Object.freeze([]);

const addToMap = (map, key, entry) => {
  let entries = map.get(key);
  if (!entries) {
    entries = [];
    map.set(key, entries);
  }
  entries.push(entry);
};

const freezeMapLists = (map) => {
  for (const entries of map.values()) {
    Object.freeze(entries);
  }
};

class CandidateIndex {
  #exactByText;
  #prefixBuckets;
  #exactIndexMode;

  constructor(exactByText, prefixBuckets, ungated, exactIndexMode) {
    this.#exactByText = exactByText;
    this.#prefixBuckets = prefixBuckets;
    this.#exactIndexMode = exactIndexMode;
    this.ungated = ungated;
    Object.freeze(this);
  }

  exact(text) {
    const key =
      this.#exactIndexMode === "map" ? text : (text[0] ?? "");
    return this.#exactByText.get(key) ?? EMPTY;
  }

  prefixed(text) {
    return text.length ? (this.#prefixBuckets.get(text[0]) ?? EMPTY) : EMPTY;
  }
}

export const buildCandidateIndex = (entries, { exactIndexMode = "map" } = {}) => {
  if (exactIndexMode !== "map" && exactIndexMode !== "bucket") {
    throw new TypeError(`Unknown exact index mode: ${exactIndexMode}`);
  }
  const exactByText = new Map();
  const prefixBuckets = new Map();
  const ungated = [];

  for (const entry of entries) {
    if (entry.exactText !== false) {
      const key =
        exactIndexMode === "map"
          ? entry.exactText
          : (entry.exactText[0] ?? "");
      addToMap(exactByText, key, entry);
    } else if (entry.gate) {
      addToMap(prefixBuckets, entry.bucketKey, entry);
    } else {
      ungated.push(entry);
    }
  }

  freezeMapLists(exactByText);
  freezeMapLists(prefixBuckets);
  Object.freeze(ungated);

  return new CandidateIndex(
    exactByText,
    prefixBuckets,
    ungated,
    exactIndexMode
  );
};

export const findCandidateMatch = (index, text, evaluate) => {
  const exact = index.exact(text);
  const prefixed = index.prefixed(text);
  const ungated = index.ungated;

  let exactIdx = 0;
  let prefixIdx = 0;
  let ungatedIdx = 0;

  while (
    exactIdx < exact.length ||
    prefixIdx < prefixed.length ||
    ungatedIdx < ungated.length
  ) {
    const exactOrder = exact[exactIdx]?.order ?? Number.POSITIVE_INFINITY;
    const prefixOrder =
      prefixed[prefixIdx]?.order ?? Number.POSITIVE_INFINITY;
    const ungatedOrder =
      ungated[ungatedIdx]?.order ?? Number.POSITIVE_INFINITY;

    let entry;
    if (exactOrder <= prefixOrder && exactOrder <= ungatedOrder) {
      entry = exact[exactIdx];
      exactIdx += 1;
      if (entry.exactText !== text) {
        continue;
      }
    } else if (prefixOrder <= ungatedOrder) {
      entry = prefixed[prefixIdx];
      prefixIdx += 1;
    } else {
      entry = ungated[ungatedIdx];
      ungatedIdx += 1;
    }

    const result = evaluate(entry, text);
    if (result) {
      return result;
    }
  }

  return false;
};
