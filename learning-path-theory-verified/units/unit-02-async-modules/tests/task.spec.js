const { fetchJson, getPostTitleSafe, createClient } = require("../src/task/solution");

describe("Unit 2 – Posts API Client", () => {
  beforeEach(() => { global.fetch = jest.fn(); });
  afterEach(() => { jest.resetAllMocks(); });

  test("fetchJson uses async/await and returns parsed JSON", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: 1 }) });
    const data = await fetchJson("/api/test");
    expect(data).toEqual({ ok: 1 });
    expect(fetch).toHaveBeenCalledWith("/api/test");
  });

  test("getPostTitleSafe uses optional chaining", () => {
    expect(getPostTitleSafe({ title: "A" })).toBe("A");
    expect(getPostTitleSafe({})).toBeUndefined();
    expect(getPostTitleSafe(null)).toBeUndefined();
  });

  test("createClient binds baseUrl", async () => {
    const client = createClient("https://example.com");
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ([{ id: 1 }, { id: 2 }]) });
    const posts = await client.getPosts();
    expect(fetch).toHaveBeenCalledWith("https://example.com/posts");
    expect(Array.isArray(posts)).toBe(true);

    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ id: 1, title: "T" }) });
    const post = await client.getPost(1);
    expect(fetch).toHaveBeenCalledWith("https://example.com/posts/1");
    expect(client.getPostTitleSafe(post)).toBe("T");
  });
});
