const express = require('express');
const { loginUser, createUserPage } = require('../controller/loginController');

const router = express.Router();

router.route(`/`).get(createUserPage);

module.exports = router;
