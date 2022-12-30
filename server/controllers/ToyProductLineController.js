const ProductLineTo = require("../model/ToyProductLine");

const ProductLineToController = {
  // ADD PRODUCT
  addProductLineTo: async (req, res) => {
    try {
      const products = new ProductLineTo(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllProductLineTo: async (req, res) => {
    try {
      const allProduct = await ProductLineTo.find({});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
  }
  },
};
module.exports = ProductLineToController;