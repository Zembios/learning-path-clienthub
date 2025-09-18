# Unit 5 – React Advanced (Theory + Unit Task)

This unit covers: **useEffect with cleanup (polling), useMemo for derived data, useCallback for stable handlers, useRef for instanceful values, lifting state, Custom Hooks, and Higher‑Order Components (HOC).**

---

## Unit Task — “Mini Catalog Dashboard”

You’ll build a tiny but realistic dashboard that periodically fetches a list of products and lets the user search and sort them. The task showcases the topics from this unit in the smallest sensible code footprint.

### What you’ll build
- A `Dashboard` screen that uses a **custom hook** `usePolling(fetcher, intervalMs)` to poll for items and expose `{ data, loading, error, refresh }`.
- A `SearchBar` child that initially owns the search query locally, but you will **lift the state up** to `Dashboard` so that multiple children can share it.
- A memoized `ItemList` that renders products and calls a **stable** `onSelect` handler from the parent (created via **useCallback**).
- A derived `visibleItems` list computed with **useMemo** (filter + sort based on the search query).
- A **useRef** usage to show a ▲/▼/— indicator comparing the **previous total price** to the **current total price** after each poll.
- A simple **HOC** `withLoading` that shows a loading state while the wrapped component’s `loading` prop is `true`.

### Files to work in
- `./src/task/Dashboard.jsx` (entry screen that composes everything)
- `./src/task/hooks/usePolling.js` (custom hook — implement the polling)
- `./src/task/hoc/withLoading.jsx` (HOC for loading states)
- `./src/task/components/SearchBar.jsx` (lift state from here to `Dashboard`)
- `./src/task/components/ItemList.jsx` (memoized list rendered via `React.memo`)

A handful of **TODO** comments mark what you need to implement.

### Requirements (what the tests expect)
1. `usePolling` starts an interval, calls the provided `fetcher` on each tick, updates `data`, and **cleans up** on unmount. It must also expose a manual `refresh()` that triggers an immediate fetch.
2. `Dashboard` passes `loading` into the HOC‑wrapped list so that loading UI is shown while fetching.
3. `visibleItems` is computed with **useMemo** from `data` and the **lifted** `query` (case‑insensitive substring match) and sorted by name.
4. A stable `onSelect` callback (via **useCallback**) is passed to `ItemList`; the component should not re‑render when unrelated props change.
5. `useRef` stores the **previous total price** (sum of `price`) and renders an arrow: ▲ if the current total is greater, ▼ if less, and — if unchanged.
6. `SearchBar`’s local query is **removed** and replaced with **controlled props** `query` and `onQueryChange` from the parent (i.e., you *lift the state*).

### Run tests
```bash
npm run test:unit5
```

### Mock data shape
The `fetcher` returns a Promise of an array like:
```js
[{ id: "p1", name: "Apple", price: 1.2 }, { id: "p2", name: "Banana", price: 0.8 }]
```

### Project setup
The project has been set up at https://codesandbox.io/p/sandbox/intelligent-moser-cwcknm
You can open the link, login/register and then fork the repo to directly work on it (button "Fork" top right of the screen)
