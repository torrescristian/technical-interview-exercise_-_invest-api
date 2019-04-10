const service = require('../services/login.service');

module.exports = {
  verify(req, res, next) {
    const [_, token] = req.headers.authorization.split('Bearer ');
    if (!service.tokenIsValid(token)) {
      return res.status(403).json('Auth required');
    }
    next();
  },
};
