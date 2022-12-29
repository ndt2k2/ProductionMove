const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const userRoute = require("./routes/account");
const productsRoute = require("./routes/products");
const authroute = require("./routes/authRoutes");
const productLineRoute = require("./routes/productLine");

// connect database
mongoose.connect(
  "mongodb+srv://20020467:22122002@cluster0.y3un7jc.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connect to MongoDB");
  }
);

app.use(bodyParser.json({ limit: "50Mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});

// ROUTES
app.use("/api/account", userRoute);
app.use("/api/product", productsRoute);
app.use("/api/auth", authroute);
app.use("/api/productLine",productLineRoute)

app.listen(8000, () => {
  console.log("Server is running...");
});
