const { isPrimitive } = require('../src/solution');

describe('isPrimitive', () => {
  test('detects primitives', () => {
    expect(isPrimitive('hi')).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(Symbol('x'))).toBe(true);
    expect(isPrimitive(10n)).toBe(true);
  });
  test('non-primitives', () => {
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(()=>{})).toBe(false);
  });
});

test('edge cases', () => {
  expect(isPrimitive(NaN)).toBe(true);
  expect(isPrimitive(Object(5))).toBe(false);
  expect(isPrimitive(new String('x'))).toBe(false);
});
