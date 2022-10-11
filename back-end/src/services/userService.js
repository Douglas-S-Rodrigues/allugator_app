const { User } = require('../database/models');
const { NotFoundError } = require('../middlewares/errors');

const userService = {
  async getAll() {
    const users = await User.findAll();
    return users;
  },
  async getById(id) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return NotFoundError('User not found');
    }
    return user;
  }
}

module.exports = userService;
