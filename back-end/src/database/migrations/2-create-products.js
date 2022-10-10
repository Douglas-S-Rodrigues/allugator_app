'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(20, 2)
      },
      urlImage: {
        type: Sequelize.STRING,
        field: 'url_image'
      },
      deliveryTime: {
        type: Sequelize.STRING,
        field: 'delivery_time',
      },
      subscriptionPeriod: {
        type: Sequelize.STRING,
        field: 'subscription_period',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  }
};