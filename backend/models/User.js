const Sequelize = require("sequelize");
const db = require("../src/database/connection.js");

const User = db.define("User", {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
