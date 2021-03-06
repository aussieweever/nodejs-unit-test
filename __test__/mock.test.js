const external = require('../src/external');
const mock = require('../src/mock');

describe('Mock', () => {
  describe('IsUserAdmin', () => {
    it('should know the user is an admin', async () => {
      external.getUserById = () => new Promise((resolve, reject) => resolve({
        isAdmin: true
      }));

      mock.isUserAdmin(1).then((result)=> expect(result).toBeTruthy());
    });

    it('should know the user is not an admin', async () => {
      external.getUserById = jest.fn().mockResolvedValue({
        isAdmin: false
      });

      await mock.isUserAdmin(1).then((result) => expect(result).toBeFalsy());
    });

    it('should throw error when external call failed', async () => {
      external.getUserById = jest.fn().mockRejectedValue(new Error('Network timeout'));      
      // mock.isUserAdmin(1).catch((err) => {
      //   expect(result).toMatch('Network timeout');
      // });
      await expect(mock.isUserAdmin(1)).rejects.toThrow('Network timeout');
    });
  });
});
