const { Router } = require('express');
const productController = require('../controllers/productsController');

const product = Router();

product.get('/', productController.getAll);

product.get('/:id', productController.getById);

module.exports = product;
