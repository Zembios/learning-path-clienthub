import { identity } from "../src/solution";
test("identity returns the same value", () => {
  const obj = { a: 1 };
  expect(identity(obj)).toBe(obj);
  expect(identity(5)).toBe(5);
});
