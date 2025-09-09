# Topic: Utility Types – `makePreview(order)`

## Why this matters
Utility types let you **reshape** existing types concisely.

## Concise Theory
```ts
type User = { id: number; name: string; age: number };

// Partial → make properties optional
type PartialUser = Partial<User>; 
// { id?: number; name?: string; age?: number }

// Pick → select a subset of properties
type PickUser = Pick<User, "id" | "name">; 
// { id: number; name: string }

// Omit → remove specific properties
type OmitUser = Omit<User, "age">; 
// { id: number; name: string }

// Readonly → forbid reassignment of properties
type ReadonlyUser = Readonly<User>; 
// user.id = 2 // error

// Record → map keys to a uniform value type
type Scores = Record<string, number>; 
// e.g., { pesho: 12, ivan: 9 }
```

---

## Topic Task — **makePreview(order)**
Define:
```ts
type Order = { id: string; status: "pending" | "completed" | "canceled"; total: number };
type OrderPreview = Pick<Order, "id" | "status">;
```
Implement `makePreview(order)` → `{ id, status }`.

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
