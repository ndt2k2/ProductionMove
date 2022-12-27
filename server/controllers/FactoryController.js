const ManufactureFactory = require("../model/ManufactureFactory");

const FactoryController = {
  // ADD PRODUCT
  addFactory: async (req, res) => {
    try {
      const products = new ManufactureFactory(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete 
  deleteFactory: async (req, res) => {
    try {
      const ID = req.params.id;
      const filter = { id: ID };
      const productUpdate = await ManufactureFactory.findOneAndDelete(filter);
      res.status(200).json("xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = FactoryController;