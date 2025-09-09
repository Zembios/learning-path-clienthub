# Topic: Destructuring

Destructuring extracts values concisely.


```js
const user = { name: "Pesho", age: 25 };
const { name } = user;
console.log(name); // "Pesho"

const arr = [10, 20];
const [first, second] = arr;
console.log(first, second); // 10 20
```

## Topic Task – **pickName(user)**
Return `user.name` (prefer destructuring in your solution). Log the value in the example: `console.log(name)`.

**Function:** `pickName(user)`  
**Acceptance Criteria:**
- Returns the `name` property using object destructuring.

**Edge Cases:**
- If `name` is missing, return `undefined`.
