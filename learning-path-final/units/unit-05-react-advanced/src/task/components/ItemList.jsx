import React from "react";

const List = ({ items, onSelect }) => {
  if (!items || items.length === 0) {
    return <div>No items.</div>;
  }

  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>
          <button onClick={() => onSelect(it)} aria-label={`select-${it.id}`}>
            {it.name} — {Number(it.price || 0).toFixed(2)}
          </button>
        </li>
      ))}
    </ul>
  );
}

// Memoized list to avoid re-renders when handlers/props are stable
export const ItemList = React.memo(List);
