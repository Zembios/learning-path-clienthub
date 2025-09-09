const { callBeforeDeclared } = require('../src/solution');

test('callBeforeDeclared returns a number', () => {
  const v = callBeforeDeclared();
  expect(typeof v).toBe('number');
});
