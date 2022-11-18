const UserController = require("../controllers/UserController");

const router = require("express").Router();

// ADD USER

router.post('/add', UserController.addUser);







module.exports = router;