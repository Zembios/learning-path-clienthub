# Topic: useMemo — `PricesTotal`

## Why this matters
`useMemo` avoids recomputing expensive **derived values** when inputs haven’t changed.

## Concise Theory
```jsx
const total = useMemo(() => prices.reduce((s, p) => s + p, 0), [prices]);
```

---

## Topic Task — **PricesTotal**
Create a component that takes `prices: number[]` prop and renders `Total: X`. Use `useMemo` to compute the total.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit5`
