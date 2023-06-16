const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getaddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddproduct);

module.exports = router;
