const { sumPairs } = require('../src/solution');

test('sumPairs', () => {
  expect(sumPairs([[1,2],[3,4],[10,-5]])).toEqual([3,7,5]);
});


test('empty input', () => {
  expect(sumPairs([])).toEqual([]);
});
