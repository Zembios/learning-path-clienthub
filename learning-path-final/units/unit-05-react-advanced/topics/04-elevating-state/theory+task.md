# Topic: Elevating State

## Concise Theory
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

---

## Topic Task — Elevate State
1. Lift the message state from ChildA into Parent.
2. Pass the state and setter as props to ChildA.
3. Pass only the state to ChildB.
4. Make sure both components stay in sync when typing in ChildA.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
