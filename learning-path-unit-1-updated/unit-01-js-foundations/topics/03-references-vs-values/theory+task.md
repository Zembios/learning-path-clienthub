# Topic: References vs Values

### Theory
Objects/arrays are copied by reference (multiple variables can point to the same object).
```js
let a = 5;
let b = a;            // value copy
b = 10;
console.log(a);       // 5

let o1 = { x: 1 };
let o2 = o1;          // reference copy
o2.x = 99;
console.log(o1.x);    // 99
```

---

## Topic Task – **renameImmutable(user, newName)**
Return a **new object** with updated `name` without mutating the original.

**Function:** `renameImmutable(user, newName)`  
**Acceptance Criteria:**
- Returns a **new object**.
- Original object must remain unchanged.
- All other properties are preserved (shallow copy).

**Edge Cases:**
- If `user` has nested objects, they remain the same references (do not deep-clone).
