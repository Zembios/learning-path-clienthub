# Topic: Higher-Order Functions (map, filter, reduce...)

These transform/derive data from arrays using callbacks.
- **map:** transform each item → new array
```js
const nums = [1, 2, 3];
console.log(nums.map(n => n * 2)); // [2,4,6] (e.g., adapt API data to UI)
```
- **filter:** keep items that meet a condition
```js
console.log(nums.filter(n => n > 1)); // [2,3] (e.g., show completed tasks)
```
- **reduce:** fold items into a single value
```js
console.log(nums.reduce((sum, n) => sum + n, 0)); // 6 (e.g., totals/aggregates)
```

## Topic Task – **sumPositive(nums)**
Return the sum of positive numbers only.

**Function:** `sumPositive(nums)`  
**Acceptance Criteria:**
- Returns the sum of strictly positive numbers (`> 0`) in the array using HOFs (e.g., `filter` + `reduce`).
- Ignores zeros and negatives.

**Edge Cases:**
- Empty array → `0`.
- Arrays with all non-positive values → `0`.
