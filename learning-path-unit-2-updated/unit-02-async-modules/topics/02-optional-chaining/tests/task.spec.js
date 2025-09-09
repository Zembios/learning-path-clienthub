const { getTitleSafe } = require("../src/solution");

test("getTitleSafe returns title or undefined", () => {
  expect(getTitleSafe({ title: "A" })).toBe("A");
  expect(getTitleSafe({})).toBeUndefined();
  expect(getTitleSafe(null)).toBeUndefined();
});
