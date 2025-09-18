import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Example input data
const samplePeople = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "Diana Prince" },
  { id: 5, name: "Ethan Hunt" },
];

export default function App() {
  return (
    <PeopleList
      people={samplePeople}
      renderFooter={() => <div>Showing {samplePeople.length} people</div>}
    />
  );
}

/**
 * PeopleList — Unit Task
 *
 * Requirements checklist (mapped to TODO comments below):
 * 1) Controlled search input with useState (initial "")
 * 2) Case-insensitive filtering based on input value
 * 3) Render list <ul><li>{name}</li></ul> with proper keys
 * 4) Accessible empty state when no matches
 * 5) Optional renderFooter() under the list
 * 6) useEffect mount/unmount console.log
 *
 * API:
 * <PeopleList
 *   people={[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]}
 *   renderFooter={() => <div>Footer content</div>}
 * />
 */

export default function PeopleList({ people, renderFooter }) {
  // TODO(1): create state for a controlled search input, initial value ""

  // TODO(6): useEffect — issue console log on mount "mounted" and on unmount "unmounted"

  // TODO(2): derive a filtered list, **case-insensitive**, from props.people and the search query

  return (
    <div style={{ maxWidth: 420 }}>
      {/* TODO(1): controlled input: value comes from state, onChange updates state */}
      <label htmlFor="people-search" style={{ display: "block", fontWeight: 600 }}>
        Search people
      </label>
      <input
        id="people-search"
        type="text"
        placeholder="Type a name…"
        // value={...}
        // onChange={...}
        aria-label="Search people by name"
      />

      {/* TODO(3): render list of matching names as simple <li>{name}</li> items with proper keys */}
      {/* TODO(4): if no matches, render accessible empty state (e.g., role="status") */}
      {/* Example shape:
          {filtered.length > 0 ? (
            <ul>
              // Render list here...
            </ul>
          ) : (
            <div role="status">No matches</div>
          )}
      */}

      {/* TODO(5): if renderFooter is provided (conditional rendering), call it and render its result below the list */}
    </div>
  );
}