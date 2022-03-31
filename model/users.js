const Joi = require('joi');

const userSchema = Joi.object({

    name: Joi.string().min(6).required(),

    password: Joi.string().min(5).required(),

    email: Joi.string().min(6).email().required()
});


module.exports = userSchema;
