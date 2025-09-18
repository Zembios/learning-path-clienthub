const { typeOfDetailed } = require('../src/solution');

test('typeOfDetailed', () => {
  expect(typeOfDetailed(null)).toBe('null');
  expect(typeOfDetailed([])).toBe('array');
  expect(typeOfDetailed(1)).toBe('number');
  expect(typeOfDetailed('x')).toBe('string');
});

test('edge cases', () => {
  expect(typeOfDetailed(NaN)).toBe('number');
  expect(typeOfDetailed(function(){})).toBe('function');
  expect(typeOfDetailed(10n)).toBe('bigint');
  expect(typeOfDetailed(Symbol('x'))).toBe('symbol');
  expect(typeOfDetailed(undefined)).toBe('undefined');
  expect(typeOfDetailed({})).toBe('object');
});
