# Topic: Lifecycle with Hooks — `MountLogger`

## Why this matters
Understanding **when** effects run helps you place subscriptions, timers, and logic correctly.

## Concise Theory
React builds a **Virtual DOM** (VDOM), diffs it against the previous render, and applies minimal changes to the real DOM. Component lifecycle:

- **Mount:** first time the component appears.

- **Update:** any time props/state change triggers re-render.

- **Unmount:** component is removed from the tree.

`useEffect` ties into this lifecycle:

- Runs **after** the DOM is painted (post-render).

- Runs on mount and again on each change of its dependencies.

- Cleanup function runs **before** the next effect and on unmount.
```jsx
useEffect(()=>{
  console.log("mounted");
  return ()=> console.log("unmounted");
},[]);
```

---

## Topic Task — **MountLogger**
Log `"mounted"` on mount and `"unmounted"` on unmount using `useEffect`.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
