import React, { useState } from "react";

// Parent component
const Parent = () => {
  return (
    <div>
      <h2>Shared State Task</h2>
      {/* TODO: Move the shared state here in the parent
          so both ChildA and ChildB can access it */}
      
      <ChildA /* TODO: Pass state + setter as props */ />
      <ChildB /* TODO: Receive shared state as prop */ />
    </div>
  );
};

// ChildA: currently holds the state
const ChildA = () => {
  // This state should be lifted up to Parent
  const [message, setMessage] = useState("Hello from ChildA!");

  return (
    <div style={{ border: "1px solid blue", padding: "8px", margin: "8px" }}>
      <h3>Child A</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>Message: {message}</p>
    </div>
  );
};

// ChildB: should also display the same message
const ChildB = () => {
  // TODO: Get the message from Parent instead of defining its own
  return (
    <div style={{ border: "1px solid green", padding: "8px", margin: "8px" }}>
      <h3>Child B</h3>
      {/* TODO: Display the shared message here */}
      <p>Message: (shared state goes here)</p>
    </div>
  );
};

export default Parent;
