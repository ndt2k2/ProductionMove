const FactoryController = require("../controllers/FactoryController");

const router = require("express").Router();


router.post("/add", FactoryController.addFactory);
router.delete("/delete", FactoryController.deleteFactory);

module.exports = router;
