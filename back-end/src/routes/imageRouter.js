const express = require('express');

const route = express.Router();

route.use('/images', express.static('./src/images'));

module.exports = route;