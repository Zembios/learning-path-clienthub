import { makePreview } from "../src/solution";
test("makePreview returns id+status only", () => {
  const p = makePreview({ id: "1", status: "pending", total: 99 });
  expect(p).toEqual({ id: "1", status: "pending" });
});
