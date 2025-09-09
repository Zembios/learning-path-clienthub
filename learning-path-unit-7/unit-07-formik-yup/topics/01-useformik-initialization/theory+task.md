# Topic: useFormik Initialization — `makeInitialValues()`

## Concise Theory
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

---

## Topic Task — **makeInitialValues()**

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit7`
