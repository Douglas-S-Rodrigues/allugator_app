const { Router } = require('express');
const rentedProductsController = require('../controllers/rentedProductsController');


const rentedProduct = Router();

rentedProduct.post('/', rentedProductsController.create);

rentedProduct.get('/', rentedProductsController.getAll);

rentedProduct.get('/:id', rentedProductsController.getById);


module.exports = rentedProduct;
