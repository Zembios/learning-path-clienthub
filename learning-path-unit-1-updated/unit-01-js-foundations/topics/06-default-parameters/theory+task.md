# Topic: Default Parameters

Default values remove the need to guard against undefined.

```js
function greet(name = "stranger") {
  console.log(`Hello, ${name}`);
}
greet();        // Hello, stranger
greet("Ivan");  // Hello, Ivan
```

## Topic Task – **makeRange(start=0, end=3)**
Return an array of integers `[start, ..., end-1]`.

**Function:** `makeRange(start=0, end=3)`  
**Acceptance Criteria:**
- Returns array of integers from `start` inclusive to `end` exclusive.
- Defaults: `makeRange()` → `[0,1,2]`.

**Edge Cases:**
- If `start >= end`, return `[]`.
