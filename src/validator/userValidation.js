const { check } = require("express-validator");
const { errorMessage } = require("../plugins/validationErrors");

module.exports.registerUserValidation = [
  [
    check("name", "Name is Required.").not().isEmpty(),
    check("email", "Email is Required.").not().isEmpty(),
    check("email", "Please enter valid email address.").isEmail().bail(),
    check("password", "Password is Required").not().isEmpty(),
  ],
  errorMessage,
];
