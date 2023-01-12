const express = require("express");
const productControllers = require("../controllers/productControllers");
const router = express.Router();

router
  .route("/")
  .get(productControllers.getProduct)
  .post(productControllers.postProduct);

module.exports = router;
