const express = require('express');
const { getCode, checkId } = require('../sercice/codeService.js');
const { verifyAccessToken } = require('../sercice/authService');

const router = express.Router();

router.param('id', checkId);

router.route(`/:id`).get(verifyAccessToken, getCode);

module.exports = router;
