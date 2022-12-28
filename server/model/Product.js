const mongoose = require("mongoose");
const Account = require("./Account");
const Customer = require("./Customer");
const Distributor = require("./Distributor");
const ManufactureFactory = require("./ManufactureFactory");
const ProductLine = require("./ProductLine");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
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
    idProductLine: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: ProductLine,
    },
    status: {
      type: String,
      required: true,
    },
    location: {
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
module.exports = mongoose.model("Product", ProductSchema);
