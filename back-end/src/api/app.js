const express = require('express');
require('express-async-errors');
const product = require('../routes/productsRoute');
const register = require('../routes/registerRoute');
const user = require('../routes/userRoute');
const login = require('../routes/loginRoute');
const rentedProduct = require('../routes/rentedProductsRoute');
const imageRouter = require('../routes/imageRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');


const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/products', product);
app.use('/register', register);
app.use('/users', user);
app.use('/login', login);
app.use('/rented', rentedProduct);
app.use(imageRouter); //rota para pegar imagens

app.use(errorHandlerMiddleware);
module.exports = app;
