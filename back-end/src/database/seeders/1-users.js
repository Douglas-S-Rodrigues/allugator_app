'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: 'App Admin',
        email: 'adm@app.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      },
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};