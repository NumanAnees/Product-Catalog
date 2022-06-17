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
