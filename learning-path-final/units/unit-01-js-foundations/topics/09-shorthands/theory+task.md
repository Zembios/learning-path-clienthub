# Topic: Property/Method Shorthands

When variable names match keys, skip repetition.
```js
const nameVar = "Pesho";
const greet = () => console.log("Hi!");
const person = { name: nameVar, greet };
// shorthand: const person = { nameVar, greet }
person.greet(); // Hi!
```

## Topic Task – **makePerson(name)**
Return an object with `{ name, greet() }` where `greet()` returns `"Hi, ${name}!"`.

**Function:** `makePerson(name)`  
**Acceptance Criteria:**
- Returns an object shorthand like `{ name, greet(){...} }`.
- `greet()` returns `Hi, ${name}!`.

**Edge Cases:**
- Works for any string name.
