# Topic: setFieldValue / setFieldTouched

## Concise Theory
Update a single field and mark touched; or update many at once.
```jsx
await formik.setFieldValue("age", 21, true);
formik.setFieldTouched("age", true, false);
formik.setValues({ ...formik.values, email: "test@example.com" });
```