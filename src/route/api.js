const express = require("express");
const ProductsController = require("../controller/ProductsController");
const router = express.Router();

// API ROUTES

// Create
router.post("/CreateProduct", ProductsController.CreateProduct);

// Read
router.get("/ReadProduct", ProductsController.ReadProduct);
router.get("/ReadProductById/:id", ProductsController.ReadProductById);

// Update
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct);

// Delete
router.delete("/DeleteProduct/:id", ProductsController.DeleteProduct);

module.exports = router;
