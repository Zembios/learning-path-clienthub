import React from "react";
import { render, screen } from "@testing-library/react";
import { StatusBadge } from "../src/solution";

test("StatusBadge renders Active/Inactive", () => {
  const { rerender } = render(<StatusBadge active={true}/>);
  expect(screen.getByTestId("badge")).toHaveTextContent("Active");
  rerender(<StatusBadge active={false}/>);
  expect(screen.getByTestId("badge")).toHaveTextContent("Inactive");
});
