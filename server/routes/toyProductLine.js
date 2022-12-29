const ProductLineToController = require("../controllers/ToyProductLineController");

const router = require("express").Router();


router.post("/add", ProductLineToController.addProductLineTo);
router.get("/getAll",ProductLineToController.getAllProductLineTo);


module.exports = router;
