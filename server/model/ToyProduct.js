const mongoose = require("mongoose");
const Account = require("./Account");
const Customer = require("./Customer");
const Distributor = require("./Distributor");
const ManufactureFactory = require("./ManufactureFactory");
const ProductLine = require("./ToyProductLine");

const ProductSchema = new mongoose.Schema(
  {

    idProductLine: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: ProductLine,
    },
    idFactory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: Account,
    },
    idDistributor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: Account,
    },
    status: {
      type: String,
      required: true,
    },
    located: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: Account,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ToyProduct", ProductSchema);
