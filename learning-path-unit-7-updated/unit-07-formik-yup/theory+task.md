# Unit 7 – Formik & Yup

This unit covers: **useFormik initialization, tracking field values/touched/errors with MUI inputs, setFieldValue vs setValues, setFieldTouched, and Yup validation basics** (no async rules).

## Concise Theory

### Initialization with `useFormik`
Define `initialValues`, `validationSchema` (Yup), and `onSubmit`.
```jsx
import { useFormik } from "formik";
import * as Yup from "yup";

const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
    age: 0,
    lobbyStyle: "",       // select
    termsAccepted: false, // checkbox
  },
  validationSchema: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
    age: Yup.number().min(18, "Must be at least 18").required("Age is required"),
    lobbyStyle: Yup.string().oneOf(["classic","modern","compact"], "Invalid style").required("Select a style"),
    termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms"),
  }),
  onSubmit: (values) => {
    console.log("Submit:", values);
  },
});
```

### Tracking Fields & Errors (MUI)
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

### `setFieldValue` / `setValues` / `setFieldTouched`
Update a single field and mark touched; or update many at once.
```jsx
await formik.setFieldValue("age", 21, true);
formik.setFieldTouched("age", true, false);
formik.setValues({ ...formik.values, email: "test@example.com" });
```

### setFieldTouched
Mark a field as touched: `setFieldTouched("email", true, false)`.

### Yup Validation Basics
Model a realistic account form with nested objects and conditional rules.
```js
const schema = Yup.object({
  account: Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Minimum 8 chars").required("Password is required"),
  }).required(),

  profile: Yup.object({
    firstName: Yup.string().trim().required("First name is required"),
    lastName: Yup.string().trim().required("Last name is required"),
    age: Yup.number().min(18, "18+ only").required("Age is required"),
    country: Yup.string().required("Country is required"),
  }).required(),

  preferences: Yup.object({
    lobbyStyle: Yup.string().oneOf(["classic", "modern", "compact"]).required("Select a style"),
    newsletter: Yup.boolean().default(false),
    theme: Yup.mixed<"light" | "dark">().oneOf(["light","dark"]).required(),
  }).required(),

  // Example conditional: require 'compactReason' when style is 'compact'
  compactReason: Yup.string().when("preferences.lobbyStyle", {
    is: "compact",
    then: (s) => s.min(5, "Tell us why").required("Reason required for compact"),
    otherwise: (s) => s.strip(), // remove field if not applicable
  }),
});
```

---

## Unit Task
The unit task is a combined one for both unit 7 and unit 8. You will find it under `unit-08-mui-essentials/theory+task.md`