import React from "react";
import { render } from "@testing-library/react";

jest.useFakeTimers();

import { Poller } from "../src/solution";

test("Poller sets and clears an interval", () => {
  const tick = jest.fn();
  const clearSpy = jest.spyOn(global, "clearInterval");
  const { unmount } = render(<Poller tick={tick} ms={500} />);
  // interval should be scheduled
  jest.advanceTimersByTime(1500);
  expect(tick).toHaveBeenCalledTimes(3);
  unmount();
  expect(clearSpy).toHaveBeenCalled();
  clearSpy.mockRestore();
});
