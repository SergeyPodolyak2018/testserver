const express = require('express');
const { getUsers } = require('../controller/userController');
const { verifyAccessToken } = require('../controller/authController');

const router = express.Router();

router.route(`/`).get(verifyAccessToken, getUsers);

module.exports = router;
