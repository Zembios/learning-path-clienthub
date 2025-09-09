    # Topic: Unions & Intersections

    ## Why this matters
    Unions model 'one of' choices; intersections combine shapes.

    ## Concise Theory
    - `type Status = 'pending' | 'completed' | 'canceled'`
- `type A = {x:number} & {y:number}` → `{x,y}`

    ---

    ## Topic Task — **formatStatus(status)**
    Define `Status` union and implement `formatStatus(s: Status)` returning a friendly string.

    **Where to implement:** `./src/topics/02-unions-and-intersections/solution.ts`  
    **How to verify:** `npm run test:unit3 && npm run typecheck`
