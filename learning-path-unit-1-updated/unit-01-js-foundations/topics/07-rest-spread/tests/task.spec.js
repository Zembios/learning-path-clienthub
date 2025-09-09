const { mergeProps } = require('../src/solution');

test('mergeProps merges without mutating', () => {
  const a={ x:1, y:2 }, b={ y:9, z:3 };
  const out = mergeProps(a,b);
  expect(out).toEqual({ x:1, y:9, z:3 });
  expect(a).toEqual({ x:1, y:2 });
  expect(b).toEqual({ y:9, z:3 });
});
