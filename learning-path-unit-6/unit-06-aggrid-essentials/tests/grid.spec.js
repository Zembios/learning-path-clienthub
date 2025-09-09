const { buildColumnDefs, buildGridOptions } = require("../src/task/solution");

describe("Unit 6 – Product Grid Config", () => {
  test("buildColumnDefs returns expected columns", () => {
    const defs = buildColumnDefs();
    expect(Array.isArray(defs)).toBe(true);
    expect(defs).toHaveLength(3);

    const [nameCol, priceCol, statusCol] = defs;

    // name column
    expect(nameCol.field).toBe("name");
    expect(nameCol.headerName).toMatch(/product/i);
    expect(typeof nameCol.cellRenderer).toBe("function");
    expect(nameCol.cellRenderer("Widget")).toMatch(/<strong>Widget<\/strong>/);

    // price column
    expect(priceCol.field).toBe("price");
    expect(typeof priceCol.valueFormatter).toBe("function");
    expect(priceCol.valueFormatter(12)).toBe("€12.00");
    expect(priceCol.valueFormatter(12.345)).toBe("€12.35");

    // status column
    expect(statusCol.field).toBe("status");
    expect(typeof statusCol.cellRenderer).toBe("function");
    expect(statusCol.cellRenderer({ value: "completed" })).toMatch(/status-completed/);
    expect(typeof statusCol.cellStyle).toBe("function");
    expect(statusCol.cellStyle({ value: "completed" }).color).toMatch(/green/i);
    expect(statusCol.cellStyle({ value: "canceled" }).color).toMatch(/red/i);
  });

  test("buildGridOptions wires defaults and onGridReady", () => {
    const defs = [{ field: "name" }];
    const opts = buildGridOptions(defs);
    expect(opts.columnDefs).toBe(defs);
    expect(opts.defaultColDef).toEqual(expect.objectContaining({ sortable: true, filter: true, resizable: true }));
    expect(opts.rowSelection).toBe("single");
    expect(opts.pagination).toBe(true);
    expect(opts.paginationPageSize).toBe(20);
    expect(typeof opts.onGridReady).toBe("function");

    const api = { sizeColumnsToFit: jest.fn() };
    opts.onGridReady({ api });
    expect(api.sizeColumnsToFit).toHaveBeenCalled();
  });
});
