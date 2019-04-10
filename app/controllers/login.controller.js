const joi = require('joi');
const service = require('../services/login.service');
const schema = require('../schemas/login.controller.create.schema');

module.exports = {
  create(req, res) {
    const result = joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).json(result.error);
    }

    const token = service.create(req.body);
    res.json({ token });
  },
};
