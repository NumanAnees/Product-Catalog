const Sequelize = require("sequelize");
const db = new Sequelize("catalog", "numan", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
//Test Db
db.authenticate()
  .then(() => console.log("Connection Successfull"))
  .catch((err) => console.log("Error " + err));

module.exports = db;
