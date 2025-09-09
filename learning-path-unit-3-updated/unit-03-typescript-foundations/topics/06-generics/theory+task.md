# Topic: Generics – `identity<T>(x)`

## Why this matters
Generics keep **type information** intact across helpers and containers.

## Concise Theory
```ts
function identity<T>(value: T): T {
  return value;
}
const n = identity(5);       // T inferred as number
const s = identity<string>("x");
```
Works for any T and preserves it.

---

## Topic Task — **identity<T>(x)**
Implement a generic identity function.

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
