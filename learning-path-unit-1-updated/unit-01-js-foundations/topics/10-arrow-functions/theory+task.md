# Topic: Arrow & Anonymous Functions

Arrows are concise and don’t create their own this. Anonymous functions have no name.

```js
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5

setTimeout(() => console.log("Done!"), 1000);
```

## Topic Task – **sumPairs(pairs)**
Given `[[1,2],[3,4]]` produce `[3,7]` as function result.

**Function:** `sumPairs(pairs)`  
**Acceptance Criteria:**
- Given `pairs` as array of two-number arrays (e.g., `[[1,2],[3,4]]`), return an array with each pair summed.
- Use concise arrow functions in your implementation.

**Edge Cases:**
- Empty input → empty array.
- Pairs containing zeros and negatives should be handled.
