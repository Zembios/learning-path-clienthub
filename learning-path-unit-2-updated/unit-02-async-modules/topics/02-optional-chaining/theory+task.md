# Topic: Optional Chaining (`?.`) – `getTitleSafe(post)`

## Why this matters
Optional chaining prevents **runtime crashes** when accessing possibly missing properties.

## Concise Theory
- `obj?.prop` → returns `undefined` if `obj` is `null/undefined`.
- `obj?.a?.b?.c` prevents short-circuits anywhere along the chain.

Safely access nested properties or call possibly missing functions.
```js
const title = post?.title;
const first = post?.comments?.[0];
const ok = maybeFn?.();
```

---

## Topic Task — **getTitleSafe(post)**
Return `post?.title`.

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit2`
