import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Parent from "../src/solution";

describe("Shared State Task", () => {
  test("typing in ChildA updates both ChildA and ChildB", () => {
    render(<Parent />);

    // Input inside ChildA
    const input = screen.getByRole("textbox");

    // ChildA starts with default value
    expect(input.value).toBe("Hello from ChildA!");
    expect(screen.getByText(/Message: Hello from ChildA!/i)).toBeInTheDocument();

    // ChildB should also show the initial message once state is lifted
    expect(screen.getByText(/Message: Hello from ChildA!/i)).toBeInTheDocument();

    // Update input
    fireEvent.change(input, { target: { value: "Shared message!" } });

    // Both should reflect new value
    expect(screen.getAllByText(/Message: Shared message!/i).length).toBe(2);
  });
});
