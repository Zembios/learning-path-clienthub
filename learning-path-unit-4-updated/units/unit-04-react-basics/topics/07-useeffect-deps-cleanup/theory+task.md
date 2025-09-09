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
Create a component that starts a `setInterval` calling a `tick` prop every `ms` milliseconds. Clean it up on unmount and when `ms` changes.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
