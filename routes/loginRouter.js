const express = require('express');
const { loginUser, loginUserPage } = require('../controller/loginController');

const router = express.Router();

router.route(`/`).get(loginUserPage).post(loginUser);

module.exports = router;
