# Unit 6 – AgGrid Essentials (Theory + Unit Task)

Covers gridOptions, columnDefs with cellRenderer/valueFormatter/cellStyle, defaultColDef, basic features.

## Unit Task – “Products Grid”
Implement in `./src/task/grid.js`:
- buildColumnDefs() -> array with name (bold via cellRenderer), price formatted (valueFormatter), status styled (cellStyle)
- buildGridOptions(columnDefs) -> object with defaultColDef { sortable, filter, resizable } and onGridReady calling sizeColumnsToFit

Run: `npm run test:unit6`
