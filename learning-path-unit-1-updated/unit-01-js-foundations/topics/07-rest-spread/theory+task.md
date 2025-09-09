# Topic: Rest & Spread

Spread expands arrays/objects; rest collects multiple items into one.

- Spread in JSX props (common in React):

```jsx
const props = { id: 1, name: "Pesho" };
<UserCard {...props} />     // spreads props as separate attributes
```
- Function rest parameters (collect args):
```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));  // 6
```
- Array/object spread:
```js
const arr = [1, 2];
const arr2 = [...arr, 3, 4]; // [1,2,3,4]

const user = { name: "Pesho", role: "admin" };
const withAge = { ...user, age: 25 };
console.log(withAge);        // { name: "Pesho", role: "admin", age: 25 }
```
- Object rest in destructuring collects “the rest” of properties:
```js
const user2 = { id: 7, name: "Pesho", age: 25, city: "Sofia" };
const { id, ...restUser } = user2;
console.log(id);       // 7
console.log(restUser); // { name: "Pesho", age: 25, city: "Sofia" }
```
Difference: Function-parameter rest (...nums) collects arguments into an array. Object/array rest in destructuring collects remaining fields/elements; spread copies/expands into a new array/object.


## Topic Task – **mergeProps(base, overrides)**
Return `{ ...base, ...overrides }` without mutating inputs.
