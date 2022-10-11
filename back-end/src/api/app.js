const express = require('express');
require('express-async-errors')
const product = require('../routes/productsRoute');
const register = require('../routes/registerRoute');
const user = require('../routes/userRoute');
const login = require('../routes/loginRoute');
const rentedProduct = require('../routes/rentedProductsRoute');


const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/products', product);
app.use('/register', register);
app.use('/users', user);
app.use('/login', login);
app.use('/rented', rentedProduct);

app.use(errorHandlerMiddleware);
module.exports = app;
