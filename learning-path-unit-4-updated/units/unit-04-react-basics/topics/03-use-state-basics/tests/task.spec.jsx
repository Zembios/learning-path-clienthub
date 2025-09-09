import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "../src/solution";

test("Counter increments", () => {
  render(<Counter/>);
  const btn = screen.getByRole("button");
  expect(btn).toHaveTextContent("0");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("1");
});
