const express = require('express');
const { getUser, postUser } = require('../sercice/userService');
const { verifyAccessToken } = require('../sercice/authService');

const router = express.Router();

router.route(`/`).get(verifyAccessToken, getUser).post(postUser);

module.exports = router;
