
const { parseNumberLike, computeOrderTotal, summarize, formatSummary, mergeOrders } = require("../src/task/solution");

describe("Unit 1 – Order Stats Toolkit", () => {
  const sampleOrders = [
    { id:"1001", customer:"Alice", status:"completed", items:[{name:"Widget", qty:"2", price:"19.99"}, {name:"Gadget", qty:1, price:"10"}] },
    { id:"1002", customer:"Bob", status:"completed", items:[{name:"Widget", qty:"1", price:"1,234.56"}, {name:"Thing", qty:"3", price:2.5}] },
    { id:"1003", customer:"Alice", status:"pending", items:[{name:"Extra", qty:"10", price:"1"}] },
    { id:"1004", customer:"Charlie", status:"completed", items:[{name:"Cheap", qty:"3", price:"2"}] },
    { id:"1005", customer:"Dana", status:"canceled", items:[] },
  ];

  test("parseNumberLike", () => {
    expect(parseNumberLike(5)).toBe(5);
    expect(parseNumberLike(" 3 ")).toBe(3);
    expect(parseNumberLike("1,234.56")).toBe(1234.56);
    expect(Number.isNaN(parseNumberLike("x"))).toBe(true);
    expect(Number.isNaN(parseNumberLike(null))).toBe(true);
    expect(Number.isNaN(parseNumberLike(undefined))).toBe(true);
    expect(Number.isNaN(parseNumberLike(""))).toBe(true);
  });

  test("computeOrderTotal", () => {
    const total1001 = computeOrderTotal(sampleOrders[0]); // 2*19.99 + 1*10 = 49.98
    expect(total1001).toBeCloseTo(49.98, 2);

    const total1002 = computeOrderTotal(sampleOrders[1]); // 1*1234.56 + 3*2.5 = 1242.06
    expect(total1002).toBeCloseTo(1242.06, 2);

    const total1003 = computeOrderTotal(sampleOrders[2]); // pending, but compute should still work: 10*1 = 10
    expect(total1003).toBe(10);

    const total1005 = computeOrderTotal(sampleOrders[4]); // empty items
    expect(total1005).toBe(0);

    // Invalid item entries should be ignored
    const badOrder = { id:"9999", customer:"Z", status:"completed", items:[
      { name:"BadQty", qty:"x", price:"10" },
      { name:"BadPrice", qty:"2", price:"oops" },
      { name:"Good", qty:"2", price:"2.5" } // 5
    ]};
    expect(computeOrderTotal(badOrder)).toBe(5);
  });

  test("summarize", () => {
    const s = summarize(sampleOrders);
    // completed orders: 1001 (49.98), 1002 (1242.06), 1004 (6)
    expect(s.totalRevenue).toBeCloseTo(49.98 + 1242.06 + 6, 2);
    expect(s.avgOrderValue).toBeCloseTo((49.98 + 1242.06 + 6)/3, 2);
    expect(Array.isArray(s.topCustomers)).toBe(true);
    expect(s.topCustomers.length).toBeLessThanOrEqual(3);
    // per-customer revenue
    const map = Object.fromEntries(s.topCustomers.map(x => [x.customer, x.revenue]));
    expect(map.Bob).toBeCloseTo(1242.06, 2);
    expect(map.Alice).toBeCloseTo(49.98, 2);
    expect(map.Charlie).toBeCloseTo(6, 2);
    // order: Bob > Alice > Charlie
    expect(s.topCustomers.map(x => x.customer)).toEqual(["Bob", "Alice", "Charlie"]);
  });

  test("formatSummary", () => {
    const s = summarize(sampleOrders);
    const text = formatSummary(s);
    expect(typeof text).toBe("string");
    // minimal sanity checks
    expect(text).toMatch(/Total Revenue: /);
    expect(text).toMatch(/Avg Order Value: /);
    expect(text).toMatch(/Top Customers:/);
  });

  test("mergeOrders", () => {
    const listA = [ sampleOrders[0], sampleOrders[1] ];
    const listB = [ sampleOrders[2], sampleOrders[3] ];
    const merged = mergeOrders(listA, listB);
    expect(merged.map(o => o.id)).toEqual(["1001","1002","1003","1004"]);

    // override scenario: later wins
    const override = mergeOrders(
      [ { id:"1001", customer:"A", status:"completed", items:[] } ],
      [ { id:"1001", customer:"A2", status:"pending", items:[{name:"X", qty:1, price:1}] } ]
    );
    expect(override.length).toBe(1);
    expect(override[0].customer).toBe("A2");
    expect(override[0].status).toBe("pending");
  });
});
