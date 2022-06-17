const e = require("cors");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//--------------------------------Register middleware--------------------------

exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // const user = await User.create({ firstName, lastName, email, password });
  // return res.json(user);

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new User({ firstName, lastName, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
};

//-------------------------------Login Middleware--------------------------------

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  // generate token and send to client
  const token = jwt.sign({ id: userWithEmail.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  const { id, firstName, lastName } = userWithEmail;

  return res.json({
    token,
    user: { id, firstName, lastName, email },
  });
};

//------------------------------------------------------------------------------------------

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["sha1", "RS256", "HS256"],
}); // req.user

//------------------------------------------------------------------------------------------

exports.authMiddleware = async (req, res, next) => {
  const authUserId = req.user.id;
  const user = await User.findOne({ where: { id: authUserId } });
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  req.profile = user;
  next();
};
