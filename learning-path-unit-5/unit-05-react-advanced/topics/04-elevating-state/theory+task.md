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

## Topic Task — **useToggle(initial=false)**
To be defined...

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
