const FactoryController = require("../controllers/FactoryController");

const router = require("express").Router();


router.post("/add", FactoryController.addFactory);
router.delete("/delete", FactoryController.deleteFactory);
router.get("/getAll",FactoryController.getAllFactory)

module.exports = router;
