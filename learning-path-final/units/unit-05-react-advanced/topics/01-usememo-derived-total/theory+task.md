# Topic: useMemo — `PricesTotal`

## Why this matters
`useMemo` avoids recomputing expensive **derived values** when inputs haven’t changed.

## Concise Theory
```jsx
const total = useMemo(() => prices.reduce((s, p) => s + p, 0), [prices]);
```

---

## Topic Task — **PricesTotal**
This topic doesn't have a task for implementation. Instead, inside src/solution.jsx there is a practical use case for useMemo.

**Where to implement:** `./src/solution.jsx`  
