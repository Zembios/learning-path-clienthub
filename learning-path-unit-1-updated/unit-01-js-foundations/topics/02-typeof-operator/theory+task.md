# Topic: typeof Operator – `typeOfDetailed(v)`

### Why
`typeof` is safe for quick checks but has edge cases.

### Theory
```js
typeof "hi";          // "string"
typeof 42;            // "number" (NaN is also "number")
typeof undefined;     // "undefined"
typeof 2n;            // "bigint"; typeof Symbol() // "symbol"
typeof function(){};  // "function"; class C{}; typeof C // "function"
typeof null;          // "object" (quirk)
typeof [];            // "object"; Array.isArray([]) // true
typeof notDeclared;   // "undefined" (safe)
```

---

## Topic Task – **typeOfDetailed(v)**
Return `'null'` for `null`, `'array'` for arrays, otherwise `typeof v`.

**Function:** `typeOfDetailed(v)`  
**Acceptance Criteria:**
- Returns `'null'` for `null`.
- Returns `'array'` for arrays.
- For all other values, returns the JavaScript `typeof v`.

**Edge Cases:**
- `NaN` should yield `'number'`.
- `function(){}` should yield `'function'`.
- `BigInt(10)` → `'bigint'`, `Symbol('x')` → `'symbol'`.
