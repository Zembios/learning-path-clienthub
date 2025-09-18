import React, { useState, useMemo } from "react";

function ExpensiveList({ numbers }) {
  const [filter, setFilter] = useState("");

  // Expensive computation: filtering + sorting
  const filteredAndSorted = useMemo(() => {
    console.log("Computing expensive operation...");
    return numbers
      .filter((n) => n.toString().includes(filter))
      .sort((a, b) => a - b);
  }, [numbers, filter]); // Only recompute when numbers or filter changes

  return (
    <div>
      <input
        type="text"
        placeholder="Filter numbers..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredAndSorted.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const numbers = [100, 23, 45, 78, 123, 56, 89];

  return (
    <div>
      <h2>Numbers</h2>
      <ExpensiveList numbers={numbers} />
    </div>
  );
}
