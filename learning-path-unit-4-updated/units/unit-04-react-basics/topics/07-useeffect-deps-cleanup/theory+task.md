# Topic: useEffect (dependencies, cleanup) — `Poller`

## Why this matters
Intervals and subscriptions **must** be cleaned up to avoid memory leaks and duplicate work.

## Concise Theory
```jsx
useEffect(() => {
  const id = setInterval(fn, ms);
  return () => clearInterval(id);
}, [ms]);
```

---

## Topic Task — **Poller**
This topic doesn't have a task for implementation. Instead, inside src/solution.jsx there is an example of setting up and clearing data polling.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
