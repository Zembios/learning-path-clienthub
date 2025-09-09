const { parseNumberLike, computeOrderTotal, summarize, formatSummary, mergeOrders } = require("../src/task/solution");

describe("Unit 1 – Order Stats Toolkit (JS)", () => {
  test("parseNumberLike basics", () => {
    expect(parseNumberLike(5)).toBe(5);
    expect(parseNumberLike(" 3 ")).toBe(3);
    expect(parseNumberLike("1,234.56")).toBe(1234.56);
    expect(parseNumberLike("")).toBe(0);
    expect(parseNumberLike("abc")).toBe(0);
    expect(parseNumberLike(null)).toBe(0);
  });
  test("computeOrderTotal numbers & strings", () => {
    const order = { id: "A", customer: "A", status: "completed", items: [
      { name: "X", qty: "2", price: "19.99" },
      { name: "Y", qty: 1, price: "10" },
      { name: "Z", qty: "3", price: 2.5 },
    ]};
    const total = computeOrderTotal(order);
    expect(Number(total.toFixed(2))).toBe(57.48);
  });
  test("summarize aggregates", () => {
    const orders = [
      { id: "1", customer: "Alice", status: "completed", items: [{ name: "A", qty: "2", price: "10" }] },
      { id: "2", customer: "Bob", status: "completed", items: [{ name: "B", qty: "1", price: "5.50" }, { name: "C", qty: 2, price: "2" }] },
      { id: "3", customer: "Alice", status: "pending", items: [{ name: "D", qty: "10", price: "1" }] },
      { id: "4", customer: "Charlie", status: "completed", items: [{ name: "E", qty: "3", price: "2" }] },
    ];
    const s = summarize(orders);
    expect(Number(s.totalRevenue.toFixed(2))).toBe(35.5);
    expect(s.topCustomers).toEqual(["Alice", "Bob", "Charlie"]);
    expect(Number(s.avgOrderValue.toFixed(2))).toBe(11.83);
  });
  test("formatSummary", () => {
    const s = formatSummary({ totalRevenue: 100, avgOrderValue: 25, topCustomers: ["A", "B"] });
    expect(s).toContain("Revenue: 100.00");
    expect(s).toContain("AOV: 25.00");
    expect(s).toContain("Top: A, B");
  });
  test("mergeOrders", () => {
    const a = [{ id: 1 }], b = [{ id: 2 }], c = [{ id: 3 }];
    const merged = mergeOrders(a, b, c);
    expect(merged.map(o => o.id)).toEqual([1,2,3]);
  });
});
