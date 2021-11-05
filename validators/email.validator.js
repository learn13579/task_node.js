const Joi = require('joi');

const {regex: {EMAIL_REGEX}} = require('../constants');

const emailValidator = Joi.object({
    email: Joi
        .string()
        .regex(EMAIL_REGEX)
        .required()
        .trim()
        .min(7),
});

module.exports = {emailValidator};
