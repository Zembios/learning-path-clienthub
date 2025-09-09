# Topic: setFieldValue / setFieldTouched — `handleLobbyStyleChange(formik, value)`

## Concise Theory
Update a single field and mark touched; or update many at once.
```jsx
await formik.setFieldValue("age", 21, true);
formik.setFieldTouched("age", true, false);
formik.setValues({ ...formik.values, email: "test@example.com" });
```

---

## Topic Task — **handleLobbyStyleChange(formik, value)**
Call both methods as above.

**Where to implement:** `./src/solution.js`  
**How to verify:** `npm run test:unit7`
