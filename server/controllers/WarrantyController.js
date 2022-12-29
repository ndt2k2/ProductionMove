const Warranty = require("../model/Warranty");

const WarrantyController = {
  //add
  addWarranty: async (req,res) => {
    try {
      const products = new Warranty(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
        res.status(500).json(error);
    }
  },

  // FIND BY USERNAME
  FindById: async (req, res) => {
    try {
      const Warranty = await Warranty.FindById(req.body._id)
      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const allProduct = await Warranty.find()
      .populate("idDistributor","name")
      .populate("idServiceCenter","name");
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Update 
  updateStatus: async (req, res) => {
    try {
      const ID = req.body._id;
      const update = req.body;
      const productUpdate = await Warranty.findByIdAndUpdate(ID, update, {
        new: true,
        upsert: true,
        rawResult: true, // Return the raw result from the MongoDB driver
      });
      res.json(productUpdate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

};

module.exports = WarrantyController;
