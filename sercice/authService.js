const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/userRepository');
const MESSAGE = require('../helper/messages');
const { ACCESS_TOKEN_SECRET } = require('../const.js');

const verifyAccessToken = (req, res, next) => {
  const token = req.body.accessToken || req.query.accessToken;
  if (token === '') {
    const massage = MESSAGE.UNAUTORIZED();
    return res.status(massage.status).json(massage.data);
  }
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    res.locals.decoded = decoded;
    return next();
  } catch (err) {
    console.log(err);
    const massage = MESSAGE.FORBIDDEN();
    return res.status(massage.status).json(massage.data);
  }
};

module.exports = { verifyAccessToken };
