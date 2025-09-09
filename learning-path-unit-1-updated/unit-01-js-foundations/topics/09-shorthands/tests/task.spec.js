const { makePerson } = require('../src/solution');

test('makePerson', () => {
  const p = makePerson('Pesho');
  expect(p.name).toBe('Pesho');
  expect(p.greet()).toBe('Hi, Pesho!');
});
