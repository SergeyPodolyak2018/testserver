const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../const.js');
const MESSAGE = require('../helper/messages.js');
const UserRepo = require('../repository/userRepository.js');

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = UserRepo.getByName(username);
  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ username }, ACCESS_TOKEN_SECRET, {
      expiresIn: '2h',
    });
    const massage = MESSAGE.SINGIN_IN_SUCCESS({ accessToken });
    res.status(massage.status).json(massage.data);
  } else {
    const massage = MESSAGE.INVALID_CREDENTIALS();
    res.status(massage.status).json(massage.data);
  }
};

module.exports = { loginUser };
