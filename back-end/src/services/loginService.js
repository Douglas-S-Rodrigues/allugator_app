const Joi = require('joi');
const md5 = require('md5');
const { User } = require('../database/models')
const { ValidationError, NotFoundError } = require('../middlewares/errors');

const loginService = {
  async validateBodyLogin(unknown) {
    const schema = Joi.object({
      email: Joi.string().required().email().max(255),
      password: Joi.string().required().min(6),
    });
    try {
      const result = await schema.validateAsync(unknown);
      return result;
    } catch (error) {
      ValidationError('Some fields are missing');
    }
  },  
  async validateUserByEmail(data) {
    const { email } = data;
    const userModel = await User.findOne({
      where: { email },
    });
    if (!userModel) {
      NotFoundError('Invalid email');
    }
    return userModel;
  },
  async verifyUserPassword(dataPassword, userPassword) {
    const icnryptedPassword = md5(dataPassword);
    if (userPassword !== icnryptedPassword) {
      NotFoundError('Invalid password');
    }
  },
}

module.exports = loginService;