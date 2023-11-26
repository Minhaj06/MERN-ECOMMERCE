const express = require("express");
const router = express.Router();

// Middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");

// Controllers
const { create } = require("../controllers/coupon.js");

router.post("/coupon", requireSignin, isAdmin, create);

module.exports = router;
