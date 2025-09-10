/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import KeysExample from "./solution.jsx";

/**
 * This test verifies PROPER key usage (stable ids).
 * Steps:
 *  1) Type into the first input ("Learn React").
 *  2) Shuffle (reverse) the list.
 *  3) Expect the typed value to follow the "Learn React" item,
 *     which is now the last row after reversing.
 */
describe("KeysExample — stable keys keep DOM state attached to items", () => {
  test("typed input stays with its logical item after reorder", async () => {
    const user = userEvent.setup();
    render(<KeysExample />);

    // Initial rows
    const rowsBefore = screen.getAllByTestId("row");
    const firstRowBefore = rowsBefore[0];
    const firstLabelBefore = within(firstRowBefore).getByLabelText("task-label");
    const firstInputBefore = within(firstRowBefore).getByRole("textbox");

    expect(firstLabelBefore).toHaveTextContent("Learn React");
    expect(firstInputBefore).toHaveValue("Learn React");

    // Type into the first input
    await user.type(firstInputBefore, " !!!");
    expect(firstInputBefore).toHaveValue("Learn React !!!");

    // Shuffle (reverse)
    await user.click(screen.getByText("Shuffle Tasks"));

    // After reverse, "Learn React" is now the LAST row
    const rowsAfter = screen.getAllByTestId("row");
    const lastRowAfter = rowsAfter[rowsAfter.length - 1];
    const lastLabelAfter = within(lastRowAfter).getByLabelText("task-label");
    const lastInputAfter = within(lastRowAfter).getByRole("textbox");

    // The input value should have moved with the "Learn React" item
    expect(lastLabelAfter).toHaveTextContent("Learn React");
    expect(lastInputAfter).toHaveValue("Learn React !!!");

    // Sanity check: first row is now "Test App" with untouched value
    const firstRowAfter = rowsAfter[0];
    const firstLabelAfter = within(firstRowAfter).getByLabelText("task-label");
    const firstInputAfter = within(firstRowAfter).getByRole("textbox");
    expect(firstLabelAfter).toHaveTextContent("Test App");
    expect(firstInputAfter).toHaveValue("Test App");
  });
});
