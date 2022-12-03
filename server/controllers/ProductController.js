const Products = require('../model/Product');


const ProductsController = {
    // ADD PRODUCT
    addProduct: async(req, res) => {
        try {
            const products = new Products(req.body);
            const saveProducts = await products.save();
            res.status(200).json(saveProducts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    add: async(req, res) => {
        try {
            // const products = new Products(req.body);
            res.status(200).json(req.body);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    

};


module.exports = ProductsController;