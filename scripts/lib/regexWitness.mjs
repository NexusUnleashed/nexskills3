import { RegExpParser } from "@eslint-community/regexpp";

const parser = new RegExpParser({ ecmaVersion: 2022 });

const chooseClassCharacter = (node, flags) => {
  const expression = new RegExp(`^(?:${node.raw})$`, flags);
  const candidates = ["X", "a", "A", "0", "1", " ", "-", "_", "é"];
  const selected = candidates.find((candidate) => expression.test(candidate));
  if (selected === undefined) {
    throw new Error(`Cannot produce a character for ${node.raw}`);
  }
  return selected;
};

const createGenerator = (flags) => {
  const captures = new Map();

  const alternatives = (items) => generate(items[0]);

  const generate = (node) => {
    switch (node.type) {
      case "Pattern":
      case "Group":
        return alternatives(node.alternatives);
      case "Alternative":
        return node.elements.map(generate).join("");
      case "CapturingGroup": {
        const value = alternatives(node.alternatives);
        captures.set(node, value);
        return value;
      }
      case "Quantifier":
        return generate(node.element).repeat(node.min);
      case "Character":
        return String.fromCodePoint(node.value);
      case "CharacterSet":
        if (node.kind === "digit") {
          return node.negate ? "X" : "1";
        }
        if (node.kind === "space") {
          return node.negate ? "X" : " ";
        }
        if (node.kind === "word") {
          return node.negate ? "-" : "X";
        }
        if (node.kind === "any") {
          return "X";
        }
        return chooseClassCharacter(node, flags);
      case "CharacterClass":
        return chooseClassCharacter(node, flags);
      case "CharacterClassRange":
        return String.fromCodePoint(node.min.value);
      case "Backreference":
        return captures.get(node.resolved) ?? "";
      case "Assertion":
        if (node.kind === "lookahead" || node.kind === "lookbehind") {
          throw new Error(`Lookarounds are not supported: ${node.raw}`);
        }
        return "";
      default:
        throw new Error(`Unsupported regex AST node: ${node.type}`);
    }
  };

  return generate;
};

export const generateRegexWitness = (regex) => {
  const ast = parser.parsePattern(
    regex.source,
    0,
    regex.source.length,
    regex.unicode,
    regex.unicodeSets
  );
  const witness = createGenerator(regex.flags)(ast);
  const validator = new RegExp(regex.source, regex.flags);
  validator.lastIndex = 0;
  const result = validator.exec(witness);
  if (!result) {
    throw new Error(`Generated witness does not match /${regex.source}/${regex.flags}`);
  }
  return witness;
};
