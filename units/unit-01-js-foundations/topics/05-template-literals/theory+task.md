# Topic: Template Literals

Template literals embed variables/expressions directly in strings.

```js
const name = "Pesho";
console.log(`Hello, ${name}!`); // Hello, Pesho!
```

## Topic Task – **formatGreeting(name, count)**
`` `Hi ${name}! You have ${count} messages.` ``
Return a string exactly as above.

**Function:** `formatGreeting(name, count)`  
**Acceptance Criteria:**
- Returns exactly: `Hi ${name}! You have ${count} messages.`

**Edge Cases:**
- Works with `name` containing spaces or special characters.
