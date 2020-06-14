const express = require ('express')
const router = express.Router();

router.get('/', (req, res, nxt) => {
    res.status(200).json({
        message: "Order Fetched"
    });
});

router.post('/', (req, res, nxt) => {
    res.status(201).json({
        message: "Order Placed"
    });
});

router.get('/:ID', (req, res, nxt) => {
    const id = req.params.ID;
    res.status(200).json({
        message: "Order number with given ID is",
        orderid: id
    });
});


module.exports = router;