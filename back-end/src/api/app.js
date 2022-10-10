const express = require('express');
const product = require('../routes/productsRoute');

const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/products', product);

module.exports = app;
