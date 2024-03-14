const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const userRepository = require('../repository/userRepository');
const MESSAGE = require('../helper/messages');

const getUser = (req, res) => {};

const postUser = async (req, res) => {
  const { username, password } = req.body;
  const encryptPass = await bcrypt.hash(password, 10);
  userRepository.save(new UserModel(username, encryptPass));
  const massage = MESSAGE.SINGIN_UP_SUCCESS();
  res.status(massage.status).json(massage.data);
};

module.exports = { getUser, postUser };
