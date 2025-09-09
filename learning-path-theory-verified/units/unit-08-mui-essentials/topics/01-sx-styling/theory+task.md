    # Topic: sx Styling (Responsive & Conditional)

    ## Why this matters
    `sx` allows inline theme-aware styles; you can pass breakpoint-specific values and conditional objects.

    ## Concise Theory
    - Responsive: `sx={{ p: { xs: 1, md: 3 } }}`
- Conditional: `sx={{ bgcolor: isActive ? 'primary.main' : 'grey.100' }}`

    ---

    ## Topic Task — **buildSx(isActive)**
    Return an `sx` object with responsive padding and conditional background depending on `isActive`.

    **Where to implement:** `./src/topics/01-sx-styling/solution.js`  
    **How to verify:** `npm run test:unit8`
