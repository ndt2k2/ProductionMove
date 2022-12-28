const Products = require("../model/Product");

const ProductsController = {
  // ADD PRODUCT
  addProduct: async (req, res) => {
    try {
      const products = new Products(req.body);
      const saveProducts = await products.save();
      res.status(200).json(saveProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // find all product
  getAllProduct: async (req, res) => {
    try {
      const allProduct = await Products.find({}).populate("idFactory");
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // find all product in distributor
  getAllProductInDistributor: async (req, res) => {
    try {
      const allProduct = await Products.find({ status: "distributor" });
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // find all product in manufacture factory
  // find all product in service center

  // Update product
  updateProduct: async (req, res) => {
    try {
      const ID = req.params.id;
      const update = req.body;
      const productUpdate = await Products.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true,
        rawResult: true, // Return the raw result from the MongoDB driver
      });
      res.json(productUpdate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // delete product
  deleteProduct: async (req, res) => {
    try {
      const ID = req.params.id;
      const filter = { id: ID };
      const productUpdate = await Products.findOneAndDelete(filter);
      res.status(200).json("xoa thanh cong");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = ProductsController;
