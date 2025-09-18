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

// Uncontrolled (Managed by the DOM). Correct, just not too common
const uncontrolledRef = useRef<HTMLInputElement>(null);
<input type="text" ref={uncontrolledRef} defaultValue="Initial" />
```
**Fix:** Always initialize form fields to safe defaults ("", 0, false, [], {}) to avoid “uncontrolled → controlled” warnings and flickers.

---

## Topic Task — **ControlledInput**
Implement a React component `ContactForm` that includes:

### 1. Controlled input (Name)
 - Use React state to manage the name field.
 - Display the current value below the input (live preview).
 - Add a rule: name must be at least 3 characters, otherwise show a red warning message.

### 2. Uncontrolled textarea (Message)
 - Use a ref to capture the message when the form is submitted.
 - Do not keep it in React state.
### 3. Submit button
 - When the form is submitted, prevent default form behavior.
 - Show an alert (or console.log) with both the name and the message.

**Where to implement:** `./src/solution.jsx`
**How to verify:** `npm run test:unit4`
