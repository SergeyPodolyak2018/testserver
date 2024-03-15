const urlepository = require('../repository/urlRepository');

const checkId = (req, res, next, id) => {
  const someId = id || req.params.id;
  res.locals.shorts = someId;
  next();
};

const getCode = async (req, res) => {
  let someId = res.locals.shorts;
  const urlData = urlepository.get(someId);
  urlepository.modify(someId);
  res.redirect(urlData.url);
};

module.exports = { getCode, checkId };
