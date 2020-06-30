const express = require("express");
const router = express.Router();
const userController = require('../controllers/users');

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.put("/updatename", userController.updateName);

router.put('/updatepassword',userController.updatePassword);

router.delete("/:userID", userController.deleteUser);

module.exports = router;
