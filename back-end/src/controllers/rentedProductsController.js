const rentedProductsService = require('../services/rentedProductsService');

const rentedProductsController = {
  async create(req, res) {
    const newRentedProduct = await rentedProductsService.create(req.body);
    return res.status(201).json(newRentedProduct);
  },
  async getById(req, res) {
    const { id } = req.params;
    const rentedProduct = await rentedProductsService.getById(id);
    return res.status(200).json(rentedProduct);
  },
  async getAll(req, res) {
    const rentedProducts = await rentedProductsService.getAll();
    return res.status(200).json(rentedProducts);
  }
};

module.exports = rentedProductsController;