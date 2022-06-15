const express = require("express");
const router = express.Router();

// import middlewares
// import validator

// import controllers
const { login, register } = require("../controllers/user");

// routes
router.post("/login", login);
router.post("/register", register);

module.exports = router;
