const { Product } = require('../database/models');

const productsService = {
  async getAll() {
    const products = await Product.findAll();
    return products;
  },
  async getById(id) {
    const product = await Product.findOne({ where: { id } });
    return product;
  }
}

module.exports = productsService;