import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "espree";
import { analyzeRegex } from "../src/base/matching/patternCompilation.js";

const ROOTS = [
  "src/base/areas",
  "src/base/general",
  "src/base/skills",
];
const MATCH_TYPES = new Set(["firstPerson", "secondPerson", "thirdPerson"]);

const listJavaScript = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory()
        ? listJavaScript(target)
        : target.endsWith(".js")
          ? [target]
          : [];
    })
  );
  return nested.flat();
};

const propertyName = (property) =>
  property.key.type === "Identifier" ? property.key.name : property.key.value;

const regexNodes = (value) => {
  if (value.type === "Literal" && value.regex) {
    return [value];
  }
  if (value.type === "ArrayExpression") {
    return value.elements.filter((element) => element?.regex);
  }
  return [];
};

const analyzeFile = async (file) => {
  const source = await readFile(file, "utf8");
  const ast = parse(source, {
    ecmaVersion: "latest",
    range: true,
    sourceType: "module",
  });
  const replacements = [];

  const visit = (node) => {
    if (!node || typeof node !== "object") {
      return;
    }

    if (
      node.type === "NewExpression" &&
      ["SkillDefinition", "NpcDefinition"].includes(node.callee?.name)
    ) {
      const options = node.arguments[0];
      if (options?.type === "ObjectExpression") {
        for (const property of options.properties) {
          if (
            property.type !== "Property" ||
            !MATCH_TYPES.has(propertyName(property))
          ) {
            continue;
          }
          for (const literal of regexNodes(property.value)) {
            const regex = new RegExp(
              literal.regex.pattern,
              literal.regex.flags
            );
            const { exactText } = analyzeRegex(regex);
            if (exactText !== false) {
              replacements.push({
                start: literal.range[0],
                end: literal.range[1],
                before: source.slice(literal.range[0], literal.range[1]),
                after: JSON.stringify(exactText),
              });
            }
          }
        }
      }
    }

    for (const [key, child] of Object.entries(node)) {
      if (key === "parent" || key === "range") {
        continue;
      }
      if (Array.isArray(child)) {
        child.forEach(visit);
      } else if (child && typeof child === "object") {
        visit(child);
      }
    }
  };

  visit(ast);
  if (replacements.length === 0) {
    return false;
  }

  let migrated = source;
  for (const replacement of replacements.toSorted((a, b) => b.start - a.start)) {
    migrated =
      migrated.slice(0, replacement.start) +
      replacement.after +
      migrated.slice(replacement.end);
  }

  const beforeLines = source.split(/\r?\n/);
  const afterLines = migrated.split(/\r?\n/);
  const changes = [];
  for (let index = 0; index < beforeLines.length; index += 1) {
    if (beforeLines[index] !== afterLines[index]) {
      changes.push({
        line: index + 1,
        before: beforeLines[index],
        after: afterLines[index],
      });
    }
  }

  return {
    file: file.replaceAll("\\", "/"),
    count: replacements.length,
    changes,
  };
};

const files = (await Promise.all(ROOTS.map(listJavaScript))).flat().sort();
const reports = (await Promise.all(files.map(analyzeFile))).filter(Boolean);
process.stdout.write(
  `${JSON.stringify(
    {
      count: reports.reduce((total, report) => total + report.count, 0),
      files: reports,
    },
    null,
    2
  )}\n`
);

if (process.argv.includes("--check") && reports.length > 0) {
  process.exitCode = 1;
}
