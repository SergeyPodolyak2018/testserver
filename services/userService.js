const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository.js');
const rateSrvice = require('../services/rateService.js');
const UserModel = require('../models/user');

const getUserByName = (name) => {
  const user = userRepository.getByName(name);
  return user;
};

const saveUser = async (username, password) => {
  const encryptPass = await bcrypt.hash(password, 10);
  const user = new UserModel(username, encryptPass);
  await userRepository.save(user);
  await rateSrvice.initUserRate(user.id);
  await rateSrvice.initUserNextTime(user.id);
};

const getAllUsers = () => {
  return userRepository.getAll();
};

module.exports = { getUserByName, saveUser, getAllUsers };
