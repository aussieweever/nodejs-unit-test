const general = require('../src/general');
const expect = require('chai').expect;

before(() => {

});

after(() => {

});

beforeEach(() => {

});

afterEach(() => {

});

describe('General', () => {
  describe('Sum', () => {
    it('should add two numbers and return the sum', () => {
      const result = general.sum(2,3);
      expect(result).to.equal(5);
    });
    it('should throw error when the input is not a number', () => {
      expect(() => general.sum('2', 5)).to.throw('Need a number');
    });
  });
});
