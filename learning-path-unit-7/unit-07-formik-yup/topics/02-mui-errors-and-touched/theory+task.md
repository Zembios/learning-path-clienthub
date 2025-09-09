# Topic: MUI Errors & Touched — `FieldWithError`

## Concise Theory
Tie value, onChange, onBlur, and touched/errors into MUI components to show built-in error UI.
```jsx
<TextField
  name="email"
  label="Email"
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.email && Boolean(formik.errors.email)}
  helperText={formik.touched.email && formik.errors.email}
/>

<Select
  name="lobbyStyle"
  label="Lobby Style*"
  value={formik.values.lobbyStyle}
  onChange={async (e) => {
    await formik.setFieldValue("lobbyStyle", e.target.value, true);
    formik.setFieldTouched("lobbyStyle", true, false);
  }}
  onBlur={formik.handleBlur}
  error={formik.touched.lobbyStyle && Boolean(formik.errors.lobbyStyle)}
  sx={{ mt: "2rem", mr: "2rem" }}
>
  <MenuItem value="classic">Classic</MenuItem>
  <MenuItem value="modern">Modern</MenuItem>
  <MenuItem value="compact">Compact</MenuItem>
</Select>
```

---

## Topic Task — **FieldWithError**
Create a component that renders a MUI `<TextField>` given props:
`{ name, label, value, touched, errorText, onChange }`
Show error when `touched` and `errorText` are truthy.

**Where to implement:** `./src/solution.jsx`  
**How to verify:** `npm run test:unit7`
