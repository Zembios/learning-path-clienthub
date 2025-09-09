import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useToggle } from "../src/solution";

function Demo({ label }) {
  const [on, toggle] = useToggle(false);
  return <button onClick={toggle}>{label}:{on ? "on" : "off"}</button>;
}

test("useToggle provides independent state per component", () => {
  render(<><Demo label="A"/><Demo label="B"/></>);
  const [a, b] = screen.getAllByRole("button");
  expect(a.textContent).toMatch(/A:off/);
  expect(b.textContent).toMatch(/B:off/);
  fireEvent.click(a);
  expect(a.textContent).toMatch(/A:on/);
  expect(b.textContent).toMatch(/B:off/);
});
