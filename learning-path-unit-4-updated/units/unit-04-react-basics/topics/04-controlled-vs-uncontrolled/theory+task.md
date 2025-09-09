# Topic: Controlled vs Uncontrolled — `ControlledInput`

## Concise Theory
Controlled inputs bind `value` to state + `onChange`. If `value` is initially **undefined**, React treats it as **uncontrolled** and later switching to controlled causes warnings/bugs. 
```jsx
// Controlled (recommended)
const [name, setName] = useState(""); // initialize to empty string, not undefined
<input value={name} onChange={e => setName(e.target.value)} />

// Implicit uncontrolled (problematic)
/* value is undefined on first render (e.g., data loads later) */
<input value={undefined} onChange={() => {}} />
```
**Fix:** Always initialize form fields to safe defaults ("", 0, false, [], {}) to avoid “uncontrolled → controlled” warnings and flickers.

---

## Topic Task — **ControlledInput**
Create a component with internal state `value` (initial `""`) and an `<input>` bound to it.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
