    # Topic: MUI Errors & Touched

    ## Why this matters
    Show errors only after fields are touched for a better UX.

    ## Concise Theory
    - Use `error={Boolean(touched.name && errors.name)}`.
- Use `helperText={touched.name && errors.name}`.

    ---

    ## Topic Task — **FieldWithError**
    Build a small component that renders a MUI TextField using the `touched` and `errors` props to show errors.

    **Where to implement:** `./src/topics/02-mui-errors-touched/FieldWithError.jsx`  
    **How to verify:** `npm run test:unit7`
