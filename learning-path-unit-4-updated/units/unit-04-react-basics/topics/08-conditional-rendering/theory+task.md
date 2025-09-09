# Topic: Conditional Rendering — `StatusBadge`

## Why this matters
Conditionally showing/hiding content is a core UI skill.

## Concise Theory
- Use ternaries or `&&` to conditionally render.
- Keep return paths explicit for readability.
```jsx
{someVariable && (
    <Box sx={/* some styles... */}>{someContent}</Box>
)}

{someCondition ? 
    (<Box sx={/* some styles... */}>{someContent}</Box>)
    :
    (<Box sx={/* some other styles... */}>{someOtherContent}</Box>)
}
---

## Topic Task — **StatusBadge**
Render `"Active"` in a `<span>` with `data-testid="badge"` when `active` prop is true; otherwise `"Inactive"`.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit4`
