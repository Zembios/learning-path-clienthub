# Topic: Async/Await Basics – `fetchJson(url)`

## Why this matters
Async/await lets you write asynchronous code that **reads like synchronous code**, making logic easier to follow.

## Concise Theory
- `await` pauses inside an `async` function until the Promise settles.
- Don’t mix `then` chains with `await` for the same call; pick one style.

```js
const fetchData = () => {
  return new Promise(resolve => setTimeout(() => resolve("data"), 1000))
};

fetchData().then(res => console.log(res)); // "data"

async function run() {
  const res = await fetchData();
  console.log(res);          // "data"
}
run();
```

---

## Topic Task — **fetchJson(url)**
Implement the function above.

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit2`
