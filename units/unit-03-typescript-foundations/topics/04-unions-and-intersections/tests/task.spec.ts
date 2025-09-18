import { formatStatus } from "../src/solution";
test("formatStatus friendly labels", () => {
  expect(formatStatus("completed" as any)).toContain("completed");
  expect(formatStatus("pending" as any)).toContain("pending");
  expect(formatStatus("canceled" as any)).toContain("canceled");
});
