const { User } = require('../database/models');
const { NotFoundError } = require('../middlewares/errors');

const userService = {
  async getAll() {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },
  async getById(id) {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
     });
    if (!user) {
      return NotFoundError('User not found');
    }
    return user;
  }
}

module.exports = userService;
