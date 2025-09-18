# Unit 6 – AgGrid Essentials

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

## Unit Task
Follow the guide through AgGrid's features. Each section has a code preview and a sandbox that you can tinker with.
https://www.ag-grid.com/react-data-grid/deep-dive/