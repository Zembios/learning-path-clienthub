# Unit 5 – React Advanced (Theory + Unit Task)

This unit covers: **useEffect with cleanup (polling), useMemo for derived data, useCallback for stable callbacks (esp. with memoized children), useRef (DOM refs & previous values), Custom Hooks, Higher-Order Components (HOC).**

## Concise Theory

### useEffect with Cleanup (Polling)
Use effects for side effects like polling; always clean up to avoid leaks.
```jsx
useEffect(() => {
  const id = setInterval(async () => {
    const data = await fetch("/api/stats").then(r => r.json());
    console.log("Fetched:", data);
  }, 5000);

  return () => clearInterval(id); // stop polling on unmount
}, []); // empty deps = start once on mount
```

### useMemo
Avoid expensive recalculations between renders when dependencies haven’t changed.
```jsx
const total = useMemo(() => items.reduce((s, it) => s + it.price, 0), [items]);
```

### useCallback
Stabilize function references so memoized children don’t re-render unnecessarily.
```jsx
function Parent() {
  const [count, setCount] = useState(0);

  // Stable callback: does not change identity on each render
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <CounterButton onIncrement={handleIncrement} />;
}

const CounterButton = React.memo(function CounterButton(
  { onIncrement }: { onIncrement: () => void }
) {
  console.log("Child render");
  return <button onClick={onIncrement}>Increment</button>;
});
```

### useRef
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

### Elevating State
Lift shared state to a common parent when siblings need to read/update the same data.
```jsx
function Parent() {
  const [value, setValue] = useState("");
  return <>
    <Input value={value} onChange={setValue} />
    <Preview value={value} />
  </>;
}
```

### Custom Hooks
Encapsulate reusable logic and share across components. Each instance of a hook keeps its own state. Can use with both [] and {}. [state, setState] OR {state, setState} are both valid, just be aware of their differences.
```jsx
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle] as const;
}

// Component A
function LightSwitch() {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}

// Component B
function Sidebar() {
  const [open, toggle] = useToggle(true);
  return <>
    <button onClick={toggle}>{open ? "Close" : "Open"}</button>
    {open && <nav>Menu</nav>}
  </>;
}
```

### Higher-Order Components (HOC)
Wrap components to inject cross-cutting concerns (e.g., authorization).
```jsx
function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const user = useUser();             // your auth hook/context
    if (!user) return <p>Please log in</p>;
    return <Component {...props} />;
  };
}

const ProtectedReports = withAuth(ReportsPage);
```
**Why useful:** Apply the same access rule to many screens without duplicating logic.

---

## Unit Task – “Polling Dashboard”

Implement `Dashboard` in `./src/task/Dashboard.jsx`:
- Start an **interval** in `useEffect` (default every 5000ms) that calls a provided `fetcher` prop (or a default) and stores the data in state.
- Use **useMemo** to compute a derived total (e.g., sum of `value` fields). Render it.
- Use **useCallback** to create a stable handler (e.g., `onRefresh`) and pass it to a memoized child component.
- Use **useRef** to either focus an input on mount or store/compare the **previous total** to display “▲/▼ same” indicators.
- Return a small UI that shows the total and a button to trigger a manual refresh via the stable callback.

**Run:** `npm run test:unit5`

### Example fetcher output
```js
// fetcher() -> Promise.resolve([{ value: 10 }, { value: 5 }])
// Derived total -> 15
```
