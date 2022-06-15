const e = require("cors");
const { User } = require("../models");

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.create({ firstName, lastName, email, password });
  return res.json(user);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({
      error: "Email and password do not match",
    });
  }
  if (!user.password == password) {
    return res.status(400).json({
      error: "Email and password matched",
    });
  }
  return res.status(400).json(user);
};
