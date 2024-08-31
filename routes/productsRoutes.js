const express = require("express");
const productsRouter = express.Router();
const productController = require('../controller/productController')

productsRouter
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProductbyId)
    .delete('/:id', productController.deleteProductbyId)

module.exports = productsRouter
