# Unit 4 – React Basics (Theory + Unit Task)
## Unit Task — PeopleList

Build a small **PeopleList** component that demonstrates core React basics from this unit:
- JSX composition
- Props (including **children** via a render prop for the footer)
- **Controlled input** with `useState`
- Basic list rendering with **keys**
- Simple lifecycle with `useEffect` (mount/unmount logging)
- Conditional rendering for an empty state

### API
```jsx
<PeopleList
  people={[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]}
  renderFooter={() => <div>Footer content</div>}
/>
```
- **people**: array of objects `{ id: number|string, name: string }` (required)
- **renderFooter**: optional function returning React nodes to render at the bottom

### Requirements
1. Render a **search input** that is **controlled** (its value comes from state, initial value is `""`).
2. Typing in the input **filters** the visible names **case-insensitively**.
3. Render the list of matching names as simple text nodes (e.g., `<li>{name}</li>` inside a `<ul>`).
4. If **no matches**, render an accessible empty state element with text like `"No matches"`.
5. If `renderFooter` is provided, call it and render its result under the list.
6. On **mount**, call `console.log("PeopleList mounted")`. On **unmount**, call `console.log("PeopleList unmounted")` via a cleanup function in `useEffect`.

### Where to implement
Edit the starter at: `./src/task/PeopleList.jsx`

### What you should NOT use
- No external state libraries; use React hooks only.
- No debouncing/throttling (keep it simple).
