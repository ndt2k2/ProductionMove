const mongoose = require("mongoose");
const Customer = require("./Customer");
const Distributor = require("./Distributor");
const ManufactureFactory = require("./ManufactureFactory");

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
      ref: ManufactureFactory,
    },
    idDistributor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: Distributor,
    },
    status: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
