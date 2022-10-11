const loginService = require('../services/loginService');

const loginController = {
  async login(req, res) {
    const data = await loginService.validateBodyLogin(req.body);
    const user = await loginService.validateUserByEmail(data);
    await loginService.verifyUserPassword(data.password, user.password);
    const { id, name, email } = user;
    return res.json({ id, name, email });
  },
}

module.exports = loginController;
