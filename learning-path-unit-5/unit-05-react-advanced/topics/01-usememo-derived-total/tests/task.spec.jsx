import React from "react";
import { render, screen } from "@testing-library/react";
import { PricesTotal } from "../src/solution";

test("PricesTotal renders the sum", () => {
  render(<PricesTotal prices={[1,2,3]}/>);
  expect(screen.getByText(/total/i).textContent).toMatch(/6/);
});
