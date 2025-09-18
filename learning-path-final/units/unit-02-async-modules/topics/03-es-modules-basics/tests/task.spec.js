const { makeGreeter } = require("../src/solution");

test("makeGreeter returns a greeter function", () => {
  const g = makeGreeter("Pesho");
  expect(typeof g).toBe("function");
  expect(g()).toBe("Hello, Pesho!");
});
