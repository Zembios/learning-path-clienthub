# Topic: Custom Hook — `useToggle(initial=false)`

## Why this matters
Custom hooks let you **package stateful behavior** and reuse it across components. It can also be used as a method of splitting your code into MVC (hooks being the controller, component being the view)

## Concise Theory
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

---

## Topic Task — **useToggle(initial=false)**
This topic doesn't have a task for implementation. It will instead be practiced in the unit task together with the other topics.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit5`
