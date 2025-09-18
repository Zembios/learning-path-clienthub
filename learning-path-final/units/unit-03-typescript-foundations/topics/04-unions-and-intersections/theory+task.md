# Topic: Unions & Intersections – `formatStatus(status)`

## Why this matters
Unions model **one of** choices; intersections merge multiple shapes into one type.

## Concise Theory
```ts
type Status = "pending" | "completed" | "canceled";
type Point = { x: number } & { y: number }; // { x, y }
```

---

## Topic Task — **formatStatus(status)**
Define `type Status = "pending" | "completed" | "canceled"` and return a friendly string like `"✔ completed"` / `"… pending"` / `"✖ canceled"`.

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
