const { makeGreeter } = require('./solution');

describe('Topic – existence', () => {
  test('makeGreeter exists', () => { expect(typeof makeGreeter).toBe('function'); });
});
