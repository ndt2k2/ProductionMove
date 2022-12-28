const DistributorController = require("../controllers/DistributorController");

const router = require("express").Router();


router.post("/add", DistributorController.addDistributor);
router.post("/addcustomer",DistributorController.addCustomer);
router.delete("/delete", DistributorController.deleteDistributor);


module.exports = router;
