const Product = require("../models/product.js");

exports.validProduct = (name, res) => {
  return new Promise((resolve, reject) => {
    if (!name.trim()) {
      return res.status(400).json({ error: "Product name is required" });
    }

    const existingProduct = Product.findOne({ name });
    if (existingProduct) {
      return res.json({ error: `${name} already exists` });
    }
    resolve();
  });
};
