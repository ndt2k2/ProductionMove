const ProductLineController = require("../controllers/ProductLineController");

const router = require("express").Router();


router.post("/add", ProductLineController.addProductLine);
router.get("/getAll",ProductLineController.getAllProductLine);


module.exports = router;
