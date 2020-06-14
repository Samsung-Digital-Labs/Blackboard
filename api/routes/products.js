const express = require ('express');
const router = express.Router();

router.get('/', (req, res, nxt) =>{
    res.status(200).json({
        message: 'get request'
    });
});

router.post('/', (req, res, nxt) =>{
    res.status(200).json({
        message: 'post request'
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