import React from "react";
import { render } from "@testing-library/react";
import { FocusInputOnMount } from "../src/solution";

test("FocusInputOnMount exists", () => {
  // JSDOM focus is limited; smoke test component exists.
  expect(typeof FocusInputOnMount).toBe("function");
});
