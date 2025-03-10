"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_Controller_1 = require("./product.Controller");
const router = (0, express_1.Router)();
router.get("/", product_Controller_1.getProducts);
router.get("/:id", product_Controller_1.getProduct);
router.post("/", product_Controller_1.createProduct);
router.put("/:id", product_Controller_1.updateProduct);
router.delete("/:id", product_Controller_1.deleteProduct);
exports.default = router;
