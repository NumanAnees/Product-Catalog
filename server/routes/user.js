const express = require("express");
const router = express.Router();

// import middlewares
// import validator
const {
  userRegisterValidator,
  userLoginValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

// import controllers
const { login, register } = require("../controllers/user");

// routes
router.post("/login", userLoginValidator, runValidation, login);
router.post("/register", userRegisterValidator, runValidation, register);

module.exports = router;
