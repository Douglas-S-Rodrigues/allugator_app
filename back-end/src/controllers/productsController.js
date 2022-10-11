const productsService = require('../services/productsService');

const productsController = {
  async getAll(_req, res) {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  },
  async getById(req, res) {
    const { id } = req.params
    const product = await productsService.getById(id);
    return res.status(200).json(product);
  }
}

module.exports = productsController;