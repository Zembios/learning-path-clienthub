const { getTitleSafe } = require('./solution');

describe('Topic – existence', () => {
  test('getTitleSafe exists', () => { expect(typeof getTitleSafe).toBe('function'); });
});
