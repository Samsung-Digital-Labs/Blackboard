const express = require ('express');
const router = express.Router();
const Product = require ('./../models/product')
const mongoose = require ('mongoose');

router.get('/', (req, res, nxt) =>{
    res.status(200).json({
        message: 'get request'
    });
});

// Posting a new product
router.post('/', (req, res, nxt) =>{

    // req (request) now has body attribute 
    // because of body parser
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price            
    }); 
    // Save the product
    product.save();

    res.status(201).json({
        message: 'post request',
        product : product
    });
});

router.get('/:ID', (req, res, nxt) =>{
    const id = req.params.ID; 
    // Find the product in 
    // database using the ID
    // from the get request
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log (doc);
        res.status(201).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({"error" : err});
    });
});


module.exports = router;