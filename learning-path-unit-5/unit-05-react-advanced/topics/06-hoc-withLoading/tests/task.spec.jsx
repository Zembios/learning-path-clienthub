import React from "react";
import { render, screen } from "@testing-library/react";
import { withLoading } from "../src/solution";

function Base({ text }){ return <div>{text}</div>; }

test("withLoading shows fallback when loading", () => {
  const Wrapped = withLoading(Base);
  const { rerender } = render(<Wrapped loading={true} text="X" />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  rerender(<Wrapped loading={false} text="Done" />);
  expect(screen.getByText("Done")).toBeInTheDocument();
});
