const AccountController = require("../controllers/AccountController");

const router = require("express").Router();

// ADD ACCOUNT

router.post('/add', AccountController.addAccount);

// FIND ACCOUNT WITH USERNAME
router.post('/find_by_username', AccountController.FindByUsername);





module.exports = router;