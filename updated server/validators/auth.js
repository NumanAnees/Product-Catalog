const { check } = require("express-validator");

exports.userRegisterValidator = [
  check("firstName").not().isEmpty().withMessage("firstName is required"),
  check("lastName").not().isEmpty().withMessage("lastName is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.userLoginValidator = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
