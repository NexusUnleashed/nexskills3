import {
  MAX_GATE_LENGTH,
  analyzeRegex,
  createLiteralMatch,
  decodeLiteralToken,
} from "../base/matching/patternCompilation";

describe("pattern compilation", () => {
  test("detects only fully anchored flagless literal regexes", () => {
    expect(analyzeRegex(/^plain text$/).exactText).toBe("plain text");
    expect(analyzeRegex(/^punctuation: \[ok\]\.\s*$/).exactText).toBe(false);
    expect(analyzeRegex(/^escaped \. \$ \\ \x41 \u0042$/).exactText).toBe(
      "escaped . $ \\ A B"
    );
    expect(analyzeRegex(/^$/).exactText).toBe("");
    expect(analyzeRegex(/^\bword boundary$/).exactText).toBe(false);
    expect(analyzeRegex(/^plain text$/g).exactText).toBe(false);
    expect(analyzeRegex(/plain text/).exactText).toBe(false);
  });

  test("decodes hex, Unicode, astral, whitespace, and punctuation tokens", () => {
    expect(decodeLiteralToken("\\x41", 0).value).toBe("A");
    expect(decodeLiteralToken("\\u0041", 0).value).toBe("A");
    expect(decodeLiteralToken("\\u{1f600}", 0).value).toBe("😀");
    expect(decodeLiteralToken("\\t", 0).value).toBe("\t");
    expect(decodeLiteralToken("\\.", 0).value).toBe(".");
    expect(decodeLiteralToken("\\q", 0)).toBe(false);
  });

  test("extracts and truncates safe anchored prefixes", () => {
    expect(analyzeRegex(/^abcdefgh (?<target>.+)$/).prefix).toBe("abcdefgh ");
    const long = analyzeRegex(
      /^abcdefghijklmnopqrstuvwxyz0123456789(?<target>.+)$/
    ).prefix;
    expect(Array.from(long)).toHaveLength(MAX_GATE_LENGTH);
    expect(analyzeRegex(/abcdefgh/).prefix).toBe(false);
    expect(analyzeRegex(/^abcdefgh$/i).prefix).toBe(false);
    expect(analyzeRegex(/^abcdefgh$/m).prefix).toBe(false);
    expect(analyzeRegex(/^\babcdefgh$/).prefix).toBe(false);
    expect(analyzeRegex(/^😀abcd/u).prefix).toBe("😀abcd");
  });

  test("rejects bypassing alternation but permits later grouped alternation", () => {
    expect(analyzeRegex(/^abcdef|uvwxyz$/).prefix).toBe(false);
    expect(analyzeRegex(/^abcdef(?:one|two)$/).prefix).toBe("abcdef");
  });

  test.each([
    [/^abcdefg?later$/, "abcdef"],
    [/^abcdefg*later$/, "abcdef"],
    [/^abcdefg+later$/, "abcdefg"],
    [/^abcdefg{0}later$/, "abcdef"],
    [/^abcdefg{0,3}later$/, "abcdef"],
    [/^abcdefg{1}later$/, "abcdefg"],
    [/^abcdefg{2,4}later$/, "abcdefg"],
  ])("handles prefix quantifiers in %s", (regex, expected) => {
    expect(analyzeRegex(regex).prefix).toBe(expected);
  });

  test("extracts only required top-level literal runs", () => {
    expect(
      analyzeRegex(/^(?<user>.+?) performs the required action now\.$/)
        .substring
    ).toBe(" performs the required action now.");
    expect(analyzeRegex(/^(?<user>.+?) short$/).substring).toBe(false);
    expect(analyzeRegex(/^(?<user>.+?) a\|required literal text$/).substring).toBe(
      false
    );
    expect(
      analyzeRegex(/^(?<user>.+?) beforex? required literal after$/).substring
    ).toBe(" required literal after");
    expect(
      analyzeRegex(/^(?<user>.+?) beforex+ required literal after$/).substring
    ).toBe(" required literal after");
  });

  test("literal matches have native observable match-array shape", () => {
    const result = createLiteralMatch("exact");
    expect(Array.from(result)).toEqual(["exact"]);
    expect(result.index).toBe(0);
    expect(result.input).toBe("exact");
    expect(result.groups).toBeUndefined();
  });
});
