import React, { useState, useRef } from "react";

export default function ContactForm() {
  // TODO: 1. Create state for the controlled "name" field

  // TODO: 2. Create a ref for the uncontrolled "message" textarea

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: 3. On submit, get values of name (state) and message (ref)
    // TODO: 4. Show them in an alert or console.log
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      {/* Controlled input */}
      <label>
        Name:
        {/* TODO: Implement controlled input here */}
      </label>
      {/* TODO: Show live preview and validation message */}

      {/* Uncontrolled textarea */}
      <label>
        Message:
        {/* TODO: Implement uncontrolled textarea with ref here */}
      </label>

      <button type="submit">Send</button>
    </form>
  );
}