# Unit 5 – React Advanced (Theory + Unit Task)

Covers useEffect with cleanup (polling), useMemo, useCallback (child memo), useRef usage.

## Unit Task – “Polling Dashboard”
Implement `Dashboard` in `./src/task/Dashboard.jsx`:
- Start an interval in useEffect (5s), fetch data (mocked in tests), cleanup on unmount
- useMemo for derived totals
- useCallback to pass stable handler to memoized child
- useRef to focus an input or store previous total

Run: `npm run test:unit5`
