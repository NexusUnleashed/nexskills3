# Hot-path matching optimization

Status: implemented and verified
Date: 2026-08-29; implemented 2026-08-30
Scope: `checkSkills` / `checkNpcs` and definition matching in
[`src/base/nexSkills.js`](../../src/base/nexSkills.js)

---

## Executive decision

`nexSkills` performs hundreds of regex matches for every visible game line.
The current registered corpus is unusually suitable for compilation into a much
smaller ordered candidate set.

Implement the optimization around these decisions:

1. **Make pattern intent explicit.** A string is an exact literal; a `RegExp`
   is a regex; an array is an ordered multi-line sequence whose elements are
   independently compiled.
2. **Convert every provably exact regex at the definition source.** The finalized
   registered corpus contained 511 lossless regex-to-string conversions. Together
   with 50 existing strings, it now has 561 exact-literal elements. One additional
   exact regex in an unregistered draft module was also converted.
3. **Finalize an immutable registry.** Definitions are static after module
   startup. Compile once, freeze the matching inputs, and remove public mutation
   as an index-invalidation problem.
4. **Use full-text exact lookup.** Exact single-line entries belong in a
   `Map<string, Entry[]>`, not a regex scan or merely a first-character bucket.
5. **Gate remaining regexes conservatively.** Use anchored literal prefixes
   where available and required literal substrings for capture-initial patterns.
   A missed optimization is acceptable; a false negative is not.
6. **Preserve first-match order.** Merge exact, prefix-bucketed, and ungated
   candidate lists by stable source order before evaluation.
7. **Make verification reproducible.** Check in the corpus audit, differential
   harness, and benchmarks. Test positive witnesses for the patterns affected by
   gates, not only exact literals.

The existing prototype measured approximately **9.5x faster** on its Node
benchmark, reducing the unmatched path from about 55 us/line to about 5 us/line.
Treat that as strong directional evidence. The prototype and benchmark harness
were not committed, so the implementation must recreate and check in a
reproducible baseline before using those figures as acceptance evidence.

---

## Goals

- Minimize synchronous work per non-prompt, non-gagged game line.
- Preserve skill/NPC resolution order and all observable match/event behavior,
  except for the deliberate string-pattern and multiline-input contracts below.
- Make literal versus regex intent obvious in the definitions.
- Keep all pattern analysis and index construction off the per-line path.
- Make stale indexes impossible by construction.
- Provide tests that prevent unsafe gates and needless literal regexes from
  entering the corpus later.

## Non-goals

- Colour (`fg`/`bg`) filtering. `nexSkills` receives text rather than a parsed
  line; adding colours is a cross-package API change and the text indexes already
  capture most of the available benefit.
- A wrapper-object redesign for every pattern. The existing `patterns` fields
  can express the required contract with strings, regexes, and arrays.
- Caching anything derived from the live cloned `action.id`; reactions can
  rewrite it.

---

## Invocation and hot-path constraints

The Nexus call site lives in the `eventStream3` `.nxs` payload as the
**"Master Skill Trigger"**:

```js
if (
  typeof nexSkills === "undefined" ||
  nexusclient.current_line.is_prompt ||
  nexusclient.current_line.gag
) {
  return;
}
nexSkills.checkSkills(nexusclient.current_line.parsed_line.text());
```

Therefore:

- `checkSkills` runs once per visible non-prompt, non-gagged line.
- It runs synchronously inside `process_lines`, blocking rendering during bursts.
- The supplied `text` is the text of `nexusclient.current_line`. This becomes an
  explicit API invariant so a multi-line matcher can use `text` for its first
  element and read only later elements from `current_block`.
- NPC matching remains a fallback: it runs only after no skill entry matches.
- Area-change resolution and `nexskill.area.changed` remain lazy: an area change
  is observed only when execution first reaches `checkNpcs` in the new area.

The old multiline unit test deliberately passes unrelated `text` because the
current evaluator ignores the argument for arrays. Update that test. Supporting
an argument that disagrees with `current_line` has no production use and prevents
safe first-element gating.

---

## Pre-implementation matcher and measured work

The counts in this subsection describe the original matcher and registration
set retained by the checked-in legacy snapshot. Final corpus counts after
resolving omitted modules are recorded in the next section.

[`checkSkills`](../../src/base/nexSkills.js#L288-L330) linearly walks all 354
registered actions. For each definition it may evaluate `firstPerson`, then
always evaluates `secondPerson` and `thirdPerson` when present. Only
`firstPerson` is profession-gated. An unmatched skill scan then reaches
[`checkNpcs`](../../src/base/nexSkills.js#L364-L392), which linearly walks the
active area's NPC definitions.

For an unmatched line as `Occultist` in area `417`:

| Work                                            | Count   |
| ----------------------------------------------- | ------- |
| Action `firstPerson` matches                    | 82      |
| Action `secondPerson` matches                   | 180     |
| Action `thirdPerson` matches                    | 239     |
| NPC `firstPerson` matches                       | 138     |
| NPC `thirdPerson` matches                       | 85      |
| **Total match/regex executions**                | **724** |
| `profession.includes()` calls after `||` short-circuit | 631 |

Other repeated costs:

- `GMCP.Char.Status.class.toLowerCase()` runs on every line.
- `resolveAreaNpcs` avoids rebuilding the active array, but still calls
  `npcsMap.has(areaid)` on every unmatched line before checking the cached key.
- The nested definition/pattern property lookup is repeated for every visit.
- The original string patterns are passed to `String.prototype.match`, so
  JavaScript recompiles/interprets them as regex source rather than comparing
  them as literals.

The existing code already does two useful things that must remain:

- it clones a definition only after a successful match;
- it resolves and caches the active NPC array lazily.

---

## Corpus snapshot

These are the final registered-corpus counts produced by
`npm run audit:corpus`. A "pattern" is one `(definition, matchType)` slot. The
21 array slots contain 42 individual elements.

| Property                                  | Value                       |
| ----------------------------------------- | --------------------------- |
| Action definitions                        | 373                         |
| NPC definitions                           | 505                         |
| NPC map keys                              | 29                          |
| Pattern slots                             | 1,314 (707 action, 607 NPC) |
| Individual pattern elements               | 1,335                       |
| Regex/string elements after migration     | 774 / 561                   |
| Multi-line array slots/elements            | 21 / 42                     |
| Fully literal regexes after migration      | 0                           |
| **Registered regex-to-string conversions** | **511**                     |
| **Registered exact-literal elements**      | **561**                     |
| Compiled exact-index entries               | 550                         |
| Compiled prefix-gated entries              | 519                         |
| Compiled required-substring entries        | 237                         |
| Compiled completely ungated regex entries  | 8                           |

Lossless conversion breakdown:

| Scope   | Single-line exact regexes | Exact array elements | Existing strings |
| ------- | ------------------------- | -------------------- | ---------------- |
| Actions | 81                        | 7                    | 0                |
| NPCs    | 411                       | 12                   | 50               |

Compiled prefix-gate lengths (capped at 30 characters):

| Percentile | Literal prefix length |
| ---------- | --------------------- |
| p25        | 28                    |
| median     | 30                    |
| p75        | 30                    |
| p90        | 30                    |
| max        | 30                    |

The corpus is a near-best case for exact lookup and conservative gating: almost
everything is case-sensitive and anchored, while the capture-initial family has
long required text later in the expression.

The 528 prefix-gated regex elements span 20 first-character buckets. Compiled
entries use 519 of those gates because only element zero can gate a sequence.
The element distribution remains skewed:

```text
Y:165  A:130  T:52  W:35  R:21  L:20  S:20  O:18  D:10  ":9
B:8  C:8  F:7  H:7  G:5  I:3  M:3  P:3  V:3  U:1
```

`Y` and `A` remain the dominant buckets. Bucketing prunes candidates before the
full `startsWith` gate, while the full-text exact map handles literal entries.

The finalized element corpus has 238 conservatively extractable required
substrings (237 compiled entry gates). Their median required substring is 52
characters and the maximum is 181. The gate-witness test positively exercises
every one.

### Corpus-integrity prerequisite

Before freezing the registry and recording final benchmarks, the implementation
resolved these exported-but-unregistered modules:

- areas: `dustsongSpire`, `elementalEmbassy`;
- skills: `crystalism`, `psionics`;
- attainment: `psion`, `unnamable`.

All six modules are valid and are now registered. The Psion attainment
`pulverize` definition's erroneous Bard profession was corrected to Psion. The
final counts above include them.

---

## Existing benchmark evidence

Original prototype measurements used 200,000 lines after a 10,000-line warmup:

| Configuration, 0%-match corpus      | us/line |
| ----------------------------------- | ------- |
| Current implementation              | 54.9    |
| Structural cleanup only             | 33.5    |
| All prototype techniques            | 4.75    |
| Without first-character bucket      | 7.03    |
| Without substring gate              | 10.43   |
| Without prefix and substring gates  | 12.10   |
| Without exact-string downgrade      | 4.76    |

Final prototype results were 5.77 us/line on its 5%-match corpus and 4.74
us/line on its 0%-match corpus. Regex executions fell from 724 to approximately
20 per unmatched line.

An independent audit of the current implementation measured approximately 50.1
us/line on Node 22.17 using a comparable 10,000-line warmup and 200,000 generic
unmatched lines. That corroborates the hotspot, but absolute timings vary by
engine and hardware.

Interpret the exact-string ablation correctly: a 0%-match corpus rejects almost
all exact entries at their prefix gates, before either equality or regex runs.
The 4.75 versus 4.76 result therefore says exact entries were already cheap on
misses in that prototype. It does **not** measure successful exact matches and
is not evidence against converting 492 needless regexes.

The new design's full-text exact map should also improve misses: one map lookup
replaces walking all exact entries in the matching first-character bucket.

The often-quoted 1,000-line burst estimate—about 55 ms today versus about 6 ms
afterward—is a Node-benchmark extrapolation, not a Nexus browser measurement.
Keep it labelled as an estimate until an end-to-end browser trace confirms it.

The prototype also reported zero disagreements across 143,700 comparisons
(25 classes x 12 areas x 479 extracted-literal lines), comparing only
`(definition id, matchType)`. That is useful smoke evidence but not sufficient
proof for this implementation:

- `classList` omits six colour-specific dragon profession values present in
  definitions;
- 12 representative areas do not exercise all 28 `npcsMap` keys;
- an extracted-literal corpus does not provide a positive match witness for each
  of the 228 capture-initial substring-gated patterns;
- comparing only ID/type cannot detect changed captures, match-array shape, or
  event behavior.

The verification matrix below closes each gap.

---

## Pattern contract

### Exact literal

A string means one complete line and matches only when:

```js
text === pattern
```

It is not passed to `String.prototype.match` and is never treated as regex
source.

The compiler must still recognize a fully anchored, flagless, completely
literal regex as an exact matcher defensively. Tests must reject such definitions
so source files remain truthful, but production behavior should not become slow
because one escaped the audit.

### Regex

A `RegExp` means regex semantics are required. Regex execution must start from
`lastIndex = 0` so stateful expressions cannot leak state between lines. Prefix
or substring gates are metadata; the regex remains the authority.

Case-insensitive expressions receive no case-sensitive gate. Exact conversion
is limited to patterns for which equality is provably equivalent; the current
lossless set is fully anchored, completely literal, and flagless.

### Multi-line sequence

An array means all elements must match consecutive lines in order.

- Compile every element independently as exact or regex.
- Evaluate element 0 against the supplied `text`.
- Evaluate element `i > 0` against
  `current_block[current_line.index + i].parsed_line.text()`.
- If a required later line is outside the block, return `false` rather than
  throwing.
- Preserve current result semantics: `processMatch` receives the match result
  from the final sequence element.
- A sequence may be indexed by a provable gate on its first element. Later
  elements cannot gate whether the sequence is considered for the current line.

### Existing 50 strings

The 50 strings reside in Dustsong Spire NPC definitions and are complete game
lines. Before this implementation their punctuation was interpreted as regex
syntax and the patterns could match substrings. Under the new contract they are
exact.

Review them during migration:

- If exact text is intended, retain the string and add a positive fixture plus
  prefixed, suffixed, and punctuation-near-miss negatives.
- If regex behavior is genuinely intended, rewrite the value explicitly as a
  `RegExp`.

This is a deliberate semantic correction, not an accidental side effect of the
optimization.

---

## Immutable registry lifecycle

The registry is populated only during module initialization. Model that truth
directly:

1. `DefinitionRegistry.addActions` / `addNpcs` populate a mutable builder.
2. `DefinitionRegistry.finalize()` validates definitions, compiles patterns,
   builds area membership, freezes matching inputs, and returns an immutable
   compiled snapshot.
3. Matching uses only the finalized snapshot. Runtime additions, removals,
   reordering, or pattern/profession mutation are unsupported.

This is preferable to proxying arrays or trying to detect arbitrary mutations.
The current public mutation paths must change:

- [`App.jsx`](../../src/components/App.jsx#L72) must sort a copy rather than
  sorting `nexSkills.actions` in place.
- Tests must construct an isolated registry/matcher fixture rather than
  `push`/`splice` the global `nexSkills.actions` array.
- Public definition lists may remain available as frozen read-only arrays for
  the reference UI. Do not expose a mutable authoritative `Map`.

Freeze the registry arrays, the normalized `patterns` object, profession arrays,
and other definition-owned arrays used by compilation. Matches still clone the
base definition and clone `affs`/`tags` before reactions, as they do today.

If runtime registration is ever required later, add an explicit builder API
that produces a new finalized snapshot. Do not reintroduce direct mutation and
dirty-index bookkeeping into the per-line matcher.

---

## Compiled representation

Separate compilation/indexing from runtime matching. Suggested modules:

- `matching/patternCompilation.js`: literal decoding and safe gate analysis;
- `matching/entryCompilation.js`: definition/match-type normalization;
- `matching/candidateIndex.js`: exact maps, buckets, and ordered merge;
- `matching/createMatcher.js`: class/area selection and runtime evaluation.

Names may vary, but the responsibilities should remain separate and unit
testable.

One flat entry represents one `(definition, matchType)` slot:

```js
{
  def,
  order,
  matchTypeIdx,
  matcherKind,
  pattern,           // string, RegExp, or compiled element array
  gate,              // anchored prefix or false
  sub,               // required substring or false
  bucketKey,         // first required character or false
  defaultUser,
  defaultTarget,
  firstPersonProfessions // first-person action entries only
}
```

Use numeric internal enums for `matchTypeIdx` and `matcherKind`, mapping to the
public strings only after a hit. Keep the object flat; the runtime loop should
not chase nested compilation objects.

Assign `order` from current semantics:

- actions: definition order, then `firstPerson`, `secondPerson`, `thirdPerson`;
- NPCs: active-area definition order, then `firstPerson`, `thirdPerson`.

Only action `firstPerson` is profession-filtered. Action `secondPerson` and
`thirdPerson` remain eligible for every class exactly as today.

---

## Candidate indexes

For an ordered entry set, build:

```js
{
  exactByText: Map<string, Entry[]>,
  prefixBuckets: Map<string, Entry[]>,
  ungated: Entry[]
}
```

Classification:

- A direct exact literal goes in `exactByText.get(literal)`.
- A multi-line entry whose first element is exact also goes in
  `exactByText.get(firstLiteral)`; the lookup proves only element 0, so the
  evaluator still checks later elements.
- A regex or multi-line first regex with a prefix gate goes in
  `prefixBuckets.get(gate[0])`.
- Substring-gated and completely ungated entries go in `ungated` because their
  required text need not begin at character zero.

Every stored list is already sorted by `order`.

At runtime, obtain at most three lists:

```js
const exact = index.exactByText.get(text) ?? EMPTY;
const prefixed = text.length
  ? index.prefixBuckets.get(text[0]) ?? EMPTY
  : EMPTY;
const ungated = index.ungated;
```

Perform a three-way merge by `order`. Evaluate each selected entry as follows:

- exact single-line: synthesize its match immediately;
- exact-first multi-line: element 0 is already satisfied; evaluate elements 1+;
- prefix entry: require `text.startsWith(gate)`, then run the regex/sequence;
- substring entry: require `text.includes(sub)`, then run the regex/sequence;
- ungated entry: run normally.

Return on the first successful entry. Never scan an exact bucket for a different
string, and never concatenate/sort candidate arrays per line.

### Per-class action indexes

Cache a `CandidateIndex` by normalized class. Build it lazily the first time a
class is observed, using the immutable master action entries. Filtering happens
only during index creation:

- include eligible/general `firstPerson` entries;
- include every `secondPerson` and `thirdPerson` entry.

Cache both the raw GMCP class and normalized class:

```js
const rawClass = GMCP.Char.Status.class;
if (rawClass !== activeRawClass) {
  activeRawClass = rawClass;
  activeClass = rawClass.toLowerCase();
  activeActionIndex = actionIndexes.get(activeClass) ?? buildClassIndex(...);
}
```

This removes per-line lowercasing. Build verification classes from every unique
profession token in the definitions, not only `classList`; the current corpus
also includes six colour-specific dragon professions.

### Per-area NPC indexes

Compile each NPC definition once, then build a `CandidateIndex` for every
`npcsMap` key during finalization. Cache the raw `areaid` and `area` values before
performing map lookup:

```js
if (areaid === activeAreaId && area === activeAreaName) {
  return activeNpcIndex;
}
```

Only on a location-value change should resolution call `npcsMap.has`, select the
`areaid`-then-`area` key, update the active index, and raise
`nexskill.area.changed`. Each compiled area record must retain its frozen NPC
definition list for the event payload. Preserve that payload and the previous
resolved key.

---

## Safe pattern analysis

### Prefix gates

Port the tested literal decoding logic from
[`nexaction3/src/base/nexaction/patternCompilation.js`](../../../nexaction3/src/base/nexaction/patternCompilation.js).

A prefix gate is allowed only when:

- the value is a `RegExp`;
- it is not case-insensitive;
- it is not multiline (`m` would allow `^` to match after a line break);
- its source begins with `^`;
- the parser can prove a leading literal run.

Keep:

```js
MIN_GATE_LENGTH = 5;
MAX_GATE_LENGTH = 30;
```

The existing sweep found 30 characters at the performance knee. Decode escaped
literal punctuation, simple escapes, `\xHH`, `\uHHHH`, and `\u{...}`. Stop at
any construct whose literal value is not certain.

Do not port the nexAction analyzer blindly. Extend it with two safety rules:

- Scan the whole source for alternation at parenthesis depth zero (outside
  character classes). A top-level branch can bypass the apparent prefix, as in
  `^abc|def`, so emit no prefix. Alternation inside a later group does not bypass
  a prefix shared before that group.
- Inspect a quantifier immediately following the final literal token. For a
  zero-minimum quantifier (`?`, `*`, `{0}`, `{0,n}`), remove the quantified token
  from the prefix. For a positive-minimum quantifier, one occurrence may remain.
  In both cases stop the prefix at that token; do not append later literals
  across a variable-width repetition.

### Required-substring gates

For entries without a prefix, derive a substring only when it is guaranteed to
occur in every regex match.

The extractor must be token-aware rather than trimming raw string characters:

1. Reject case-insensitive regexes.
2. Conservatively emit no substring if the source contains alternation `|`.
   Bailing even for an escaped or character-class `|` loses only optimization
   and keeps the rule easy to audit.
3. Parse escapes and character classes correctly; a parenthesis or quantifier
   inside a character class is not structural syntax.
4. Track parenthesis depth and collect literal runs only at depth zero. Ignore
   group contents, including captures and lookarounds.
5. Treat character classes, wildcard/meta escapes, anchors, and unknown escapes
   as run boundaries.
6. Track decoded literal **tokens**, not UTF-16 code units, so removing a
   quantified astral escape cannot leave half a surrogate pair.
7. A quantified token always ends the current literal run. Remove the token from
   that run before finalizing it; never concatenate literals from opposite sides
   of a quantifier. For a zero-minimum quantifier (`?`, `*`, `{0}`, or `{0,n}`),
   the token is not required. For `+` or `{n,m}` with `n >= 1`, the token itself
   may be recorded as a separate one-token required run, but it must not bridge
   surrounding runs. The earlier blanket rule that every `{...}` quantifier is
   optional is incorrect.
8. Select the longest remaining required literal run and require at least eight
   decoded characters. Otherwise emit `sub: false`.

Apply a prefix gate first when one exists; use a substring only when no prefix is
available. Gate failure skips regex execution. Gate success never replaces the
regex.

### Exact-regex audit

The analyzer should also report `exactText` for a fully anchored, completely
literal, flagless regex. Runtime compilation treats it as exact defensively.
The corpus test must fail and identify its definition file so it can be rewritten
as a source string.

---

## Match and event invariants

The optimized matcher must preserve:

- first-match-wins ordering across definitions and match types;
- default `user`/`target` values for every action/NPC perspective;
- `"you"` to `"self"` normalization for first-person skill targets;
- cloning only on a successful match, including fresh `affs` and `tags` arrays;
- `reaction` exception containment and `nexskill.error.reaction`;
- reaction-driven match voiding and `nexskill.match.voided`;
- the `nexskill.match.*` event cascade and its order;
- the distinction between skill and NPC finalization;
- dynamic event routing when a reaction rewrites `action.id`;
- lazy area-change event timing and payload;
- final-element result semantics for multi-line sequences.

Exact comparison must synthesize a normal match-array shape only after a hit:

```js
function createLiteralMatch(text) {
  const match = [text];
  match.index = 0;
  match.input = text;
  match.groups = undefined;
  return match;
}
```

`processMatch` publishes this object as `action.match`, so `index`, `input`, and
`groups` are observable even if current reactions do not read them.

---

## Implementation phases

### Phase 0 — Reproducible baseline and corpus integrity

1. Run a clean `npm ci`; the current `node_modules` predates the Vite migration
   and lacks `vitest`.
2. Resolve the six exported-but-unregistered modules listed above.
3. Check in a corpus-audit script that prints all counts in this document.
4. Check in the legacy-vs-new differential harness and benchmark corpora before
   changing the matcher. Preserve a test-only pre-migration pattern snapshot so
   source-level regex-to-string edits do not silently alter the legacy reference.
5. Record Node version, browser/Nexus version, CPU, operating system, warmup,
   sample count, and median/p95 baseline results.

Acceptance: `npm run verify` passes and another developer can reproduce the
baseline and corpus report from documented commands.

### Phase 1 — Pattern contract and exact-literal migration

1. Add the pattern compiler and `createLiteralMatch` with focused unit tests.
2. Change string evaluation from `String.match` to exact equality.
3. Review the 50 existing strings; make any intended regex explicit.
4. Mechanically convert all currently provable exact regexes—492 direct patterns
   and 19 array elements in the final corpus—to strings. Serialize the decoded
   `exactText` as a valid JavaScript string; do not transform source by merely
   slicing `^`, `$`, or backslashes from regex text.
5. Compile array elements independently and formalize `text` as element 0.
6. Add the exact-regex corpus test.

Acceptance:

- no fully literal regex remains in the finalized definition corpus;
- every retained string has positive and near-miss coverage;
- exact and mixed exact/regex multi-line sequences pass;
- the exact-hit benchmark improves relative to the regex baseline;
- all event/match-shape tests pass.

### Phase 2 — Immutable registry and structural index

1. Add `DefinitionRegistry.finalize()` and freeze matching inputs.
2. Move tests from global array mutation to isolated matcher fixtures.
3. Fix the reference UI to sort copies.
4. Compile flat ordered entries with defaults and numeric kinds.
5. Add raw/normalized class caching and lazy per-class candidate-index caching.
6. Prebuild per-area NPC candidate indexes and improve location-value caching.

Initially, a `CandidateIndex` may contain only an ordered `ungated` list so this
phase isolates structural behavior from gate correctness.

Acceptance: zero differential disagreements, immutable-registry tests pass, and
the structural-only benchmark is recorded. The historical reference is about
1.6x faster, but correctness is the gate for shipping this phase.

### Phase 3 — Prefix and required-substring gates

1. Add prefix compilation and `startsWith` gating.
2. Add the conservative token-aware substring extractor and `includes` gating.
3. Gate multi-line entries only from element 0.
4. Instrument regex executions in the benchmark harness.

Acceptance:

- every gate analyzer adversarial test passes;
- every gated corpus pattern has a valid positive witness that satisfies both
  its gate and regex;
- differential comparison has zero unapproved disagreements;
- the 0%-match benchmark averages no more than approximately 25 regex executions
  per line (historical prototype: about 20).

### Phase 4 — Exact maps, first-character buckets, and ordered merge

1. Build `exactByText`, `prefixBuckets`, and `ungated` for every class/area
   candidate index.
2. Implement allocation-free three-way ordered traversal.
3. Add collisions where an earlier regex and later exact literal both match the
   same line, proving source order wins.
4. Add empty-text and missing-bucket cases.
5. Benchmark full-text `Map` lookup against first-character-bucketed `===`
   traversal in the production JavaScript engine. Keep `exactByText` as specified
   when it wins; if string-hash cost makes the bucket faster, retain the same
   three-way ordering contract with the measured exact index representation.

Acceptance: zero ordering disagreements, no per-line candidate-array
concatenation/sorting, and final 0%, 5%, and exact-hit benchmarks are recorded.

### Phase 5 — Integration verification and documentation

1. Run the complete verification matrix below.
2. Benchmark the production minified bundle, not only source modules.
3. Capture a Nexus/browser performance trace for a representative large burst.
4. Replace provisional counts and estimates in this document with final results.

Acceptance: every correctness criterion and performance target below is met.

---

## Verification matrix

### Unit tests

Pattern compiler:

- exact strings, empty strings, escaped punctuation, whitespace escapes;
- hex and both Unicode escape forms, including astral code points;
- anchored/unanchored and case-sensitive/case-insensitive regexes;
- prefix truncation at 30 characters;
- captures, nested groups, lookarounds, and character classes;
- alternation bailout;
- `?`, `*`, `+`, `{0}`, `{0,n}`, `{1}`, `{n,m}` quantifiers;
- unknown escapes produce no unsafe gate;
- exact-regex detection and audit failure.

Matcher/index:

- exact map, prefix bucket, substring, and ungated traversal;
- stable three-way ordering with overlapping patterns;
- profession changes, including repeated raw values and unknown classes;
- all six colour-specific dragon profession values;
- area ID precedence, area-name fallback, unchanged locations, and missing areas;
- first and later multiline elements, mixed element kinds, and truncated blocks;
- immutable registry/list behavior and isolated fixture construction;
- literal match-array shape.

Existing behavior:

- successful first/second/third-person skill and NPC matches;
- reactions that throw, void, or rewrite IDs;
- exact event names and event order;
- cloned mutable arrays;
- lazy `nexskill.area.changed` behavior.

### Corpus verification

- Audit every registered pattern and print matcher-kind/gate totals.
- Require zero fully literal regex definitions after migration.
- Produce a deterministic valid witness for every regex syntax used by the
  corpus, then verify `regex.test(witness)` before using it.
- For every emitted prefix/substring gate, require the witness to satisfy the
  gate. This positively exercises the capture-initial substring family.
- Include every exact string as a positive line and add prefix/suffix/punctuation
  near misses for the 50 retained strings.
- Include complete blocks for every multi-line sequence.

The deterministic witness generator is test tooling, not production code. It
only needs to support syntax present in the corpus and must fail loudly on a new
unsupported construct.

### Differential verification

Run the legacy matcher and optimized matcher side by side across:

- every unique profession token in definitions plus an unknown class;
- every `npcsMap` key plus an absent area and area-name fallback cases;
- all exact lines, generated regex witnesses, multiline blocks, and the generic
  unmatched corpus;
- explicit overlapping/order fixtures.

Compare more than `(id, matchType)`:

- match/no-match and selected definition identity;
- `id`, `matchType`, `user`, `target`, `info`, `limb`, `originalLine`;
- `match[0]`, `match.index`, `match.input`, and named groups;
- raised event names and order for representative finalized matches.

The intentional semantic tightening of the 50 old string patterns and the
formal multiline-input contract must be asserted directly rather than hidden as
generic differential exceptions.

### Build verification

Run:

```sh
npm run verify
```

This covers lint, Vitest, the production/development library builds, and the
reference-site build.

---

## Benchmark design and targets

Check the benchmark script and deterministic corpora into the repository.

Corpora:

1. **0% match:** representative room text, speech, status, time, and other
   generic lines that match nothing.
2. **5% eligible match:** exactly 1 in 20 lines must match under the selected
   class and area—not merely match a definition elsewhere in the global corpus.
3. **100% exact hit:** stratify exact matches by early/middle/late definition
   order and include NPC and multi-line exact-element cases.
4. **100% regex hit:** stratify capture/prefix/substring/ungated regex matches to
   expose successful-regex cost.
5. **Burst replay:** a fixed 1,000-line sequence approximating mapper walks,
   `QL`, and area output.

Method:

- warm up before measurement;
- run multiple samples and report median plus p95, not one timing;
- measure the same generated bundle/configuration for before/after;
- record environment metadata;
- report time/line, total burst time, allocations when available, and regex
  execution count;
- keep instrumentation out of the timed production path.

The benchmark must include an ablation comparing full-text exact maps with
first-character exact buckets. Map lookup can hash the whole incoming string;
the chosen representation must be based on end-to-end measurements rather than
operation count alone.

Performance acceptance on the same machine/runtime:

- no corpus is slower than baseline outside normal measurement noise;
- target at least **8x** improvement on the 0%-match corpus;
- target at least **7x** improvement on the eligible 5%-match corpus;
- exact-hit end-to-end performance must improve and direct literal comparison
  must beat the equivalent regex path;
- average regex executions on the 0%-match profile should be at most 25;
- publish the browser/Nexus burst result separately from Node measurements.

Correctness criteria take precedence over a performance target. If a target is
missed, profile the implementation; never weaken a gate-safety rule or ordering
invariant to recover the number.

---

## Final implementation evidence

Reproduction commands:

```sh
npm ci
npm run verify
npm run benchmark
npm run benchmark:browser
```

`npm run verify` passes with 56 Vitest tests, a zero-exact-regex corpus audit,
1,370 legacy differential comparisons with zero disagreements, and all three
production/development/reference-site builds. The corpus witness generator
validates every remaining regex and every emitted gate. It also builds complete
blocks for all 21 multi-line sequences. The differential comparison covers the
25 registered profession tokens plus an unknown class, all 29 area keys plus an
absent area, selected definition identity, captures/defaults, final-element
multi-line semantics, and observable match-array fields.

### Node benchmark

Environment: Node 22.17.0, Windows 11 Pro 10.0.26200 x64, 13th Gen Intel
Core i7-13700K. Each corpus used a 10,000-line warmup and seven 30,000-line
samples. Values are microseconds per line; the baseline is the checked-in
pre-migration pattern snapshot evaluated with the legacy scan.

| Corpus             | Legacy median / p95 | Optimized median / p95 | Speedup |
| ------------------ | ------------------- | ---------------------- | ------- |
| 0% unmatched       | 153.21 / 155.53     | 8.63 / 8.81            | 17.76x  |
| 5% eligible match  | 153.52 / 155.51     | 9.04 / 9.15            | 16.99x  |
| 100% exact hit     | 144.37 / 147.65     | 19.65 / 19.82          | 7.35x   |
| 100% regex hit     | 103.52 / 105.39     | 9.35 / 9.74            | 11.08x  |
| 1,000-line replay  | 153.16 / 287.86     | 9.04 / 9.60            | 16.94x  |

The unmatched profile executes 8 regexes per line after optimization versus
545 in the legacy harness, below the target of 25. A direct 5,000,000-iteration
ablation measured equality at 0.75 ns/match and the equivalent regex at
18.34 ns/match. The exact-index end-to-end ablation kept the full-text map: it
was about 11% faster on unmatched input and 5% faster on exact hits than scanning
the corresponding first-character exact bucket. The direct lookup microbenchmark
measured 4.90 ns for `Map.has` versus 69.91 ns for the bucket traversal. The
production minified bundle in Node measured 9.13/9.40 us for unmatched input,
9.64/9.78 us for the 5% corpus, and 9.98/10.31 us per replay line.

### Production browser benchmark and trace

The minified IIFE was evaluated directly in headless Microsoft Edge
152.0.4191.53 (V8 15.2.23.6), with the same 10,000-line warmup and seven
30,000-line samples. The unmatched median/p95 was 6.68/6.73 us per line; the 5%
eligible corpus was 6.84/6.93 us per line. A separately timed 1,000-line 5%
burst completed in 8.8 ms with 50 matches. The DevTools trace captured 59,578
bytes using the `devtools.timeline,v8.execute` categories. This measures the
production bundle in the browser engine with host events stubbed; it does not
include Nexus rendering or network work.

---

## Completion checklist

- [x] Exported-but-unregistered modules have an explicit disposition.
- [x] Corpus and benchmark harnesses are checked in and reproducible.
- [x] Strings have exact semantics; intended regexes are explicit `RegExp`s.
- [x] All provably exact regex definitions and array elements are source strings.
- [x] Registry and compiled matching inputs are immutable after finalization.
- [x] UI/tests no longer mutate the global action list.
- [x] Class and location normalization/lookups are absent from the unchanged
      per-line path.
- [x] Exact maps, prefix buckets, substring gates, and ordered merge are active.
- [x] Multi-line element 0 uses the supplied current-line text and bounds are
      safe.
- [x] Match object, reactions, events, and lazy area behavior are preserved.
- [x] Corpus gate witnesses and the full differential matrix report zero unsafe
      disagreements.
- [x] `npm run verify` passes.
- [x] Final Node and browser benchmark results are recorded here.
