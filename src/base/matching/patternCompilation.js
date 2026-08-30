export const MIN_GATE_LENGTH = 5;
export const MAX_GATE_LENGTH = 30;
export const MIN_SUBSTRING_LENGTH = 8;

const REGEX_SYNTAX = new Set([
  ".",
  "^",
  "$",
  "*",
  "+",
  "?",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
]);

const SIMPLE_ESCAPES = Object.freeze({
  f: "\f",
  n: "\n",
  r: "\r",
  t: "\t",
  v: "\v",
});

const isHex = (value) => /^[0-9a-f]+$/i.test(value);
const characterLength = (value) => Array.from(value).length;

const readCodePoint = (source, index) => {
  const value = String.fromCodePoint(source.codePointAt(index));
  return { value, next: index + value.length };
};

export const decodeLiteralToken = (
  source,
  index,
  allowCodePointEscape = true
) => {
  if (index >= source.length) {
    return false;
  }

  if (source[index] !== "\\") {
    return REGEX_SYNTAX.has(source[index])
      ? false
      : readCodePoint(source, index);
  }

  const escaped = source[index + 1];
  if (escaped === undefined) {
    return false;
  }

  if (Object.hasOwn(SIMPLE_ESCAPES, escaped)) {
    return { value: SIMPLE_ESCAPES[escaped], next: index + 2 };
  }

  if (escaped === "0" && !/[0-9]/.test(source[index + 2] ?? "")) {
    return { value: "\0", next: index + 2 };
  }

  if (escaped === "x") {
    const digits = source.slice(index + 2, index + 4);
    if (digits.length === 2 && isHex(digits)) {
      return {
        value: String.fromCodePoint(Number.parseInt(digits, 16)),
        next: index + 4,
      };
    }
    return false;
  }

  if (escaped === "u") {
    if (source[index + 2] === "{") {
      if (!allowCodePointEscape) {
        return false;
      }
      const end = source.indexOf("}", index + 3);
      if (end === -1) {
        return false;
      }
      const digits = source.slice(index + 3, end);
      const codePoint = Number.parseInt(digits, 16);
      if (
        digits.length === 0 ||
        digits.length > 6 ||
        !isHex(digits) ||
        codePoint > 0x10ffff
      ) {
        return false;
      }
      return { value: String.fromCodePoint(codePoint), next: end + 1 };
    }

    const digits = source.slice(index + 2, index + 6);
    if (digits.length === 4 && isHex(digits)) {
      return {
        value: String.fromCharCode(Number.parseInt(digits, 16)),
        next: index + 6,
      };
    }
    return false;
  }

  // Escaped punctuation and spaces are identity literals. Alphanumeric
  // identity escapes are deliberately rejected because their meaning changes
  // between Unicode modes and several are regex metacharacters.
  if (!/[A-Za-z0-9]/.test(escaped)) {
    return { value: escaped, next: index + 2 };
  }

  return false;
};

const readQuantifier = (source, index) => {
  const first = source[index];
  if (first === "?" || first === "*") {
    return { min: 0, next: index + 1 };
  }
  if (first === "+") {
    return { min: 1, next: index + 1 };
  }
  if (first !== "{") {
    return false;
  }

  const match = source.slice(index).match(/^\{(\d+)(?:,(\d*)?)?\}/);
  if (!match) {
    return false;
  }

  return {
    min: Number.parseInt(match[1], 10),
    next: index + match[0].length,
  };
};

const hasTopLevelAlternation = (source) => {
  let depth = 0;
  let inClass = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (char === "\\") {
      index += 1;
      continue;
    }
    if (inClass) {
      if (char === "]") {
        inClass = false;
      }
      continue;
    }
    if (char === "[") {
      inClass = true;
    } else if (char === "(") {
      depth += 1;
    } else if (char === ")") {
      depth = Math.max(0, depth - 1);
    } else if (char === "|" && depth === 0) {
      return true;
    }
  }

  return false;
};

const extractExactText = (regex) => {
  const { source, flags } = regex;
  if (flags || source[0] !== "^" || source[source.length - 1] !== "$") {
    return false;
  }

  const tokens = [];
  let index = 1;
  const end = source.length - 1;
  while (index < end) {
    const token = decodeLiteralToken(source, index, false);
    if (!token || token.next > end) {
      return false;
    }
    tokens.push(token.value);
    index = token.next;
  }

  return index === end ? tokens.join("") : false;
};

const extractPrefix = (regex) => {
  const { source } = regex;
  if (
    regex.ignoreCase ||
    regex.multiline ||
    source[0] !== "^" ||
    hasTopLevelAlternation(source)
  ) {
    return false;
  }

  const tokens = [];
  let index = 1;
  while (index < source.length) {
    const token = decodeLiteralToken(
      source,
      index,
      regex.unicode || regex.unicodeSets
    );
    if (!token) {
      break;
    }

    const quantifier = readQuantifier(source, token.next);
    if (quantifier) {
      if (quantifier.min > 0) {
        tokens.push(token.value);
      }
      break;
    }

    tokens.push(token.value);
    index = token.next;
  }

  const prefix = tokens.join("");
  if (characterLength(prefix) < MIN_GATE_LENGTH) {
    return false;
  }
  return Array.from(prefix).slice(0, MAX_GATE_LENGTH).join("");
};

const skipCharacterClass = (source, start) => {
  for (let index = start + 1; index < source.length; index += 1) {
    if (source[index] === "\\") {
      index += 1;
    } else if (source[index] === "]") {
      return index + 1;
    }
  }
  return source.length;
};

const skipEscape = (source, index, allowCodePointEscape) => {
  const token = decodeLiteralToken(source, index, allowCodePointEscape);
  if (token) {
    return token.next;
  }
  if (source[index + 1] === "u" && source[index + 2] === "{") {
    const end = source.indexOf("}", index + 3);
    return end === -1 ? source.length : end + 1;
  }
  return Math.min(source.length, index + 2);
};

const extractRequiredSubstring = (regex) => {
  const { source } = regex;
  // This intentionally bails even for escaped or character-class pipes. It is
  // conservative, simple to audit, and only gives up an optimization.
  if (regex.ignoreCase || source.includes("|")) {
    return false;
  }

  let depth = 0;
  let current = [];
  let best = [];

  const finishRun = () => {
    if (characterLength(current.join("")) > characterLength(best.join(""))) {
      best = current;
    }
    current = [];
  };

  for (let index = 0; index < source.length; ) {
    const char = source[index];

    if (char === "\\") {
      if (depth > 0) {
        index = skipEscape(
          source,
          index,
          regex.unicode || regex.unicodeSets
        );
        continue;
      }

      const token = decodeLiteralToken(
        source,
        index,
        regex.unicode || regex.unicodeSets
      );
      if (!token) {
        finishRun();
        index = skipEscape(
          source,
          index,
          regex.unicode || regex.unicodeSets
        );
        continue;
      }

      const quantifier = readQuantifier(source, token.next);
      if (quantifier) {
        finishRun();
        if (quantifier.min > 0) {
          current = [token.value];
          finishRun();
        }
        index = quantifier.next;
        continue;
      }

      current.push(token.value);
      index = token.next;
      continue;
    }

    if (char === "[") {
      if (depth === 0) {
        finishRun();
      }
      index = skipCharacterClass(source, index);
      continue;
    }

    if (char === "(") {
      if (depth === 0) {
        finishRun();
      }
      depth += 1;
      index += 1;
      continue;
    }

    if (char === ")") {
      depth = Math.max(0, depth - 1);
      if (depth === 0) {
        finishRun();
      }
      index += 1;
      continue;
    }

    if (depth > 0) {
      index += readCodePoint(source, index).value.length;
      continue;
    }

    const token = decodeLiteralToken(
      source,
      index,
      regex.unicode || regex.unicodeSets
    );
    if (!token) {
      finishRun();
      index += 1;
      continue;
    }

    const quantifier = readQuantifier(source, token.next);
    if (quantifier) {
      finishRun();
      if (quantifier.min > 0) {
        current = [token.value];
        finishRun();
      }
      index = quantifier.next;
      continue;
    }

    current.push(token.value);
    index = token.next;
  }

  finishRun();
  const substring = best.join("");
  return characterLength(substring) >= MIN_SUBSTRING_LENGTH
    ? substring
    : false;
};

export const analyzeRegex = (regex) => {
  if (!(regex instanceof RegExp)) {
    throw new TypeError("Pattern analysis requires a RegExp");
  }

  const exactText = extractExactText(regex);
  const prefix = extractPrefix(regex);
  return Object.freeze({
    exactText,
    prefix,
    substring: prefix ? false : extractRequiredSubstring(regex),
  });
};

export const createLiteralMatch = (text) => {
  const match = [text];
  match.index = 0;
  match.input = text;
  match.groups = undefined;
  return match;
};
