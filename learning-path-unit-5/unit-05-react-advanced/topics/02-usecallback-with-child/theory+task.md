# Topic: useCallback with Child — `CounterWithChild`

## Why this matters
Passing **stable callbacks** to memoized children prevents unnecessary re-renders and keeps refs/effects stable.

## Concise Theory
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

---

## Topic Task — **CounterWithChild**
Build a parent component that holds `count` state, defines a memoized `onInc` with `useCallback`, passes it to a `React.memo` child button, and renders the count.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit5`
