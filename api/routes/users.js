const express = require ('express');
const mongoose = require ('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require ('./../models/user');

router.post('/signup', (req, res, nxt) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json ({error: err});
        } else {
            const user = new User({
                _id : new mongoose.Types.ObjectId(),
                email : req.body.email,
                password : hash  
            });
            user.save()
            .then(result => {
                res.status(200).json({
                    message: 'User Created'
                });
            })
            .catch(err => {
                console.group(err);
                res.status(500).json({
                    error: err
                });
            });
        }   
    });
});


module.exports = router;