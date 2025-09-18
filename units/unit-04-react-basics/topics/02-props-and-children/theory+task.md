# Topic: Props & Children — `Panel`

## Concise Theory
Props pass data; children nests content.
```tsx
function Button({ label }: { label: string }) {
  return <button>{label}</button>;
}
<Button label="Click me" />;

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
<Card><p>Inside</p></Card>;
```

---

## Topic Task — **Panel**
Build `Panel({ title, children })` that renders a `<section>` with a `<h3>{title}</h3>` and `{children}`.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
