import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dashboard } from "../src/task/Dashboard";

jest.useFakeTimers();

function makeItems(a) { return a.map((x,i)=>({ id: String(i+1), name: x[0], price: x[1] })); }

describe("Unit 5 — Mini Catalog Dashboard", () => {
  test("polls via interval, exposes manual refresh, and cleans up", async () => {
    const fetcher = jest.fn()
      .mockResolvedValueOnce(makeItems([['Apple',1]]))
      .mockResolvedValueOnce(makeItems([['Banana',2]]))
      .mockResolvedValueOnce(makeItems([['Cherry',3]]));

    const { unmount } = render(<Dashboard fetcher={fetcher} intervalMs={1000} />);

    // initial fetch happens immediately
    await act(async () => {});
    expect(fetcher).toHaveBeenCalledTimes(1);

    // tick #1
    await act(async () => { jest.advanceTimersByTime(1000); });
    expect(fetcher).toHaveBeenCalledTimes(2);

    // manual refresh
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: /refresh/i }));
    });
    expect(fetcher).toHaveBeenCalledTimes(3);

    // unmount stops polling
    unmount();
    await act(async () => { jest.advanceTimersByTime(3000); });
    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  test("derives visible items with useMemo and sorts by name", async () => {
    const fetcher = jest.fn().mockResolvedValue(makeItems([['Banana',2],['Apple',1]]));
    render(<Dashboard fetcher={fetcher} intervalMs={1000} />);

    await act(async () => { /* initial fetch */ });

    // should render sorted list: Apple then Banana
    const buttons = screen.getAllByRole('button', { name: /—/ }); // name contains " — "
    expect(buttons[0].textContent).toMatch(/^Apple/);
    expect(buttons[1].textContent).toMatch(/^Banana/);
  });

  test("lifting state: SearchBar input controls filter", async () => {
    const fetcher = jest.fn().mockResolvedValue(makeItems([['Apple',1],['Banana',2],['Cherry',3]]));
    render(<Dashboard fetcher={fetcher} intervalMs={1000} />);
    await act(async () => {});

    const input = screen.getByLabelText('search');
    await userEvent.type(input, 'an'); // should match Banana only
    const list = screen.getAllByRole('button', { name: /—/ });
    expect(list).toHaveLength(1);
    expect(list[0].textContent).toMatch(/^Banana/);
  });

  test("useRef tracks previous total and renders ▲/▼/—", async () => {
    const fetcher = jest.fn()
      .mockResolvedValueOnce(makeItems([['A',1]]))  // total 1
      .mockResolvedValueOnce(makeItems([['A',2]]))  // total 2 ▲
      .mockResolvedValueOnce(makeItems([['A',2]])); // total 2 —

    render(<Dashboard fetcher={fetcher} intervalMs={1000} />);
    await act(async () => {});

    // first tick -> ▲
    await act(async () => { jest.advanceTimersByTime(1000); });
    expect(screen.getByLabelText('delta').textContent).toBe('▲');

    // second tick -> —
    await act(async () => { jest.advanceTimersByTime(1000); });
    expect(screen.getByLabelText('delta').textContent).toBe('—');
  });

  test("withLoading HOC shows loading UI while fetching", async () => {
    const fetcher = jest.fn().mockImplementation(() => new Promise(res => setTimeout(() => res(makeItems([['A',1]])), 0)));
    render(<Dashboard fetcher={fetcher} intervalMs={1000} />);

    // during the microtask, loading should appear
    expect(screen.getByRole('status').textContent).toMatch(/loading/i);

    await act(async () => {});
    expect(screen.queryByRole('status')).toBeNull();
  });
});
