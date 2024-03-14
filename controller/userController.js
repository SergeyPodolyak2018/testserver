const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const userRepository = require('../repository/userRepository');
const MESSAGE = require('../helper/messages');

const getUsers = (req, res) => {
  const users = userRepository.getAll();
  const massage = MESSAGE.USERS(users);
  res.status(massage.status).json(massage.data);
};

const getUser = (req, res) => {
  const users = userRepository.getAll();
  const massage = MESSAGE.USERS(users);
  res.status(massage.status).json(massage.data);
};

const postUser = async (req, res) => {
  const { username, password } = req.body;
  const encryptPass = await bcrypt.hash(password, 10);
  userRepository.save(new UserModel(username, encryptPass));
  res.redirect('/login');
};

module.exports = { getUsers, postUser, getUser };
