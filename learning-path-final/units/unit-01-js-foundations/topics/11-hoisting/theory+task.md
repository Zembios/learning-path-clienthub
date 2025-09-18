# Topic: Hoisting

Function declarations and var are hoisted (moved to top of scope). let/const are not accessible before declaration (Temporal Dead Zone). Use let/const to avoid subtle var bugs.
```js
sayHi(); // OK: function hoisted
function sayHi() { console.log("Hi!"); }

console.log(x); // undefined (var hoisted but uninitialized)
var x = 5;

console.log(y); // ReferenceError (TDZ)
let y = 10;
```

## Topic Task – **callBeforeDeclared()**
Call a function that is declared **after** the call and return its result.

**Function:** `callBeforeDeclared()`  
**Acceptance Criteria:**
- Internally calls a function that is declared after the call and returns its numeric result.

**Edge Cases:**
- Ensure the call site precedes the function declaration in source order.
