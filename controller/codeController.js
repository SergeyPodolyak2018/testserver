const codeService = require('../services/codeService');
const rateService = require('../services/rateService');
const MESSAGE = require('../helper/messages');

const checkId = (req, res, next, id) => {
  const someId = id || req.params.id;
  res.locals.shorts = someId;
  next();
};
const checkRate = async (req, res, next) => {
  let shortCode = res.locals.shorts;
  let userId = res.locals.decoded.id;
  const check = await rateService.checkRate(userId, shortCode);
  if (check) {
    await rateService.incrementURLRate(shortCode);
    await rateService.incrementUserRate(userId);
    return next();
  } else {
    const massage = MESSAGE.TO_MANY_REQUEST();
    res.status(massage.status);
    res.render('./pages/rate.ejs');
    return;
  }
};

const getCode = async (req, res) => {
  let shortCode = res.locals.shorts;
  const code = codeService.getCode(shortCode);
  codeService.visitCode(shortCode);
  res.redirect(code.url);
};

module.exports = { getCode, checkId, checkRate };
