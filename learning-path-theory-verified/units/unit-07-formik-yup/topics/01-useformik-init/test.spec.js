const { buildValidationSchema } = require('./solution');

describe('Topic – existence', () => {
  test('buildValidationSchema exists', () => { expect(typeof buildValidationSchema).toBe('function'); });
});
