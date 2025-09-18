import React, { useState, useEffect, useRef } from "react";

/**
 * SearchBar
 * Initially this component owned its own local `query` state.
 * For the exercise, you must LIFT that state to the parent (Dashboard)
 * and make this a controlled input using `props.query` and `props.onQueryChange`.
 */
export function SearchBar({ onRefresh, loading }) {
  const [query, setQuery] = useState(""); // ← remove and use props instead

  // TODO: Make use of useRef here to focus the input on mount.
  return (
    <div>
      <input
        // ref={inputRef}
        placeholder="Search products…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-label="search"
      />
      <button onClick={onRefresh} disabled={loading}>
        {loading ? "Refreshing…" : "Refresh"}
      </button>
    </div>
  );
}
