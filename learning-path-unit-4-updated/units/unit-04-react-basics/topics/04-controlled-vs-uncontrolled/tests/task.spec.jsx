import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../src/solution";

describe("Controlled vs Uncontrolled — ContactForm", () => {
  test("renders Name (controlled) and Message (uncontrolled) fields", () => {
    render(<ContactForm />);

    // Name input (controlled)
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();

    // Message textarea (uncontrolled)
    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toBeInTheDocument();
  });

  test("controlled Name shows live preview and validates min length", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);

    // Type too-short name
    fireEvent.change(nameInput, { target: { value: "Al" } });

    // Expect a validation message mentioning at least 3 characters
    const warning = screen.getByText(/at least\s*3/i);
    expect(warning).toBeInTheDocument();

    // Type a valid name and expect the warning to go away
    fireEvent.change(nameInput, { target: { value: "Alice" } });
    expect(screen.queryByText(/at least\s*3/i)).toBeNull();

    // Expect some live preview to reflect the current name
    const pageText = screen.getByText(/Alice/);
    expect(pageText).toBeInTheDocument();
  });

  test("submits both name (from state) and message (from ref) via alert or console", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const messageTextarea = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.change(messageTextarea, { target: { value: "Hello there!" } });

    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Click submit
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    const alertedWithBoth =
      alertSpy.mock.calls.some(
        args =>
          typeof args[0] === "string" &&
          args[0].includes("Alice") &&
          args[0].includes("Hello there!")
      );
    const loggedWithBoth =
      logSpy.mock.calls.some(
        args =>
          typeof args[0] === "string" &&
          args[0].includes("Alice") &&
          args[0].includes("Hello there!")
      );

    expect(alertedWithBoth || loggedWithBoth).toBe(true);

    alertSpy.mockRestore();
    logSpy.mockRestore();
  });
});
