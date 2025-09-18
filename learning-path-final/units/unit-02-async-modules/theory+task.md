# Unit 2 – Asynchronous JS & Modules

This unit covers: **Promises, async/await, optional chaining (`?.`), and ES Modules basics (`export` / `import`)**.  

## Concise Theory

### Promises → async/await
- A **Promise** represents a future value. `await` unwraps it in an async function.
```js
async function getData(url) {
  const res = await fetch(url); // returns the result of a resolved Promise
  // No try/catch for now — we let errors bubble
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
```

### Optional Chaining (`?.`)
- Safely access nested properties/functions that might not exist.
```js
const title = post?.title;     // undefined if post or title is missing
const firstComment = post?.comments?.[0];
const result = maybeFn?.();    // calls if function exists
```

### ES Modules Basics
- **Exports:**
```js
export const PI = 3.14;      // named export
export default function sum(a,b){ return a+b; } // default export
```
- **Imports:**
```js
import sum, { PI } from "./math.js";
```
> In tests here we use CommonJS `require` for simplicity, but the theory still focuses on ESM syntax.

---

## Unit Task – “Posts API Client”

Implement in `./src/task/solution.js`:
- `async function fetchJson(url)`  
  Use `fetch(url)`, throw if `!res.ok`, else return `await res.json()`. (No `try/catch`.)
- `function getPostTitleSafe(post)`  
  Return `post?.title`.
- `function createClient(baseUrl)`  
  Return an object with:
  - `getPosts()` → `fetchJson(\`\${baseUrl}/posts\`)`
  - `getPost(id)` → `fetchJson(\`\${baseUrl}/posts/\${id}\`)`
  - `getPostTitleSafe` → reuse the helper above

**Run:** `npm run test:unit2`
