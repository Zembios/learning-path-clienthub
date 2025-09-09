const { formatGreeting } = require('../src/solution');

test('formatGreeting', () => {
  expect(formatGreeting('Pesho', 3)).toBe('Hi Pesho! You have 3 messages.');
});


test('supports names with spaces/specials', () => {
  expect(formatGreeting('Ana Maria', 1)).toBe('Hi Ana Maria! You have 1 messages.');
});
