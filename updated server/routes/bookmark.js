const express = require("express");
const router = express.Router();

// import middlewares
const { requireSignin, authMiddleware } = require("../controllers/user");
// import controllers
const { UserBookmarks } = require("../controllers/bookmark");

// routes
router.get("/userBookMarks", requireSignin, authMiddleware, UserBookmarks);

module.exports = router;
