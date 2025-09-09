const { fetchJson } = require("../src/solution");

describe("Topic – Async/Await Basics", () => {
  beforeEach(() => { global.fetch = jest.fn(); });
  afterEach(() => { jest.resetAllMocks(); });

  test("returns parsed JSON when ok", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: 1 }) });
    await expect(fetchJson("/x")).resolves.toEqual({ ok: 1 });
  });

  test("throws on non-ok", async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) });
    await expect(fetchJson("/y")).rejects.toThrow("HTTP 500");
  });
});
