const { fetchJson } = require('./solution');

describe('Topic – existence', () => {
  test('fetchJson exists', () => { expect(typeof fetchJson).toBe('function'); });
});
