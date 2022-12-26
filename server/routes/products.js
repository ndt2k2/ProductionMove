const ProductsController = require("../controllers/ProductController");

const router = require("express").Router();

router.post("/add", ProductsController.addProduct);
router.put("/:id", ProductsController.updateProduct);
router.get("/getAll", ProductsController.getAllProduct);
router.get("/getDistributor", ProductsController.getAllProductInDistributor);
router.delete("/:id", ProductsController.deleteProduct);

module.exports = router;
