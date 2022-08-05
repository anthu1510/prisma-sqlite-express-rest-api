const { check } = require("express-validator");
const { Validation } = require("../validator");

module.exports.loginValidation = [];

module.exports.registerUserValidation = Validation([
  check("name", "Name is Required.").not().isEmpty(),
  check("email", "Email is Required.").not().isEmpty(),
  check("email", "Please enter valid email address.").isEmail().bail(),
  check("password", "Password is Required").not().isEmpty(),
]);
