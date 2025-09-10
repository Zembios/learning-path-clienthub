# Topic: Keys & Lists — `buildKey(item)`

## Why this matters
Duplicate or unstable keys lead to **inconsistent DOM reuse** (wrong rows keeping state, inputs showing mismatched values). These bugs are **hard to trace**.

## Concise Theory
- Use stable IDs: `item.id`
- If multiple types share an ID space, compose: `` `${item.type}:${item.id}` ``
- **Avoid array indexes** when items can be added/removed/reordered.
```jsx
items.map(i => <Row key={`${i.type}:${i.id}`} item={i} />);

{users.map(u => (
  <div key={u.id}>{u.name}</div>
))}
```

---

## Topic Task — **buildKey(item)**
### Refactor the code so that:
 - Each task has a unique, stable id.
 - Use this id as the key instead of the index.
 - After shuffling, typed input should stay tied to the correct task.

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit4`
