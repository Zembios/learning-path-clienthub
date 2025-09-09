    # Topic: Controlled vs Uncontrolled Inputs

    ## Why this matters
    A controlled component uses React state for `value` and `onChange`. Avoid initializing with `undefined` to prevent uncontrolled warnings.

    ## Concise Theory
    - Initialize with `""` not `undefined`.
- Keep `value` and `onChange` in sync.

    ---

    ## Topic Task — **ControlledInput**
    Build a small component that renders an `<input>` controlled by internal state (starts at `""`).

    **Where to implement:** `./src/topics/01-controlled-vs-uncontrolled/ControlledInput.jsx`  
    **How to verify:** `npm run test:unit4`
