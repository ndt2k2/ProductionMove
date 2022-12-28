const DistributorController = require("../controllers/DistributorController");

const router = require("express").Router();


router.post("/add", DistributorController.addDistributor);
router.delete("/:id", DistributorController.deleteDistributor);


module.exports = router;
