const express = require('express');
const {
  getCode,
  checkId,
  checkRate,
} = require('../controller/codeController.js');
const { verifyAccessToken } = require('../controller/authController.js');

const router = express.Router();

router.param('id', checkId);

router.route(`/:id`).get([verifyAccessToken, checkRate], getCode);

module.exports = router;
