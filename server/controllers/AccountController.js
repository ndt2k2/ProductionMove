const Account = require("../model/Account");

const AccountController = {
  // ADD Account
  addAccount: async (req, res) => {
    const username = req.body.username;
    try {

      const acc = await Account.findOne({ username: username });
      if (acc !== null) {
        res.json("Tài khoản đã tồn tại");
      } else {
        const saveAccount = new Account(req.body);
        saveAccount.save();
        res.json(saveAccount);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // FIND BY USERNAME
  FindByUsername: async (req, res) => {
    try {
      const username = req.body.username;
      await Account.find({ username: username });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //Get all đại lí
  getAllDistributor: async (req, res) => {
    try {
      const allProduct = await Account.find({"typeAccount" : "Distributor"});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllFactory: async (req, res) => {
    try {
      const allProduct = await Account.find({"typeAccount": "Factory"});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
  }
  },


  getAllServiceCenter: async (req, res) => {
    try {
      const allProduct = await Account.find({"typeAccount" : "Servicecenter"});
      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

};

module.exports = AccountController;
