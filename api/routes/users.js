const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./../models/user");

router.post("/signup", (req, res, nxt) => {
  // Find the email in database
  // If exists throw error else
  // encrypt password and create user
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({ error: "User Already Exists" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({ error: err });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(200).json({
                  message: "User Created",
                });
              })
              .catch((err) => {
                console.group(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Problem connecting to server" });
    });
});

router.post("/login", (req, res, nxt) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userID: user[0]._id,
            },
            "secretkey",
            { expiresIn: "1h" }
          );

          return res.status(200).json({
            message: "User logged in",
            token: token,
          });
        } else {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Cannot contact database" });
    });
});

router.delete("/:userID", (req, res, nxt) => {
  User.remove({ _id: req.param.userID })
    .exec()
    .then((result) => {
      res.status(200).json({ message: "User Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
