# Topic: useRef — `FocusInputOnMount` (+ AG Grid API note)

## Concise Theory
Store mutable values or access imperative APIs (DOM or libraries). Example: AgGrid—sort a column after data fetch.
```jsx
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function GridExample({ data }) {
  const gridRef = useRef<AgGridReact>(null);

  useEffect(() => {
    if (data.length) {
      gridRef.current?.api.setSortModel([{ colId: "name", sort: "asc" }]);
    }
  }, [data]);

  return (
    <div className="ag-theme-alpine" style={{ height: 300 }}>
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={[{ field: "id" }, { field: "name" }]}
      />
    </div>
  );
}
```

---

## Topic Task — **FocusInputOnMount**
Create a component that focuses an `<input>` on mount using `useRef`.

**Where to implement:** `./src/solution.jsx`
**How to verify:** `npm run test:unit5`
