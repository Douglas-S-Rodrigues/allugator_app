const { User } = require('../database/models');

const userService = {
  async getById(id) {
    const user = await User.findOne({ where: { id } });
    return user;
  }
}

module.exports = userService;
