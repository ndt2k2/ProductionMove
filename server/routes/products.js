const ProductsController = require("../controllers/ProductController");

const router = require("express").Router();

router.post('/add', ProductsController.addProduct);




module.exports = router;