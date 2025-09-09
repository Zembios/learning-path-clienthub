    # Topic: Utility Types

    ## Why this matters
    `Partial`, `Pick`, `Omit`, `Record`, `Readonly` help reshape types.

    ## Concise Theory
    - `Partial<T>`: make fields optional
- `Pick<T,K>` / `Omit<T,K>`: slice fields
- `Record<K,T>`: map keys to T
- `Readonly<T>`: make fields readonly

    ---

    ## Topic Task — **makePreview(order)**
    Define `Order` and `OrderPreview = Pick<Order,'id'|'status'>`. Implement `makePreview(order)` returning `{id, status}`.

    **Where to implement:** `./src/topics/03-utility-types/solution.ts`  
    **How to verify:** `npm run test:unit3 && npm run typecheck`
