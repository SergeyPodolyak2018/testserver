const express = require('express');
const { loginUser } = require('../sercice/loginService');

const router = express.Router();

router.route(`/`).post(loginUser);

module.exports = router;
