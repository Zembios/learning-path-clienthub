const { buildKey } = require('./solution');

describe('Topic – existence', () => {
  test('buildKey exists', () => { expect(typeof buildKey).toBe('function'); });
});
