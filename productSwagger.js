const express = require("express");
const productsRouter = express.Router();
const productController = require("./controller/productController");


/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API for managing users
 */


/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: [Products]  
 *     description: Retrieve a list of all products from the server.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Product name"
 *                   price:
 *                     type: number
 *                     example: 99.99
 *                   description:
 *                     type: string
 *                     example: "Product description"
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     tags: [Products]  
 *     description: Retrieve a single product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Product name"
 *                 price:
 *                   type: number
 *                   example: 99.99
 *                 description:
 *                   type: string
 *                   example: "Product description"
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]  
 *     description: Delete a product by its ID from the server.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found
 */

productsRouter
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProductbyId)
  .delete("/:id", productController.deleteProductbyId);

module.exports = productsRouter;
