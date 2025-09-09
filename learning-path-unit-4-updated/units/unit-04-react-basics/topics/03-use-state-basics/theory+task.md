# Topic: useState Basics — `Counter`

## Why this matters
State drives interactive UI. Changing state triggers a re-render.

## Concise Theory
Local state triggers re-renders on update.
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
```

---

## Topic Task — **Counter**
Render a `<button>` that shows the count and increments it on click.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
