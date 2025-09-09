import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Dashboard } from "../src/task/Dashboard";

jest.useFakeTimers();

describe("Unit 5 – Dashboard (React Advanced)", () => {
  test("polls via interval and cleans up on unmount", async () => {
    const fetcher = jest.fn()
      .mockResolvedValueOnce([{ value: 1 }])
      .mockResolvedValueOnce([{ value: 2 }])
      .mockResolvedValueOnce([{ value: 3 }]);

    const { unmount } = render(<Dashboard fetcher={fetcher} intervalMs={1000} />);

    // advance timers; allow microtasks to flush
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    expect(fetcher).toHaveBeenCalledTimes(3);

    const clearSpy = jest.spyOn(global, "clearInterval");
    unmount();
    expect(clearSpy).toHaveBeenCalled();
    clearSpy.mockRestore();
  });

  test("renders a derived total (from useMemo) after fetches", async () => {
    const fetcher = jest.fn().mockResolvedValue([{ value: 10 }, { value: 5 }]);
    render(<Dashboard fetcher={fetcher} intervalMs={1000} />);

    await act(async () => {
      // first tick
      jest.advanceTimersByTime(1000);
    });

    // Your implementation should render the total somewhere
    const text = screen.getByText(/total/i);
    expect(text.textContent).toMatch(/15/);
  });
});
