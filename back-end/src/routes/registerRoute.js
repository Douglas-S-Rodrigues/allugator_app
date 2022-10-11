const { Router } = require('express');

const registerController = require('../controllers/registerController');

const register = Router();

register.post('/', registerController.create);

module.exports = register;