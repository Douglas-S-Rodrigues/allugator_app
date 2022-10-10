'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: 'App Admin',
        email: 'adm@deliveryapp.com',
        password: '123456',
      },
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};