const ServiceCenter = require("../model/ServiceCenter");

const ServiceCenterController = {
  // ADD PRODUCT
  addServiceCenter: async (req, res) => {
    try {
      const products = new ServiceCenter(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete 
  deleteServiceCenter: async (req, res) => {
    try {
      const ID = req.body.id;
      const productUpdate = await ServiceCenter.findOneAndDelete({_id: ID});
      res.status(200).json("xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get All
  getAllServiceCenter: async (req, res) => {
    try {
      const allProduct = await ServiceCenter.find({});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },


};
module.exports = ServiceCenterController;