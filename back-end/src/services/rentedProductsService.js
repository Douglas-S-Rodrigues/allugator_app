const { RentedProduct } = require('../database/models');
const { NotFoundError } = require('../middlewares/errors');

const rentedProductsService = {
  async getById(userId) {
    const rentedProduct = await RentedProduct.findAll({ where: { userId } });
    if (!rentedProduct) {
      return NotFoundError('Rented products not found');
    }
    return rentedProduct;
  },
  async getAll() {
    const rentedProducts = await RentedProduct.findAll();
    return rentedProducts;
  },
  async create(body) {
    const newRentedProduct = await RentedProduct.bulkCreate(body);
    return newRentedProduct;
  },

}

module.exports = rentedProductsService;
