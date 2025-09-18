const { fetchJson, getPostTitleSafe, createClient } = require("../src/task/solution");

describe("Unit 2 – Posts API Client", () => {
  beforeEach(() => { global.fetch = jest.fn(); });
  afterEach(() => { jest.resetAllMocks(); });

  describe("fetchJson(url)", () => {
    test("returns parsed JSON when response.ok = true", async () => {
      fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: 1 }) });
      const data = await fetchJson("/api/test");
      expect(data).toEqual({ ok: 1 });
      expect(fetch).toHaveBeenCalledWith("/api/test");
    });

    test("throws with HTTP status on non-ok response", async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 404, json: async () => ({}) });
      await expect(fetchJson("/missing")).rejects.toThrow("HTTP 404");
      expect(fetch).toHaveBeenCalledWith("/missing");
    });
  });

  describe("getPostTitleSafe(post)", () => {
    test("returns title if present", () => {
      expect(getPostTitleSafe({ title: "Hello" })).toBe("Hello");
    });

    test("returns undefined when title or post is missing", () => {
      expect(getPostTitleSafe({})).toBeUndefined();
      expect(getPostTitleSafe(null)).toBeUndefined();
      expect(getPostTitleSafe(undefined)).toBeUndefined();
    });
  });

  describe("createClient(baseUrl)", () => {
    test("binds baseUrl and exposes helpers", async () => {
      const client = createClient("https://example.com");

      fetch.mockResolvedValueOnce({ ok: true, json: async () => ([{ id: 1 }, { id: 2 }]) });
      const posts = await client.getPosts();
      expect(fetch).toHaveBeenCalledWith("https://example.com/posts");
      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBe(2);

      fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, title: "T" }) });
      const post = await client.getPost(1);
      expect(fetch).toHaveBeenCalledWith("https://example.com/posts/1");
      expect(post).toEqual({ id: 1, title: "T" });

      // ensure it reuses the same helper
      expect(client.getPostTitleSafe(post)).toBe("T");
    });

    test("propagates errors from fetchJson", async () => {
      const client = createClient("https://api.site");
      fetch.mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({}) });
      await expect(client.getPosts()).rejects.toThrow("HTTP 500");
    });
  });
});
