const external = require('./external');

async function isUserAdmin(userId) {
  const user = await external.getUserById(userId);
  return user.isAdmin;

}

module.exports.isUserAdmin = isUserAdmin;
