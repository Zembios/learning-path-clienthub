    # Topic: Literal Types

    ## Why this matters
    String/number literals restrict allowable values; great for modes & flags.

    ## Concise Theory
    - `type Mode = 'light' | 'dark'`
- Use with unions to limit inputs and enable autocomplete.

    ---

    ## Topic Task — **setMode(mode)**
    Define `Mode` and implement `setMode(mode: Mode): Mode`.

    **Where to implement:** `./src/topics/05-literal-types/solution.ts`  
    **How to verify:** `npm run test:unit3 && npm run typecheck`
