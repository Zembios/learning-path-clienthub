# Unit 1 – JavaScript Foundations (Theory + Unit Task)

This unit covers: **Primitives, typeof, References vs Values, Type Coercion, Template Literals, Default Params, Rest/Spread, Destructuring, Shorthands, Arrow Functions, Hoisting, map/filter/reduce.**

## Concise Theory

### Primitives
Smallest, immutable values; copied by value.
```js
let s = "Hi"; 
let n = 42; 
let b = true; 
let u; 
let x = null; 
let big = 2n ** 63n; 
let sym = Symbol("id");
```

### typeof Operator
Runtime type check that returns a **string**.
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
Patterns:
```js
if (typeof v === "number" && Number.isFinite(v)) {}
if (typeof v === "string") {}
```

### References vs Values
Objects/arrays are references (two vars can point to same object).
```js
const o1 = { x:1 }; 
const o2 = o1; 
o2.x = 9; 
console.log(o1.x); // 9
```

### Type Coercion
JS may convert types implicitly. Prefer `===` and make conversions explicit.
```js
"5"+2 // "52"; 
"5"-2 // 3; 
true+1 // 2
0 == false // true; 
0 === false // false
null == undefined // true; 
null === undefined // false
[] + [] // ""; 
[1] + [2] // "12"; 
+"" // 0; 
+"x" // NaN
```

### Template Literals
```js
const name="Pesho"; console.log(`Hello, ${name}!`);
```

### Default Parameters
```js
function greet(name="stranger"){ return `Hi ${name}`; }
```

### Rest & Spread
- Rest collects; spread expands.
```js
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
const a=[1,2]; const a2=[...a,3];
const user={ name:"Pesho", role:"admin", age:25 };
const props={ id:1, name:"Pesho" }; /* JSX mental model */ /* <UserCard {...props}/> */
```
Object rest:
```js
const { name, ...rest } = user;
```

### Destructuring
```js
user.name = 'Pesho'
const { name: n } = user; 
console.log(n); // Pesho

const [first, second] = [10,20]; 
console.log(first, second); // 10 20
```

### Shorthands
```js
const nameVar = "Pesho"; 
const greet = () => "Hi"; 
const person = { nameVar, greet };
```

### Arrow & Anonymous Functions
```js
const add = (a,b) => a + b; 
setTimeout(() => console.log("tick"), 1000);
```

### Hoisting
Function declarations are hoisted; `var` is hoisted (undefined). `let/const` have TDZ and aren’t usable before declaration.
```js
sayHi(); // OK: function hoisted
function sayHi() { console.log("Hi!"); }

console.log(x); // undefined (var hoisted but uninitialized)
var x = 5;

console.log(y); // ReferenceError (TDZ)
let y = 10;
```

### HOFs: map/filter/reduce
- **map**: transform items
- **filter**: keep items
- **reduce**: fold into one value
```js
const nums = [1, 2, 3];
console.log(nums.map(n => n * 2)); // [2,4,6]
console.log(nums.filter(n => n > 1)); // [2,3]
console.log(nums.reduce((sum, n) => sum + n, 0)); // 6
```

---

## Unit Task – “Order Stats Toolkit”
**Files:** Implement in `./src/task/solution.js` the following functions:
- `parseNumberLike(v)`
- `computeOrderTotal(order)`
- `summarize(orders) -> { totalRevenue, topCustomers, avgOrderValue }`
- `formatSummary(summary)`
- `mergeOrders(...lists)`

**General Notes**
- Do not mutate input objects/arrays. Return new objects/arrays where appropriate.
- Treat `status: "completed"` orders as revenue; ignore others for revenue/averages.
- To test after implementing, run: `npm run test:unit1`

**Function Specs & Acceptance Criteria**

1) `parseNumberLike(v)`  
Parses values that look like numbers into a `number`.
- Trims whitespace.
- Accepts numeric values and numeric strings (e.g., `"3"`, `"  3  "`).
- Accepts thousands separators as commas (e.g., `"1,234.56"` → `1234.56`).
- Returns `NaN` for non‑numeric values (e.g., `undefined`, `null`, `""`, `"x"`).

2) `computeOrderTotal(order)`  
Computes total cost of an order from its items.
- Each item has `{ name, qty, price }` where `qty` or `price` may be strings or numbers.
- Uses `parseNumberLike` for qty & price.
- Ignores items where qty or price is not a valid number (`NaN`).
- Returns a `number` sum of `qty * price` across items. If no valid items, returns `0`.

3) `summarize(orders)` → `{ totalRevenue, topCustomers, avgOrderValue }`  
Summarizes **only `status: "completed"`** orders.
- `totalRevenue`: sum of `computeOrderTotal(order)` for completed orders.
- `avgOrderValue`: `totalRevenue / countOfCompletedOrders` (0 if none).
- `topCustomers`: an array of `{ customer, revenue }` sorted by `revenue` desc, then by `customer` asc, limited to top 3 unique customers.
  - Revenue per customer is the sum of their completed orders.

4) `formatSummary(summary)`  
Formats the summary into a readable string:
`Total Revenue: <amount>
Avg Order Value: <amount>
Top Customers:
1) <name> – <amount>
2) ...`  
- Amounts should be fixed to 2 decimals (e.g., `1234.50`). If `topCustomers` is empty, still print the header with no entries after it.

5) `mergeOrders(...lists)`  
Merges multiple order lists into a single array without duplicates by `id`.
- Later lists override earlier ones when the same `id` appears.
- Returns a new array sorted by numeric order of `id` ascending (treat string ids as numbers, e.g., `"1002"` < `"10010"`).

**Edge Cases to Consider**
- Missing or empty `items` arrays.
- Non‑completed statuses should not affect revenue/avg but should still be mergeable.
- In `parseNumberLike`, ensure `NaN` is returned for non‑numeric inputs.

### Example Input
```js
const orders = [
  { id:"1001", customer:"Alice", status:"completed", items:[{name:"Widget", qty:"2", price:"19.99"}, {name:"Gadget", qty:1, price:"10"}] },
  { id:"1002", customer:"Bob", status:"completed", items:[{name:"Widget", qty:"1", price:"1,234.56"}, {name:"Thing", qty:"3", price:2.5}] },
  { id:"1003", customer:"Alice", status:"pending", items:[{name:"Extra", qty:"10", price:"1"}] },
  { id:"1004", customer:"Charlie", status:"completed", items:[{name:"Cheap", qty:"3", price:"2"}] },
  { id:"1005", customer:"Dana", status:"canceled", items:[] },
];
```
