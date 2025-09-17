import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/task/App";

describe("Unit 8 – User Profile Form (Formik + Yup + MUI)", () => {
  test("blocks submit on empty form, accepts valid input, and submits successfully", async () => {
    const user = userEvent.setup();
    // Spy on window.alert (called on successful submit)
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App />);

    // Headings
    expect(screen.getByRole("heading", { name: /user profile/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /account/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /profile/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /preferences/i })).toBeInTheDocument();

    // 1) Try submit with empty form -> should NOT call onSubmit (alert)
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alertSpy).not.toHaveBeenCalled();

    // 2) Fill valid values
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/password/i), "password123");
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    const ageInput = screen.getByLabelText(/age/i);
    await user.clear(ageInput);
    await user.type(ageInput, "25");

    // Country select
    await user.click(screen.getByLabelText(/country/i));
    const countryOption = await screen.findByRole("option", { name: /bulgaria/i });
    await user.click(countryOption);

    // Lobby Style select
    await user.click(screen.getByLabelText(/lobby style/i));
    const lobbyOption = await screen.findByRole("option", { name: /modern/i });
    await user.click(lobbyOption);

    // Newsletter switch
    const newsletter = screen.getByRole("checkbox", { name: /subscribe to newsletter/i });
    await user.click(newsletter);

    // Theme toggle (default may be 'light', switch to 'dark')
    await user.click(screen.getByRole("button", { name: /dark/i }));

    // 3) Submit should now succeed
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alertSpy).toHaveBeenCalled();

    alertSpy.mockRestore();
  });
});
