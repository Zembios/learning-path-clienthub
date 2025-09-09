# Topic: Type Coercion

### Theory
JS sometimes converts types implicitly. This can be convenient or dangerous—prefer === to avoid surprises.
```js
console.log("5" + 2);             // "52"  (string concat)
console.log("5" - 2);             // 3     (number math)
console.log(true + 1);            // 2     (true → 1)
console.log(false + 10);          // 10    (false → 0)

console.log(0 == false);          // true  (loose)
console.log(0 === false);         // false (strict)

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log([] + []);             // ""       ([] → "")
console.log([1] + [2]);           // "12"     (array → string)
console.log([10,20] - 5);         // NaN      ("10,20" - 5)
console.log(+"" , +"42", +"x");   // 0, 42, NaN (unary +)

console.log([0] == 0);            // true  ([0] → "0" → 0)
console.log([] == 0);             // true  ("" → 0)
console.log([1,2] == "1,2");      // true  (array → "1,2")
```

---

## Topic Task – **coerceNumber(v)**
- If finite number → return it.
- If string: trim, allow `1,234.56`, parse to number; if finite return it else `NaN`.
- Else `NaN`.

**Function:** `coerceNumber(v)`  
**Acceptance Criteria:**
- Returns a number parsed from `v` if possible.
- Trims whitespace; accepts numeric strings like `"3"` and `"  3  "`.
- Optionally normalizes thousands separators (`,`), e.g. `"1,234.56"` → `1234.56`.
- If conversion fails, returns `NaN`.

**Edge Cases:**
- `null`, `undefined`, empty string → `NaN`.
- Non-numeric strings → `NaN`.
