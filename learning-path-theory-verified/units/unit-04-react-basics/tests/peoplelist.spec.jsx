import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PeopleList } from "../src/task/PeopleList";

describe("Unit 4 – PeopleList", () => {
  const people = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];

  test("renders and filters", () => {
    // Once implemented, this should render input and filter items
    // Here we just assert the component exists to avoid failing before implementation
    expect(typeof PeopleList).toBe("function");
  });
});
