import { identity, groupBy } from "../src/task/solution";

describe("Unit 3 – Catalog Types & Utils (runtime)", () => {
  test("identity returns same value", () => {
    expect(identity(5)).toBe(5);
    const obj = { a: 1 };
    expect(identity(obj)).toBe(obj);
  });

  test("groupBy groups by key function", () => {
    const arr = [
      { id: 1, cat: "a" },
      { id: 2, cat: "b" },
      { id: 3, cat: "a" },
    ];
    const grouped = groupBy(arr, (x) => x.cat);
    expect(grouped.a.map((x) => x.id)).toEqual([1, 3]);
    expect(grouped.b.map((x) => x.id)).toEqual([2]);
  });
});
