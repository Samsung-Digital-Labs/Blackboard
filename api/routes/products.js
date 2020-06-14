const express = require ('express');
const router = express.Router();

router.get('/', (req, res, nxt) =>{
    res.status(200).json({
        message: 'get request'
    });
});

// Posting a new product
router.post('/', (req, res, nxt) =>{

    // req (request) now has body attribute 
    // because of body parser
    const product = {
        name: req.body.name,
        price: req.body.price            
    }; 

    res.status(201).json({
        message: 'post request',
        product : product
    });
});

router.get('/:ID', (req, res, nxt) =>{
    const id = req.params.ID; 
    if (id === 'secret')
        res.status(200).json({
            message: 'get re: IDquest',
            id: 'Secret secret'
        });
    else 
        res.status(200).json({
            message: 'Not so secret'
        });
});


module.exports = router;