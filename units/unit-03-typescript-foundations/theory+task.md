# Unit 3 – TypeScript Foundations (Theory + Unit Task)

This unit covers: **TS primitives, interfaces & types, unions & intersections, utility types (Partial, Pick, Omit, Record, Readonly), Generics, Literal Types.**

## Concise Theory

### TS Primitives
Type annotations catch mistakes early.
```ts
let str: string = "Hello";
let num: number = 42;
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
```

### Literal Types
Restrict inputs to exact strings/numbers (`type Mode = "light" | "dark"`).

### Interfaces & Types
Both describe shapes. `type` is more flexible (unions, intersections), while `interface` is great for object contracts and declaration merging.

### Unions & Intersections
- **Union**: one-of (`type Status = "pending" | "completed" | "canceled"`).
- **Intersection**: combine shapes (`type Point = { x:number } & { y:number }`).

### Utility Types
Built-in helpers that reshape types.
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

### Generics
Write reusable code that preserves type info.
```ts
function identity<T>(value: T): T {
  return value;
}
const n = identity(5);       // T inferred as number
const s = identity<string>("x");
```

---

## Unit Task – “Catalog Types & Utils”

Implement in `./src/task/solution.ts`:

- **Types**:  
  `Product`, `Customer`, `OrderItem`, `Order` (with `items: OrderItem[]`, `customerId`, `status`) and `OrderStatus = "pending" | "completed" | "canceled"`
- **Utility types**:  
  `OrderPreview = Pick<Order, "id" | "status">`, `ProductMap = Record<string, Product>`
- **Generics**:  
  `identity<T>(x:T):T`,  
  `groupBy<T, K extends string | number>(arr:T[], key:(x:T)=>K): Record<K, T[]>`

**Run tests:** `npm run test:unit3`  
**Type-check:** `npm run typecheck`
