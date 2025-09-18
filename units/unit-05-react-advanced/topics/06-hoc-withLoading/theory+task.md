# Topic: HOC — `withLoading(Wrapped)`

## Concise Theory
Wrap components to inject cross-cutting concerns (e.g., authorization).
```jsx
function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const user = useUser();             // your auth hook/context
    if (!user) return <p>Please log in</p>;
    return <Component {...props} />;
  };
}

const ProtectedReports = withAuth(ReportsPage);
```
**Why useful:** Apply the same access rule to many screens without duplicating logic.

---

## Topic Task — **withLoading(Wrapped)**
This topic doesn't have a task for implementation. It will instead be practiced in the unit task together with the other topics.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit5`
