const { buildColumnDefs, buildGridOptions } = require("../src/task/grid");

test("buildColumnDefs returns required columns", () => {
  const cols = buildColumnDefs();
  expect(Array.isArray(cols)).toBe(true);
});

test("buildGridOptions returns defaultColDef and onGridReady", () => {
  const opts = buildGridOptions([]);
  expect(opts).toHaveProperty("defaultColDef");
  expect(typeof opts.onGridReady).toBe("function");
});
