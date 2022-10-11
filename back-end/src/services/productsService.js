const { Product } = require('../database/models');
const NotFoundError = require('../middlewares/errors')

const productsService = {
  async getAll() {
    const products = await Product.findAll();
    return products;
  },
  async getById(id) {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return NotFoundError('Product not found');
    }
    return product;
  }
}

module.exports = productsService;