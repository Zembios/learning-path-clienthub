import { describePrimitive } from "../src/solution";

test("describePrimitive returns correct tags", () => {
  expect(describePrimitive("x")).toBe("string");
  expect(describePrimitive(1)).toBe("number");
  expect(describePrimitive(true)).toBe("boolean");
  expect(describePrimitive(null)).toBe("null");
  expect(describePrimitive(undefined)).toBe("undefined");
});
