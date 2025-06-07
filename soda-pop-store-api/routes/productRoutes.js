const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET todos e por ID
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// POST novo produto
router.post('/', productController.createProduct);

// PUT editar produto
router.put('/:id', productController.updateProduct);

// DELETE remover produto
router.delete('/:id', productController.deleteProduct);

module.exports = router;
