# Topic: TS Primitives – `describePrimitive(v)`

## Why this matters
Understanding TS primitive types is the basis for safe function signatures and overloads.

## Concise Theory
Type annotations catch mistakes early.
```ts
let str: string = "Hello";
let num: number = 42;
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
```

---

## Topic Task — **describePrimitive(v)**
Signature: `(v: string | number | boolean | null | undefined) => "string" | "number" | "boolean" | "null" | "undefined"`

**Where to implement:** `./src/solution.ts`  
**How to verify:** `npm run test:unit3`
