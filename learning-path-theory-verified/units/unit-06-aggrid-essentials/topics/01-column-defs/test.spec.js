const { buildColumnDefs } = require('./solution');

describe('Topic – existence', () => {
  test('buildColumnDefs exists', () => { expect(typeof buildColumnDefs).toBe('function'); });
});
