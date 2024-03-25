const urlService = require('../services/urlService.js');
const userService = require('../services/userService.js');

const getUrls = async (req, res) => {
  const urls = await urlService.getAll(res.locals.decoded.id);
  res.render('./pages/urls.ejs', { urls });
};

const postUrls = async (req, res) => {
  const { url } = req.body;
  const user = await userService.getUserByName(res.locals.decoded.username);
  await urlService.saveUrl(user.id, url);
  res.redirect('/url');
};

module.exports = { getUrls, postUrls };
