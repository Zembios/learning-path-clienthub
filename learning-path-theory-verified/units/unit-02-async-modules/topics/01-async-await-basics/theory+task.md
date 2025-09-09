    # Topic: Async/Await Basics

    ## Why this matters
    Async/await lets you write asynchronous code that reads like synchronous code, improving clarity and error handling.

    ## Concise Theory
    - **Promises → await**: `const data = await fetch(url).then(r => r.json())`.
- **Error flow**: prefer try/catch at call-sites (or bubble errors) — but keep examples simple here.
- **Avoid mixing then-chains with await** for the same call; pick one style.

    ---

    ## Topic Task — **fetchJson(url)**
    Write an async function that calls `fetch(url)` and returns `await res.json()` if `res.ok` else throws an error.

    **Where to implement:** `./src/topics/01-async-await-basics/solution.js`  
    **How to verify:** `npm run test:unit2`
