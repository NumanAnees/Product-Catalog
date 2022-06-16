const express = require("express");
const router = express.Router();

// import middlewares

// import controllers
const { UserBookmarks } = require("../controllers/bookmark");

// routes
router.post("/user", UserBookmarks);

module.exports = router;
