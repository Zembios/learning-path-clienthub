const { coerceNumber } = require('../src/solution');

describe('coerceNumber', () => {
  test('parses', () => {
    expect(coerceNumber(5)).toBe(5);
    expect(coerceNumber(' 3 ')).toBe(3);
    expect(coerceNumber('1,234.56')).toBe(1234.56);
  });
  test('NaN', () => {
    expect(Number.isNaN(coerceNumber('x'))).toBe(true);
    expect(Number.isNaN(coerceNumber(null))).toBe(true);
  });
});
