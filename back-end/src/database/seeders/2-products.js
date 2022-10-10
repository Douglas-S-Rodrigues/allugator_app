'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      { 
        id: 1,
        name: 'iPhone 12',
        price: 2445.71,
        url_image: 'http://localhost:3001/images/iPhone+12.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses'

      },
      {
        id: 2,
        name: 'iPhone 13',
        price: 3197.00,
        url_image: 'http://localhost:3001/images/iPhone+13.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses'
      },
      {
        id: 3,
        name: 'iPhone 13 Pro Max',
        price: 4397.08,
        url_image: 'http://localhost:3001/images/iPhone+13+Pro+Max.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses'
      },
      {
        id: 4,
        name: 'iPhone 13 Pro',
        price: 4397.07,
        url_image: 'http://localhost:3001/images/iPhone+13+Pro.png',
        delivery_time: '25 dias úteis',
        subscription_period: '12 meses'
      },
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  }
};