const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.post("/logIn", authController.logInPost);

module.exports = router;
