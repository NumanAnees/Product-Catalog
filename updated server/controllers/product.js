const { Product } = require("../models");

//--------------------------------All Products--------------------------
exports.Products = async (req, res) => {
  const AllProducts = await Product.findAll();
  if (!AllProducts) {
    return res.status(409).json({ message: "Sorry, cannot find products" });
  }
  return res.json(AllProducts);
};
