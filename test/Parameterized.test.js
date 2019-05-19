const dataDriven = require('../src/Parameterized');
const expect = require('chai').expect;
const itParam = require('mocha-param');

describe('Data Driven', () => {
  describe('positive', () => {
    it('should return positive number by forEach', () => {
      const dataToTest = [2, 0, -1];

      dataToTest.forEach((d) => {
        const result = dataDriven.positive(d);
        expect(result).to.be.equal(Math.abs(d));
        
      });
    });

    itParam('should return positive number by mocha-param', [2, 0, -1], (value) => {
      const result = dataDriven.positive(value);
      expect(result).to.be.equal(Math.abs(value));
    });
  });
});
