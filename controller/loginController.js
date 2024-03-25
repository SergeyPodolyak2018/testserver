const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../const.js');
const MESSAGE = require('../helper/messages.js');
const UserService = require('../services/userService.js');

const loginUserPage = async (req, res) => {
  res.render('./pages/login.ejs');
};
const createUserPage = async (req, res) => {
  res.render('./pages/create.ejs');
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserService.getUserByName(username);
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        { username, id: user.id },
        ACCESS_TOKEN_SECRET,
        {
          expiresIn: '2h',
        }
      );
      res.cookie('SESSION_TOKEN', accessToken, {
        expires: new Date(Date.now() + 90000),
        httpOnly: true,
      });
      res.redirect('/url');
    } else {
      const massage = MESSAGE.INVALID_CREDENTIALS();
      res.status(massage.status).json(massage.data);
    }
  } catch (err) {
    console.log(err);
    res.redirect('/login');
  }
};

module.exports = { loginUser, loginUserPage, createUserPage };
