    # Topic: Interfaces & Types

    ## Why this matters
    Both describe shapes. `type` is flexible (unions, intersections); `interface` is great for objects and declaration merging.

    ## Concise Theory
    - `type User = { id: string; name: string }`
- `interface Product { id: string; price: number }`
- Use whichever reads best; `type` often more flexible.

    ---

    ## Topic Task — **formatUser(user)**
    Define a `User` type with `id` and `name`, then implement `formatUser(user): string` → `'[id] name'`.

    **Where to implement:** `./src/topics/01-interfaces-and-types/solution.ts`  
    **How to verify:** `npm run test:unit3 && npm run typecheck`
