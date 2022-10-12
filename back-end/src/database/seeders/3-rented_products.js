'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rented_products", [
      {
        id: 1,
        user_id: 1,
        name: 'iPhone 13',
        price: 3197.00,
        url_image: 'http://localhost:3001/images/iPhone+13.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses',
        address: 'R. Maranhão',
        number: '330',
      },
      {
        id: 2,
        user_id: 1,
        name: 'iPhone 12',
        price: 2445.71,
        url_image: 'http://localhost:3001/images/iPhone+12.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses',
        address: 'R. do Zé',
        number: '463',
      },
     
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rented_products", null, {});
  }
};