const ProductLine = require("../model/ProductLine");

const ProductLineController = {
  // ADD PRODUCT
  addProductLine: async (req, res) => {
    try {
      const products = new ProductLine(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllProductLine: async (req, res) => {
    try {
      const allProduct = await ProductLine.find({});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
  }
  },
};
module.exports = ProductLineController;