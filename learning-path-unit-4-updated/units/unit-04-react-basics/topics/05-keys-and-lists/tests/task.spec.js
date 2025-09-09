const { buildKey } = require("../src/solution");

test("buildKey composes type:id when type exists", () => {
  expect(buildKey({ id: 5, type: "user" })).toBe("user:5");
  expect(buildKey({ id: "42" })).toBe("42");
});
