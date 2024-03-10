const UrlModel = require('../models/url');
const urlepository = require('../repository/urlRepository');
const userRepository = require('../repository/userRepository.js');
const MESSAGE = require('../helper/messages.js');

const getUrls = async (req, res) => {
  const urls = urlepository.getAll();
  const massage = MESSAGE.URLS(urls);
  res.status(massage.status).json(massage.data);
};

const postUrls = async (req, res) => {
  const { url } = req.body;
  const user = userRepository.getByName(res.locals.decoded.username);
  urlepository.save(new UrlModel(url, user.id));
  const massage = MESSAGE.ADD_URL_SUCCESS();
  res.status(massage.status).json(massage.data);
};

module.exports = { getUrls, postUrls };
