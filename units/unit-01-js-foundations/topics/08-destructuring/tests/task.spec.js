const { pickName } = require('../src/solution');

test('pickName', () => {
  expect(pickName({ name:'Pesho', age:25 })).toBe('Pesho');
});


test('missing name returns undefined', () => {
  expect(pickName({})).toBeUndefined();
});
