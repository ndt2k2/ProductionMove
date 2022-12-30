const WarrantyController = require("../controllers/WarrantyController");

const router = require("express").Router();


router.post("/add", WarrantyController.addWarranty);
router.get("/getAll",WarrantyController.getAll);
router.put("/",WarrantyController.updateStatus);
router.get("/getById",WarrantyController.FindById)


module.exports = router;
