const external = require('../src/external');
const mock = require('../src/mock');
const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

  chai.use(chaiAsPromised);

let stubFunction;

// before(() => {
//   chai.use(chaiAsPromised);
// });

afterEach(() => {
  if(stubFunction)
    stubFunction.restore();
})

describe('Mock', () => {
  describe('IsUserAdmin', () => {
    it('should know the user is an admin', async () => {
      external.getUserById = () => new Promise((resolve, reject) => resolve({
        isAdmin: true
      }));

      const result = await mock.isUserAdmin(1);
      expect(result).to.be.true;
    });

    it('should know the user is not an admin', async () => {
      external.getUserById = () => new Promise((resolve, reject) => resolve({
        isAdmin: false
      }));

      const result = await mock.isUserAdmin(1);
      expect(result).to.be.false;
    });

    it('should throw error when external call failed', () => {
      external.getUserById = () => new Promise((resolve, reject) => reject(new Error('Network timeout')));
      expect(mock.isUserAdmin(1)).to.be.eventually.rejectedWith(Error);
    });
  });
});
