const joi = require('joi');

module.exports = {
  name: joi
    .string()
    .min(1)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi.string().required(),
};
