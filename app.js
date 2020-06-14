const express = require ('express');
const morgan = require ('morgan');
const app = express();
const bodyparser = require('body-parser');
const productRoute = require ('./api/routes/products');
const orderRoute = require ('./api/routes/orders')

// For logging requests to terminal using morgan
// All incoming requests
app.use (morgan('dev'));

// Parsing the requests
app.use(bodyparser.urlencoded({extended: false}));
app.use (bodyparser.json());

// Routes 
app.use('/products', productRoute);
app.use ('/orders', orderRoute);

// If request did not match any API
app.use ((req, res, nxt) => {
    const error = new Error('Not Found');
    error.status = 404;
    nxt(error);
});

// Handle all errors throughout the app
app.use ((error, req, res, nxt) => {
    res.status(error.status || 500);
    res.json ({
        error : {
            message: error.message
        }
    })
});


module.exports = app;