import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProfileSettings } from "../src/task/ProfileSettings";

const roles = ["Admin", "User", "Guest"];
const cities = ["Sofia", "Plovdiv", "Varna"];

describe("Unit 8 – Profile Settings Panel", () => {
  test("renders heading and controls, updates values, and saves payload", () => {
    const onSave = jest.fn();
    render(<ProfileSettings roles={roles} cities={cities} defaultCity="Sofia" highlight={true} onSave={onSave} />);

    // Heading
    expect(screen.getByRole("heading", { name: /profile settings/i })).toBeInTheDocument();

    // Name input
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "Alice" } });
    expect(nameInput).toHaveValue("Alice");

    // Role select (prefer native for simpler test)
    const roleSelect = screen.getByLabelText(/role/i);
    fireEvent.change(roleSelect, { target: { value: "User" } });
    expect(roleSelect).toHaveValue("User");

    // City (Autocomplete) — ensures initial default is shown
    const cityInput = screen.getByLabelText(/city/i);
    expect(cityInput).toHaveValue("Sofia");

    // Save
    fireEvent.click(screen.getByRole("button", { name: /save/i }));
    expect(onSave).toHaveBeenCalledWith({ name: "Alice", role: "User", city: "Sofia" });
  });
});
