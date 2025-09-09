# Topic: Interfaces & Types – `formatUser(user)`

## Why this matters
`type` and `interface` both model shapes. Prefer the one that reads best; `type` is more flexible for unions/intersections.

## Concise Theory
```ts
type User = { id: string; name: string };
interface Product { id: string; price: number }
```
`type` can alias unions: `type Id = string | number`.

---

## Topic Task — **formatUser(user)**
Define `type User = { id: string; name: string }` and implement `formatUser(user): string` → `"[id] name"`.

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
