const Category = require("../models/category.js");

exports.validCategory = (name, res) => {
  return new Promise((resolve, reject) => {
    if (!name.trim()) {
      return res.status(400).json({ error: "Category name is required" });
    }

    Category.findOne({ name }, (err, category) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (category) {
        return res.status(400).json({ error: `${name} already exists` });
      }

      resolve();
    });
  });
};
