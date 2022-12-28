const ServiceCenterController = require("../controllers/ServiceCenterController");

const router = require("express").Router();


router.post("/add", ServiceCenterController.addServiceCenter);
router.delete("/delete", ServiceCenterController.deleteServiceCenter);

module.exports = router;
