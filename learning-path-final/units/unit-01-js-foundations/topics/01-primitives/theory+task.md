# Topic: Primitives

### Theory
Primitives are immutable and copied by value.

```js
let s = "Hi"; 
let n = 42; 
let b = true; 
let u; 
let x = null; 
let big = 2n ** 63n; 
let sym = Symbol("id");
```

---

## Topic Task – **isPrimitive(v)**
Recognize JS primitive values (string, number, boolean, undefined, symbol, bigint, null).

**Function:** `isPrimitive(v)`  
**Acceptance Criteria:**
- Returns `true` for: string, number (including `NaN`), boolean, `undefined`, `null`, `symbol`, `bigint`.
- Returns `false` for: objects, arrays, functions, and wrapper objects like `new Number(1)`, `new String('x')`.

**Edge Cases:**
- `NaN` is a number primitive → `true`.
- `Object(5)` and `Object('a')` are objects → `false`.
