    # Topic: useEffect Cleanup (Polling)

    ## Why this matters
    Cleanups prevent memory leaks and duplicate timers. Always return a cleanup function when you start intervals/timeouts/subscriptions.

    ## Concise Theory
    - `useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);`
- Cleanup runs on unmount and before the next effect run.

    ---

    ## Topic Task — **Poller**
    Implement a `Poller` component that starts an interval and cleans it up on unmount.

    **Where to implement:** `./src/topics/01-useeffect-cleanup/Poller.jsx`  
    **How to verify:** `npm run test:unit5`
