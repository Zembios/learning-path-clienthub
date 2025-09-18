import React from "react";
import { render, screen } from "@testing-library/react";
import { HelloName } from "../src/solution";

test("HelloName renders greeting", () => {
  render(<HelloName name="Pesho" />);
  expect(screen.getByRole("heading", { name: "Hello, Pesho!" })).toBeInTheDocument();
});
