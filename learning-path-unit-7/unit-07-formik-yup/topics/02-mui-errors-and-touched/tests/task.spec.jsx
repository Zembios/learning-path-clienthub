import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FieldWithError } from "../src/solution";

test("FieldWithError shows helper text only when touched and error", () => {
  const { rerender } = render(
    <FieldWithError name="email" label="Email" value="" touched={false} errorText={undefined} onChange={()=>{}}/>
  );
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.queryByText(/required/i)).toBeNull();

  rerender(<FieldWithError name="email" label="Email" value="" touched={true} errorText={"Required"} onChange={()=>{}} />);
  expect(screen.getByText("Required")).toBeInTheDocument();
});
