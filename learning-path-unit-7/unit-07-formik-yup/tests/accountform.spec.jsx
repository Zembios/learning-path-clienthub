import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { AccountForm } from "../src/task/AccountForm";

describe("Unit 7 – Account Signup Form", () => {
  test("renders and submits valid values", async () => {
    const onSubmit = jest.fn();
    render(<AccountForm onSubmit={onSubmit} />);

    // Fill email & password; assume defaults for age/lobbyStyle are valid; set terms to true.
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const terms = screen.getByLabelText(/terms/i);

    fireEvent.change(email, { target: { value: "a@b.com" } });
    fireEvent.change(password, { target: { value: "12345678" } });
    fireEvent.click(terms);

    // submit
    const submit = screen.getByRole("button", { name: /submit/i });
    await act(async () => {
      fireEvent.click(submit);
    });

    expect(onSubmit).toHaveBeenCalled();
    const values = onSubmit.mock.calls[0][0];
    expect(values).toEqual({
      email: "a@b.com",
      password: "12345678",
      age: 18,
      lobbyStyle: "casual",
      termsAccepted: true,
    });
  });
});
