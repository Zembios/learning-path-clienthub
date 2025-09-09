# Unit 6 – AgGrid Essentials (Theory + Unit Task)

This unit covers: **`colDefs` (renderers, formatters, styles), `defaultColDef`, and `gridOptions` (sorting/filtering/resizing, selection, `onGridReady`).**  
You’ll practice composing **column definitions** and **grid options** for a realistic product/status dataset.

### gridOptions & colDefs
`gridOptions` configures grid behavior; `columnDefs` define columns (headers, formatters, renderers, styling, etc.).
```js
import { AgGridReact } from "ag-grid-react";

const columnDefs = [
  { field: "id", headerName: "ID", width: 90, sortable: true, filter: "agNumberColumnFilter" },
  { 
    field: "name",
    headerName: "Name",
    cellRenderer: (p) => `<b>${p.value}</b>`,            // plain renderer
    tooltipField: "name",
    cellClass: params => params.value ? "cell-okay" : "cell-empty",
  },
  { 
    field: "status",
    headerName: "Status",
    valueFormatter: ({ value }) => value.toUpperCase(),   // display-only formatting
    cellStyle: ({ value }) => ({ color: value === "active" ? "green" : "gray" }),
    width: 140,
    pinned: "left"
  },
  {
    headerName: "Actions",
    field: "actions",
    cellRenderer: (p) => `<button data-id="${p.data.id}">View</button>`,
    width: 120
  }
];

const gridOptions = {
  columnDefs,
  defaultColDef: {
    sortable: true,
    resizable: true,
    filter: true,
  },
  rowSelection: "multiple",
  animateRows: true,
  tooltipShowDelay: 0,
  onGridReady: (params) => {
    params.api.sizeColumnsToFit();
  },
};
```
In React, for complex visual cells you can use framework components (React components as renderers) or cellRendererSelector for conditional renderers.

### Common Features (documentation)
- **Sorting:** https://www.ag-grid.com/react-data-grid/sorting/
- **Filtering:** https://www.ag-grid.com/react-data-grid/sorting/
- **Cell Renderers:** https://www.ag-grid.com/react-data-grid/sorting/
- **Theming & Styling:** https://www.ag-grid.com/react-data-grid/sorting/
- **Tool Panels:** https://www.ag-grid.com/react-data-grid/sorting/

---

## Unit Task – “Product Grid Config”

Implement in `./src/task/solution.js` the following functions:

- `buildColumnDefs()` → returns an **array** with three columns:  
  1) **name**: header `"Product"`, `flex: 1`, render **bold** name via a simple `cellRenderer(value)` returning `"<strong>NAME</strong>"`  
  2) **price**: header `"Price"`, right-aligned, `valueFormatter` that outputs e.g. `"€12.34"` (fixed 2 decimals)  
  3) **status**: header `"Status"`, a badge-like `cellRenderer(params)` that returns `"<span class='status status-STATUS'>STATUS</span>"` and a `cellStyle` that colors text by status: completed (green), pending (gray), canceled (red)

- `buildGridOptions(columnDefs)` → returns a **gridOptions** object with:
  - `columnDefs` (the input param)
  - `defaultColDef: { sortable: true, filter: true, resizable: true }`
  - `rowSelection: "single"`
  - `pagination: true`, `paginationPageSize: 20`
  - `onGridReady(params)` that calls `params.api.sizeColumnsToFit()`

**Run:** `npm run test:unit6`

### Example Input
```js
const rows = [
  { id: "p1", name: "Widget",  price: 19.99, status: "completed" },
  { id: "p2", name: "Gadget",  price: 2.5,   status: "pending"   },
  { id: "p3", name: "Premium", price: 99.95, status: "canceled"  },
];
```
