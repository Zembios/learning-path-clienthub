const { renameImmutable } = require('../src/solution');

test('renameImmutable returns new object and original intact', () => {
  const u1 = { name:'A', age:20 };
  const u2 = renameImmutable(u1, 'B');
  expect(u2).not.toBe(u1);
  expect(u2).toEqual({ name:'B', age:20 });
  expect(u1).toEqual({ name:'A', age:20 });
});


test('shallow copy only (nested stays same ref)', () => {
  const profile = { nickname: 'A' };
  const u1 = { name:'A', profile };
  const u2 = renameImmutable(u1, 'B');
  expect(u2).not.toBe(u1);
  expect(u2.profile).toBe(profile);
  expect(u1.name).toBe('A');
  expect(u2.name).toBe('B');
});
