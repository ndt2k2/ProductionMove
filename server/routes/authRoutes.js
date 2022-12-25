const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.get("/logIn", authController.logInPost);

module.exports = router;
