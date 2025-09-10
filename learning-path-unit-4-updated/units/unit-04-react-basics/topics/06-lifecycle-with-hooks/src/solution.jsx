import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ✅ componentDidMount equivalent
  useEffect(() => {
    console.log("📌 Component mounted (like componentDidMount)");
    
    // Cleanup function runs before unmount
    return () => {
      console.log("🧹 Component unmounted (like componentWillUnmount)");
    };
  }, []); // Empty deps → runs only once

  // ✅ componentDidUpdate equivalent for "count"
  useEffect(() => {
    if (count > 0) {
      console.log(`🔄 Count changed to ${count} (like componentDidUpdate)`);
    }
  }, [count]); // Runs every time "count" changes

  // ✅ Effect without deps runs after *every render*
  useEffect(() => {
    console.log("✨ Runs after every render");
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
    </div>
  );
};

export default Counter;
