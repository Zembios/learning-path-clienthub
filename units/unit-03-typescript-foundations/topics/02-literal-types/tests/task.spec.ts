import { setMode } from "../src/solution";
test("setMode returns input", () => {
  expect(setMode("light" as any)).toBe("light");
  expect(setMode("dark" as any)).toBe("dark");
});
