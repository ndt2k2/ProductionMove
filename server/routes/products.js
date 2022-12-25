const ProductsController = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add", ProductsController.addProduct);
router.put("/:ID", ProductsController.updateProduct);
router.get("/getAll", ProductsController.getAllProduct);
router.get("/getDistributor", ProductsController.getAllProductInDistributor);
router.delete("/:ID", ProductsController.deleteProduct);

module.exports = router;
