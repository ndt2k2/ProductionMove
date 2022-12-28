const Distributor = require("../model/Distributor");

const DistributorController = {
  // ADD PRODUCT
  addDistributor: async (req, res) => {
    try {
      const products = new Distributor(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete 
    deleteDistributor: async (req, res) => {
    try {
      const ID = req.params.id;
      const filter = { id: ID };
      const productUpdate = await Distributor.findOneAndDelete(filter);
      res.status(200).json("xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = DistributorController;