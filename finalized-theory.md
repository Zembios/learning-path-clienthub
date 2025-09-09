# 📘 Concise Theory Notes — Refined & Final

These are the compact, practical notes that match our learning path. Each topic includes 1–2 lines of context and a tiny, runnable example.

---

## Unit 1 — JavaScript Foundations

### Primitives
Atomic, immutable values copied **by value**. Know: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`.
```js
let s="hi", n=42, b=true, u, x=null, big=2n**63n, sym=Symbol("id");
```

### `typeof`
Quick runtime type check; returns a **string**. Remember the classic quirks.
```js
typeof "hi"   // "string"
typeof 42     // "number"  (NaN is also "number")
typeof null   // "object"  (legacy quirk)
Array.isArray([]) // true
```

### References vs Values
Objects/arrays/functions are **references**; two variables can point to the **same** object.
```js
const a={x:1}; 
const b=a; 
b.x=9; 
console.log(a.x); // 9
```

### Type Coercion (be explicit)
JS may convert types implicitly. Prefer `===` and explicit casts.
```js
"5"+2             // "52"
"5"-2             // 3
0 == false        // true  |  0 === false // false
null == undefined // true
+""               // 0, +"x" // NaN
```

### Template Literals
String interpolation with backticks.
```js
const name="Pesho"; 
console.log(`Hello, ${name}!`) // Hello, Pesho!;
```

### Default Parameters
Give safe defaults to avoid `undefined` checks.
```js
function greet (name="stranger") { 
  return `Hi ${name}`; 
}
```

### Rest & Spread
**Rest** gathers args; **spread** expands arrays/objects. Commonly used for component props.
```js
function sum(...nums){ return nums.reduce((s,n)=>s+n,0); }
const a=[1,2], b=[...a,3];              // array spread
const base={id:1,name:"Pesho"}, ui={...base, role:"admin"}; // object spread
// <UserCard {...ui} /> // mental model in React
```

### Object/Array Destructuring
Pull out fields quickly and clearly.
```js
const user={name:"Pesho", age:25}; const { name } = user; console.log(name); // "Pesho"
const arr=[10,20]; const [first, second]=arr; console.log(first, second);    // 10 20
```

### Property & Method Shorthands
Less boilerplate when keys equal variable names; concise methods.
```js
const nameVar="Pesho"; const person={ nameVar, greet(){ return "Hi"; } };
```

### Arrow & Anonymous Functions
Concise functions; lexical `this`.
```js
const add = (a,b)=>a+b; add(2,3); // 5
```

### Hoisting (and why we use `let`/`const`)
Function declarations are hoisted; `var` is hoisted (as `undefined`). `let/const` have a temporal dead zone—don’t use before declared.
```js
say(); function say(){}
var x; console.log(x); // undefined
let y; console.log(y); // ReferenceError if accessed before declaration
```

### map / filter / reduce
Workhorse array ops: **map** transforms, **filter** keeps, **reduce** folds into one value.
```js
[1,2,3].map(n=>n*2);          // [2,4,6]
[1,2,3].filter(n=>n>1);       // [2,3]
[1,2,3].reduce((s,n)=>s+n,0); // 6
```

---

## Unit 2 — Asynchronous JS & Modules

### Promises → `async/await`
Write async code that reads like sync. We let errors bubble (no try/catch here).
```js
async function fetchJson(url){
  const res = await fetch(url);
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
```

### Optional Chaining `?.`
Safely access nested properties or call possibly missing functions.
```js
const title = post?.title;
const first = post?.comments?.[0];
const ok = maybeFn?.();
```

### ES Modules Basics
Organize code with `export` / `import`.
```js
// math.js
export const PI = 3.14;
export default function add(a,b){ return a+b; }

// consumer.js
import add, { PI } from "./math.js";
```

---

## Unit 3 — TypeScript Foundations

### TS Primitives
Use `string | number | boolean | null | undefined` (with explicit unions), plus `bigint`, `symbol` when needed.

### Interfaces & Types
Both describe shapes; `type` is more flexible (unions/intersections), `interface` is great for object contracts.
```ts
type User = { id: string; name: string };
interface Product { id: string; price: number }
```

### Unions & Intersections
Unions model **one-of**; intersections combine shapes.
```ts
type Status = "pending" | "completed" | "canceled";
type Point = { x:number } & { y:number }; // { x, y }
```

### Utility Types
Powerful helpers to reshape types.
```ts
type Order = { id:string; status:"pending"|"completed"|"canceled"; total:number };

type P = Partial<Order>;             // all keys optional
type Prev = Pick<Order,"id"|"status">; // only id+status remain
type NoTotal = Omit<Order,"total">;  // everything except total
type ById = Record<string, Order>;   // map ids -> Order
type Frozen = Readonly<Order>;       // props read-only (compile-time)
```

### Generics
Keep type info intact.
```ts
function identity<T>(x:T):T { return x; }
function groupBy<T,K extends string|number>(arr:T[], key:(t:T)=>K): Record<K,T[]> { /* ... */ }
```

### Literal Types
Constrain inputs to exact values.
```ts
type Mode = "light" | "dark";
```

---

## Unit 4 — React Basics

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

---

## Unit 5 — React Advanced

### `useEffect` with Cleanup (polling)
Start intervals/subscriptions and clear them in the cleanup.
```jsx
useEffect(()=>{ const id=setInterval(tick, ms); return ()=>clearInterval(id); },[ms]);
```

### `useMemo` (derived data)
Compute expensive/derived values only when deps change.
```jsx
const total = useMemo(()=> items.reduce((s,i)=>s+i.value,0), [items]);
```

### `useCallback` (stable callbacks for children)
Pass stable function identities to memoized children.
```jsx
const onInc = useCallback(()=> setCount(c=>c+1), []);
const Child = React.memo(({ onInc })=> <button onClick={onInc}>+</button>);
```

### `useRef` (DOM & instance data)
Mutable box that persists across renders; doesn’t trigger renders. Useful for focusing, previous values, or third‑party APIs (e.g., AG Grid).
```jsx
const inputRef = useRef(null);
useEffect(()=>{ inputRef.current?.focus(); },[]);
```

### Custom Hooks
Extract reusable stateful logic.
```jsx
function useToggle(initial=false){ const [on,setOn]=useState(initial); const toggle=useCallback(()=>setOn(o=>!o),[]); return [on,toggle]; }
```

### Higher‑Order Components (HOC)
Function that returns a new component with extra behavior.
```jsx
const withLoading = (Wrapped) => (props) => props.loading ? <span>Loading...</span> : <Wrapped {...props}/>;
```

---

## Unit 6 — AgGrid Essentials

### Column Definitions (`colDefs`)
Configure how fields display: headers, formatters, renderers, and styles.
```js
const colDefs=[
  { field:"name", headerName:"Product", flex:1, cellRenderer:v=>`<strong>${v}</strong>` },
  { field:"price", headerName:"Price", valueFormatter:v=>`€${Number(v).toFixed(2)}` },
  { field:"status", headerName:"Status",
    cellRenderer: p=>`<span class='status status-${p.value}'>${String(p.value).toUpperCase()}</span>`,
    cellStyle: p=>({ color: p.value==="completed"?"green":p.value==="canceled"?"red":"gray" })
  }
];
```

### `defaultColDef` & Common Options
Share defaults once; keep columns terse.
```js
const defaultColDef={ sortable:true, filter:true, resizable:true };
```

### `gridOptions`
Wire columns and global features (selection, pagination, lifecycle).
```js
const gridOptions={ columnDefs: colDefs, defaultColDef, rowSelection:"single", pagination:true, paginationPageSize:20,
  onGridReady:(params)=> params.api.sizeColumnsToFit()
};
```

---

## Unit 7 — Formik & Yup

### `useFormik` Initialization
Define `initialValues`, `validationSchema` (Yup), and `onSubmit`.
```jsx
const formik = useFormik({ initialValues:{email:"",password:"",age:18,lobbyStyle:"casual",termsAccepted:false}, validationSchema: schema, onSubmit: submit });
```

### Tracking Fields & Errors (MUI)
Show errors after touch; keep inputs **controlled**.
```jsx
<TextField name="email" value={formik.values.email} onChange={formik.handleChange}
  onBlur={()=>formik.setFieldTouched("email",true,false)}
  error={Boolean(formik.touched.email && formik.errors.email)}
  helperText={formik.touched.email && formik.errors.email} />
```

### `setFieldValue` / `setValues` & `setFieldTouched`
Update a single field and mark touched; or update many at once.
```jsx
await formik.setFieldValue("lobbyStyle","casual",true);
formik.setFieldTouched("lobbyStyle", true, false);
```

### Yup Validation Basics
Practical schema with typical constraints (no async).
```js
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  age: Yup.number().min(18).required(),
  lobbyStyle: Yup.mixed().oneOf(["casual","ranked"]).required(),
  termsAccepted: Yup.boolean().oneOf([true])
});
```

---

## Unit 8 — MUI Essentials

### Common Components
Build UIs with accessible building blocks.
```jsx
<Box sx={{ p:2 }}>
  <Typography variant="h5">Title</Typography>
  <TextField label="Name" />
  <Select native defaultValue="User"><option>User</option></Select>
  <Autocomplete options={["Sofia","Plovdiv"]} renderInput={p=><TextField {...p} label="City" />} />
  <Button variant="contained">Save</Button>
</Box>
```

### `sx` Styling (Responsive & Conditional)
Responsive breakpoint values and state-driven styles in one place.
```jsx
<Box sx={{ p:{ xs:1, md:3 }, bgcolor: active ? "primary.main" : "grey.100" }} />
```

---

**Tip:** When in doubt, prefer explicitness (types, conversions, keys, dependencies) and keep side effects tidy with proper cleanup.
