import React, { useState } from "react";

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Conditional Rendering Example</h2>

      {isLoggedIn ? (
        <>
          <p>Welcome back, user! 🎉</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to continue.</p>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;