    # Topic: Generics

    ## Why this matters
    Generics let functions and types work across many shapes while preserving type information.

    ## Concise Theory
    - `function identity<T>(x:T):T`
- `function groupBy<T,K extends string|number>(arr:T[], key:(x:T)=>K):Record<K,T[]>`

    ---

    ## Topic Task — **identity<T>(x)**
    Implement a generic `identity` function (`identity<T>(x:T):T`).

    **Where to implement:** `./src/topics/04-generics/solution.ts`  
    **How to verify:** `npm run test:unit3 && npm run typecheck`
