import React, { useMemo, useCallback, useRef, useState } from "react";
import { usePolling } from "./hooks/usePolling";
import { withLoading } from "./hoc/withLoading";
import { SearchBar } from "./components/SearchBar";
import { ItemList } from "./components/ItemList";

/**
 * Dashboard — Mini Catalog
 * - Uses a custom polling hook to fetch items
 * - Lifts `query` state from SearchBar (TODO)
 * - Memoizes derived `visibleItems` (TODO)
 * - Exposes stable callbacks via useCallback (TODO)
 * - Tracks previous total price via useRef (TODO)
 */
export function Dashboard({ fetcher, intervalMs = 5000 }) {
  const { data, loading, error, refresh } = usePolling(fetcher, intervalMs);

  // TODO(LIFTING STATE): Replace this local state in SearchBar.jsx with
  // lifted state here, then pass `query` and `onQueryChange` as props.
  const [query, setQuery] = useState("");

  // Derive visibleItems from data + query; sort by name asc
  const visibleItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (data || [])
      .filter(() => {
        /* TODO: Implement */
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [data, query]);

  // Total price
  const total = useMemo(
    () =>
      visibleItems.reduce(() => {
        /* TODO: Implement */
      }, 0),
    [visibleItems]
  );

  // TODO(useMemo): Reimplement the calculation of the delta (▲, ▼, —) indicator inside
  // a useMemo (no need for useRef here)
  const prevTotalRef = useRef(total);
  let delta = "—";
  if (total > prevTotalRef.current) delta = "▲";
  else if (total < prevTotalRef.current) delta = "▼";
  prevTotalRef.current = total;

  // TODO: Update the handlers with useCallback so no unnecessary rerenders happen in child components
  const handleRefresh = () => {
    refresh();
  };

  const handleSelect = (item) => {
    // noop; can alert item's details
  };

  // TODO: Apply the HOC (withLoading) on the ItemList
  const LoadingList = ItemList;

  return (
    <div>
      <h2>Mini Catalog Dashboard</h2>

      <SearchBar
        /* TODO(LIFTING STATE): supply props from lifted state here */
        onRefresh={handleRefresh}
        loading={loading}
      />

      {error && <div role="alert">Error: {String(error)}</div>}

      <div aria-label="total">
        Total price: <strong>{total.toFixed(2)}</strong>{" "}
        <span aria-label="delta">{delta}</span>
      </div>

      <LoadingList
        loading={loading}
        items={visibleItems}
        onSelect={handleSelect}
      />
    </div>
  );
}
