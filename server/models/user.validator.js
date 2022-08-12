const Joi = require("@hapi/joi");

//validates when new user creates an account
const newUserValidation = data => {
  const registerValidationSchema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required().trim(),
  };
  return Joi.validate(data, registerValidationSchema);
};

const userLoginValidation = data => {
  const loginValidationSchema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(8),
  };
  return Joi.validate(data, loginValidationSchema)
};

module.exports.newUserValidation = newUserValidation;
module.exports.userLoginValidation = userLoginValidation;
