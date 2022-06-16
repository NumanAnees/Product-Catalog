const express = require("express");
const router = express.Router();

// import middlewares

// import controllers
const { Products } = require("../controllers/product");

// routes
router.get("/products", Products);

module.exports = router;
