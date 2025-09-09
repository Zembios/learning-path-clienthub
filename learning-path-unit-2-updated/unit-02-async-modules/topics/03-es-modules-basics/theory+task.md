# Topic: ES Modules Basics – `makeGreeter(name)`

## Why this matters
Modules help you split code by responsibility and **reuse** it cleanly.

## Concise Theory
- Named vs default exports:
```js
export const PI = 3.14;     // named
export default function greet(){} // default
```
- Imports:
```js
import greet, { PI } from "./math.js";
```

> For simplicity, the exercises are `require`-based (CommonJS) in tests, but the concepts map directly to ESM.

---

## Topic Task — **makeGreeter(name)**
Return a function that, when called, returns `Hello, ${name}!`

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit2`
