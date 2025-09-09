import React from "react";
import { render } from "@testing-library/react";
import { MountLogger } from "../src/solution";

test("MountLogger logs on mount and unmount", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  const { unmount } = render(<MountLogger/>);
  expect(spy).toHaveBeenCalledWith("mounted");
  unmount();
  expect(spy).toHaveBeenCalledWith("unmounted");
  spy.mockRestore();
});
