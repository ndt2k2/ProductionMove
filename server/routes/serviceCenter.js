const ServiceCenterController = require("../controllers/ServiceCenterController");

const router = require("express").Router();


router.post("/add", ServiceCenterController.addServiceCenter);
router.delete("/:id", ServiceCenterController.deleteServiceCenter);

module.exports = router;
