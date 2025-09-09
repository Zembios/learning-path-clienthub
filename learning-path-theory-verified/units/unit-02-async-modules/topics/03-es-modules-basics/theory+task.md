    # Topic: ES Modules Basics

    ## Why this matters
    Modules help you split code by responsibility and reuse it cleanly.

    ## Concise Theory
    - `export const x = 1;` / `export default fn;`
- `import { x } from './x.js'` or `import fn from './x.js'`.
- Keep file responsibilities small and cohesive.

    ---

    ## Topic Task — **makeGreeter(name)**
    Return a function that formats `Hello, ${name}!` (we’ll require it via CommonJS in tests for simplicity).

    **Where to implement:** `./src/topics/03-es-modules-basics/solution.js`  
    **How to verify:** `npm run test:unit2`
