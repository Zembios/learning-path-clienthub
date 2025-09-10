# Unit 4 – React Basics (Theory + Unit Task)

### JSX & Props (+ Children)
Functions returning JSX; props are read-only. `props.children` lets components wrap content.
```jsx
function Hello({ name }){ return <h1>Hello, {name}!</h1>; }
function Panel({ title, children }){ return <section><h3>{title}</h3>{children}</section>; }
```

### `useState`
Local state triggers re-renders on update.
```jsx
const [value,setValue]=useState("");
```

### Controlled vs Uncontrolled (implicit pitfalls)
Controlled inputs bind `value` to state + `onChange`. If `value` is initially **undefined**, React treats it as **uncontrolled** and later switching to controlled causes warnings/bugs. Initialize text inputs with `""` (and suitable defaults for others).
```jsx
const [name,setName]=useState(""); // stays controlled
<input value={name} onChange={e=>setName(e.target.value)} />
```

### Conditional Rendering & **Unique Keys**
Keys help React match list items across renders. Duplicate/unstable keys cause subtle, hard-to-debug UI bugs (state “sticks” to the wrong row). Use stable IDs or composite keys—**never** array indexes if items reorder.
```jsx
items.map(i => <Row key={`${i.type}:${i.id}`} item={i} />);
```

### Lifecycle with Hooks (Virtual DOM + `useEffect`)
React diffs a new Virtual DOM against the previous to update only what changed. `useEffect` runs **after paint**; return a function to **cleanup** (unsubscribe/clear timers). Cleanup runs **before the next effect** and on **unmount**.
```jsx
useEffect(()=>{
  console.log("mounted");
  return ()=> console.log("unmounted");
},[]);
```

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
