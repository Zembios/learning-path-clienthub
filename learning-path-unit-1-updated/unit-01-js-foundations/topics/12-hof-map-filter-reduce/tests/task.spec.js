const { sumPositive } = require('../src/solution');

test('sumPositive only sums > 0', () => {
  expect(sumPositive([-2,-1,0,1,2,3])).toBe(6);
});


test('empty and non-positive arrays', () => {
  expect(sumPositive([])).toBe(0);
  expect(sumPositive([-5,-1,0])).toBe(0);
});
