import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ControlledInput } from "../src/solution";

test("ControlledInput allows typing and stays controlled", () => {
  render(<ControlledInput/>);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input).toHaveValue("abc");
});
