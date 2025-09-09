# Unit 8 – MUI Essentials (Theory + Unit Task)

This unit covers: **Common components (Box, Typography, TextField, Select, Autocomplete, Button)** and **`sx` styling** with responsiveness and simple conditional styles.

## Concise Theory

### Common Components
MUI offers accessible, styled components out of the box.
- **Box**: generic layout primitive; accepts `sx`.
- **Typography**: semantic text variants (`h1`, `body2`, etc.).
- **TextField**: labeled input with states (`error`, `helperText`).
- **Select**: choose from options; use `native` for simpler testing/dev.
- **Autocomplete**: text input with suggestions (`options`, `value`, `onChange`, `renderInput`).
- **Button**: actions (`variant="contained" | "outlined"`).

```jsx
<Box p={2}>
  <Typography variant="h6">Hello</Typography>
  
  <TextField label="Name" variant="outlined" />
  
  <Select value={value} onChange={e => setValue(e.target.value)}>
    <MenuItem value="1">One</MenuItem>
  </Select>
  
  <Button variant="contained">Submit</Button>
  
  <Autocomplete
    options={["Apple", "Banana", "Cherry"]}
    value={fruit}
    onChange={(_, v) => setFruit(v)}
    renderInput={(params) => <TextField {...params} label="Fruit" />}
  />
</Box>
```

### `sx` Styling (Responsive & Conditional)
`sx` accepts a JS object with CSS-like keys, responsive breakpoints, and conditional expressions.
```jsx
<Box
  sx={{
    p: { xs: 1, sm: 2, md: 3 },        // responsive padding
    borderRadius: 2,
    border: "1px solid #ddd",
    display: "flex",
    gap: 2,
    alignItems: "center",
    // conditional styles
    ...(isActive ? { boxShadow: 4 } : { opacity: 0.7 }),
    // pseudo selectors
    "&:hover": { transform: "translateY(-2px)" },
    // nested component targeting
    ".MuiButton-root": { textTransform: "none" },
  }}
>
  <Button>Go</Button>
</Box>
```

---

## Unit Task – “Profile Settings Panel”

Implement `ProfileSettings` in `./src/task/ProfileSettings.jsx`:
- Render a heading with **Typography**: “Profile Settings”.
- Render controlled inputs:
  - **TextField** `Name`
  - **Select** `Role` (use `native` prop; options from `roles` prop)
  - **Autocomplete** `City` (options from `cities` prop; start with `defaultCity`)
- Use a **Box** container with responsive padding and a conditional background via `sx` based on a boolean `highlight` prop.
- Add a **Button** “Save” that calls `onSave({ name, role, city })` with the current values.

**Props**: `{ roles: string[], cities: string[], defaultCity?: string, highlight?: boolean, onSave: (payload) => void }`

Run: `npm run test:unit8`

### Example Data
```js
const roles = ["Admin", "User", "Guest"];
const cities = ["Sofia", "Plovdiv", "Varna"];
```
