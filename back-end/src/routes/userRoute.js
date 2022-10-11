const { Router } = require('express');
const userController = require('../controllers/userController');

const user = Router();

user.get('/', userController.getAll);

user.get('/:id', userController.getById);

module.exports = user;
