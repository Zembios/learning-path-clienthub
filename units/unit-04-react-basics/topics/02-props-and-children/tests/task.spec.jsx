import React from "react";
import { render, screen } from "@testing-library/react";
import { Panel } from "../src/solution";

test("Panel renders title and children", () => {
  render(<Panel title="T"><span>Inner</span></Panel>);
  expect(screen.getByRole("heading", { level: 3, name: "T" })).toBeInTheDocument();
  expect(screen.getByText("Inner")).toBeInTheDocument();
});
