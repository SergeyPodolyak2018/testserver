const express = require('express');
const { getUrls, postUrls } = require('../sercice/urlSercice.js');
const { verifyAccessToken } = require('../sercice/authService');

const router = express.Router();

router
  .route(`/`)
  .get(verifyAccessToken, getUrls)
  .post(verifyAccessToken, postUrls);

module.exports = router;
