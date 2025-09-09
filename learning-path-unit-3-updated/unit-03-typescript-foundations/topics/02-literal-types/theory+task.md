# Topic: Literal Types – `setMode(mode)`

## Why this matters
Literal types constrain inputs to a safe set of exact values and improve readability.

## Concise Theory
```ts
type Mode = "light" | "dark";
```
Passing anything else is a compile-time error.

---

## Topic Task — **setMode(mode)**
Define `type Mode = "light" | "dark"` and implement `setMode(mode: Mode): Mode` that simply returns the mode.

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
