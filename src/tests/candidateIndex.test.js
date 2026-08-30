import {
  buildCandidateIndex,
  findCandidateMatch,
} from "../base/matching/candidateIndex";

const entry = (order, options = {}) => ({
  order,
  exactText: false,
  gate: false,
  bucketKey: false,
  ...options,
});

describe("candidate index", () => {
  test("merges exact, prefix, and ungated candidates by source order", () => {
    const entries = [
      entry(0, { gate: "shared", bucketKey: "s" }),
      entry(1),
      entry(2, { exactText: "shared line" }),
    ];
    const visited = [];
    const result = findCandidateMatch(
      buildCandidateIndex(entries),
      "shared line",
      (candidate) => {
        visited.push(candidate.order);
        return candidate.order === 2 ? "hit" : false;
      }
    );
    expect(visited).toEqual([0, 1, 2]);
    expect(result).toBe("hit");
  });

  test("handles empty text and missing buckets without allocations", () => {
    const index = buildCandidateIndex([entry(0)]);
    expect(findCandidateMatch(index, "", () => false)).toBe(false);
    expect(findCandidateMatch(index, "unbucketed", () => false)).toBe(false);
  });

  test("the benchmark-only exact bucket preserves equality and order", () => {
    const visited = [];
    const index = buildCandidateIndex(
      [
        entry(0, { exactText: "alpha miss" }),
        entry(1, { exactText: "alpha hit" }),
      ],
      { exactIndexMode: "bucket" }
    );
    const result = findCandidateMatch(index, "alpha hit", (candidate) => {
      visited.push(candidate.order);
      return candidate.order;
    });
    expect(visited).toEqual([1]);
    expect(result).toBe(1);
  });
});
