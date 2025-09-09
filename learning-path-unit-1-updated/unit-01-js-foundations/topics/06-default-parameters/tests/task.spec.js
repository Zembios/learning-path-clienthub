const { makeRange } = require('../src/solution');

describe('makeRange', () => {
  test('defaults', () => { expect(makeRange()).toEqual([0,1,2]); });
  test('custom', () => { expect(makeRange(2,5)).toEqual([2,3,4]); });
});


test('empty when start >= end', () => {
  expect(makeRange(5,5)).toEqual([]);
  expect(makeRange(7,5)).toEqual([]);
});
