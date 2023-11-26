const Coupon = require("../models/coupon.js");

exports.create = async (req, res) => {
  try {
    const { code, discountPercentage, expiresInDays } = req.body;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expiresInDays);

    const coupon = new Coupon({
      code,
      discountPercentage,
      expiresAt: expirationDate,
    });

    await coupon.save();

    res.json(coupon);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err.message);
  }
};
