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

# Task — User Profile Form (Formik + Yup + MUI)

## Goal
Build a **User Profile Form** using **Formik**, **Yup**, and **Material UI**.  
The form should be structured into three sections and validated with Yup.

---

## Sections & Fields

### 1. Account
- **email** — `<TextField />`
- **password** — `<TextField type="password" />`

### 2. Profile
- **firstName** — `<TextField />`
- **lastName** — `<TextField />`
- **age** — `<TextField />` (numeric)
- **country** — `<Select />`

### 3. Preferences
- **lobbyStyle** — `<Select />`
- **newsletterConsent** — `<Switch />`
- **theme** — `<ToggleButtonGroup />`

---

## Requirements

1. **Formik Setup**
   - Initialize a form using `useFormik`.
   - Provide `initialValues` shaped exactly as the model:
     ```js
     {
       account: { email: "", password: "" },
       profile: { firstName: "", lastName: "", age: "", country: "" },
       preferences: { lobbyStyle: "", newsletterConsent: false, theme: "light" }
     }
     ```

2. **Validation (Yup)**
   - `account.email`: required, valid email  
   - `account.password`: required, min 8 characters  
   - `profile.firstName`: required  
   - `profile.lastName`: required  
   - `profile.age`: required, integer, ≥ 13  
   - `profile.country`: required (one of the provided country options)  
   - `preferences.lobbyStyle`: required (one of the provided lobby styles)  
   - `preferences.newsletterConsent`: boolean  
   - `preferences.theme`: required (one of `light`, `dark`, `system`)  

3. **Error Handling**
   - Display validation errors below each field using Formik’s `touched` and `errors`.

4. **Form Actions**
   - Add **Reset** and **Submit** buttons.
   - On submit, log the form values to the console.

---

## Deliverables

- A working form component (`App.jsx` or similar) that:
  - Initializes Formik with nested initial values.
  - Uses Yup for validation.
  - Builds the form UI with the specified MUI components.
  - Displays validation errors clearly.
  - Handles submit and reset actions properly.

---

## Extra Notes
- Use **dot-notation** with Formik for nested fields (e.g. `"profile.firstName"`).
- For `<Select>`, `<Switch>`, and `<ToggleButtonGroup>`, remember to use `setFieldValue` and `setFieldTouched`.
- Keep the key names exactly as specified (`newsletterConsent`, `lobbyStyle`, etc.).

