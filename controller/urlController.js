const UrlModel = require('../models/url.js');
const urlepository = require('../repository/urlRepository.js');
const userRepository = require('../repository/userRepository.js');
const MESSAGE = require('../helper/messages.js');
const rateService = require('../services/rateService.js');

const getUrls = async (req, res) => {
  const urls = urlepository.getAll();
  res.render('./pages/urls.ejs', { urls });
};

const postUrls = async (req, res) => {
  const { url } = req.body;
  const user = userRepository.getByName(res.locals.decoded.username);
  const urlObj = new UrlModel(url, user.id);
  await urlepository.save(urlObj);
  await rateService.initUrlRate(urlObj.id);

  res.redirect('/url');
};

module.exports = { getUrls, postUrls };
