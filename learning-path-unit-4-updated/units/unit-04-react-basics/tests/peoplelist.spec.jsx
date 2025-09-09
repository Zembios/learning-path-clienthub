import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { PeopleList } from "../src/task/PeopleList";

afterEach(() => { cleanup(); jest.restoreAllMocks(); });

const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

describe("Unit 4 – PeopleList", () => {
  test("renders a controlled search input and shows all names initially", () => {
    render(<PeopleList people={people} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    // all names visible
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  test("filters names case-insensitively as the user types", () => {
    render(<PeopleList people={people} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "al" } });
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).toBeNull();
    expect(screen.queryByText("Charlie")).toBeNull();

    // different casing
    fireEvent.change(input, { target: { value: "BO" } });
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).toBeNull();
  });

  test("renders empty state when there are no matches", () => {
    render(<PeopleList people={people} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "zzz" } });
    expect(screen.getByText(/no matches/i)).toBeInTheDocument();
  });

  test("renders footer via render prop when provided", () => {
    render(<PeopleList people={people} renderFooter={() => <div data-testid="footer">F</div>} />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("logs on mount and unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    const { unmount } = render(<PeopleList people={people} />);
    expect(spy).toHaveBeenCalledWith("PeopleList mounted");
    unmount();
    expect(spy).toHaveBeenCalledWith("PeopleList unmounted");
  });
});
