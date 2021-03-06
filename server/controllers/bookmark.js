const e = require("cors");
const { Bookmarks } = require("../models");
const jwt = require("jsonwebtoken");
//post
exports.UserBookmarks = async (req, res) => {
  const userBookmarks = await Bookmarks.findAll({
    where: { user_id: req.user.id },
  });
  if (!userBookmarks) {
    return res
      .status(409)
      .json({ message: "Sorry, cannot find Bookmarks of this user" });
  }
  return res.json(userBookmarks);
};

exports.newBookmarks = async (req, res) => {
  const { userId, id } = req.body;
  const newBookmark = new Bookmarks({ user_id: userId, product_id: id });
  const savedBookmark = await newBookmark.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add Bookmark at the moment!" });
  });

  if (savedBookmark) res.json({ message: "Thanks for registering" });
};
