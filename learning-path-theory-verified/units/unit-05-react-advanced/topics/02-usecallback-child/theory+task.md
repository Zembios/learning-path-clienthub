    # Topic: useCallback with Child

    ## Why this matters
    Stabilize function identities you pass to memoized children to avoid unnecessary re-renders.

    ## Concise Theory
    - `const onInc = useCallback(() => setCount(c => c+1), [])`
- Pass `onInc` to a `React.memo` child.

    ---

    ## Topic Task — **ParentChild**
    Build a parent that defines a memoized callback and passes it to a memoized child.

    **Where to implement:** `./src/topics/02-usecallback-child/ParentChild.jsx`  
    **How to verify:** `npm run test:unit5`
