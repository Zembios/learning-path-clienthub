JS:
    - primitives
    - type coercion
    - rest & spread operators 
    - object/array spreading (const { name } = user; const [el1, el2] = arr;)
    - higher order functions (.filter, .map...)
    - references vs raw values
    - hoisting
    - default param values for functions
    - property + method shorthands (
        const name = "Pesho"; 
        const greet = () => console.log("Opa, kak sme");
        const person = { name, greet };
        person.greet();
    )
    - arrow functions, anonymous functions
    - string literals
    - optional chaining
    - promises, async functions, .then
    - modules (export, import)

TS:
    - primitives (most important ones - string, number, boolean, null, undefined)
    - interfaces & types (types are generally preferred and more flexible)
    - unions & intersections
    - utility types (Partial, Pick, Omit, Record, Readonly)
    - Generics
    - Literal Types

React:
    - JSX/TSX
    - Component lifecycle
    - useState
    - useMemo
    - useCallback
    - useRef
    - useEffect
    - props & children
    - controlled vs uncontrolled components
    - conditional rendering (make sure importance of proper keys is emphasized)
    - Higher Order Components (Make sure an understandable and practical example is used)
    - custom hooks
    - Elevating state when multiple child components need the same state

AgGrid:
    - gridOptions
    - colDefs
    - defaultColDefs
    - Make sure some good examples showing the capabilities of AgGrid and its various potential usages (Don't go too far into detail, make sure the most important and common use cases are covered)

Formik + Yup:
    - Form management with tracking field values
    - touched fields and errors per field
    - setFieldValue/setValues
    - setFieldTouched
    - initialization of Formik (initialValues, onSubmit, validationSchema using Yup)

MUI:
    - Check the most commonly used components (Box, Typography, TextField, Select, Autocomplete...)
    - sx styling