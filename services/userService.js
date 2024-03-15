const userRepository = require('../repository/userRepository.js');

const getUserByName = (name) => {
  const user = userRepository.getByName(name);

  return user;
};

module.exports = { getUserByName };
