function getUserById(id) {
  return new Promise((resolve,reject) => resolve({
    name: 'Tom',
    age: 24,
    profession: 'IT Professional',
    isAdmin: false
  }));
}

module.exports.getUserById = getUserById;