import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterWithChild } from "../src/solution";

test("CounterWithChild increments via child callback", () => {
  render(<CounterWithChild/>);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText(/count:/i).textContent).toMatch(/1/);
});
