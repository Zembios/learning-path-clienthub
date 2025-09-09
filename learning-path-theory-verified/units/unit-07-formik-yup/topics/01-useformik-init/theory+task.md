    # Topic: useFormik Initialization

    ## Why this matters
    Initialize form state with `initialValues`, bind `onSubmit`, and hook up a Yup `validationSchema`.

    ## Concise Theory
    - `const formik = useFormik({ initialValues, onSubmit, validationSchema });`
- Use MUI inputs with `value`, `onChange`, and `error/helperText` tied to touched/errors.

    ---

    ## Topic Task — **buildValidationSchema()**
    Return a Yup schema validating email, password (min 8), age (>=18), lobbyStyle (oneOf), termsAccepted (must be true).

    **Where to implement:** `./src/topics/01-useformik-init/solution.js`  
    **How to verify:** `npm run test:unit7`
