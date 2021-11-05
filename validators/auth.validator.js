const Joi = require('joi');

const {regex: {PASSWORD_REGEX, EMAIL_REGEX}} = require('../constants');

const authValidator = Joi.object({
    login: Joi
        .string()
        .regex(EMAIL_REGEX)
        .required()
        .alphanum()
        .min(7),
    password: Joi
        .string()
        .regex(PASSWORD_REGEX)
        .min(10)
        .max(30)
        .required()
        .trim(),
});

module.exports = {authValidator};
