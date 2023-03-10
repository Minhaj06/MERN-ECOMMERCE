const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

// Middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");

// Controllers
const {
  create,
  list,
  read,
  photo,
  remove,
  update,
  filteredProducts,
  productCount,
  listProducts,
  productSearch,
  relatedProducts,
  trendingProducts,
  featuredProducts,
  getToken,
  processPayment,
  orderStatus,
} = require("../controllers/product.js");

router.post("/product", requireSignin, isAdmin, formidable(), create);
router.get("/products", list);
router.get("/product/:slug", read);
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", requireSignin, isAdmin, remove);
router.put("/product/:productId", requireSignin, isAdmin, formidable(), update);
router.post("/filtered-products", filteredProducts);
router.get("/products-count", productCount);
router.get("/list-products/:page", listProducts);
router.get("/products/search/:keyword", productSearch);
router.get("/related-products/:productId/:categoryId", relatedProducts);
router.get("/trending-products", trendingProducts);
router.get("/featured-products", featuredProducts);

router.get("/braintree/token", getToken);
router.post("/braintree/payment", requireSignin, processPayment);
router.put("/order-status/:orderId", requireSignin, isAdmin, orderStatus);

module.exports = router;
