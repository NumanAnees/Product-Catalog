const express = require("express");
const router = express.Router();

// import middlewares
const { requireSignin, authMiddleware } = require("../controllers/user");
// import controllers
const { UserBookmarks, newBookmarks } = require("../controllers/bookmark");

// routes
router.get("/userBookMarks", requireSignin, authMiddleware, UserBookmarks);
router.post("/newBookmark", requireSignin, authMiddleware, newBookmarks);

module.exports = router;
