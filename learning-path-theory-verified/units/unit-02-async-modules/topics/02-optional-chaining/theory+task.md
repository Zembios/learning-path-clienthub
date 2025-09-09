    # Topic: Optional Chaining (`?.`)

    ## Why this matters
    Optional chaining prevents runtime crashes when accessing nested properties that may be missing.

    ## Concise Theory
    - `obj?.prop` returns `undefined` instead of throwing when `obj` is `null/undefined`.
- `obj?.fn?.()` safely calls a function if it exists.
- Use with nullish coalescing: `obj?.a ?? 'fallback'`.

    ---

    ## Topic Task — **getTitleSafe(post)**
    Return `post?.title` (undefined if not present).

    **Where to implement:** `./src/topics/02-optional-chaining/solution.js`  
    **How to verify:** `npm run test:unit2`
