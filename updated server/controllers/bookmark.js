const e = require("cors");
const { Bookmarks } = require("../models");
const jwt = require("jsonwebtoken");
//post
exports.UserBookmarks = async (req, res) => {
  const { id } = req.body;
  const userBookmarks = await Bookmarks.findAll({
    where: { user_id: id },
  });
  if (!userBookmarks) {
    return res
      .status(409)
      .json({ message: "Sorry, cannot find Bookmarks of this user" });
  }
  return res.json({
    data: userBookmarks,
  });
};
