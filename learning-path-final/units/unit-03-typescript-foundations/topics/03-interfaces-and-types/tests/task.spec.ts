import { formatUser } from "../src/solution";
test("formatUser returns formatted string", () => {
  expect(formatUser({ id: "42", name: "Alice" })).toBe("[42] Alice");
});
