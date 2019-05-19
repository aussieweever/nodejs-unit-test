const dataDriven = require('../src/Parameterized');

describe('Data Driven', () => {
  describe('positive', () => {
    it.each([[2,2], [0, 0],[-1, 1]])('should transfer %i to %i', (value, expected) => {
      const result = dataDriven.positive(value);
      expect(result).toBe(expected);
    });
  });
});
