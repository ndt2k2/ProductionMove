const Account = require("../model/Account");

const AccountController = {
  // ADD Account
  addAccount: async (req, res) => {
    const username = req.body.username;
    try {
      // const account = new Account(req.body);
      // if (req.body.username) {
      //     console.log(req.body.username)
      //     const acc = Account.findOne({username: req.body.username})
      //     console.log(acc.username)
      //     if(acc.username == null) {
      //         console.log("Username was used!!!")
      //         res.status(222).json("1")
      //     } else {
      //         const saveAccount = await account.save();
      //         res.status(200).json(saveAccount);
      //     }

      // }

      const acc = await Account.findOne({ username: username });
      if (acc !== null) {
        res.json(acc);
      } else {
        const saveAccount = new Account(req.body);
        saveAccount.save();
        res.json(saveAccount);
      }
      //   if (acc == null) {
      //     const saveAccount = await Account.save();
      //     res.status(200).json(saveAccount);
      //   } else {
      //     res.status(200).json("tai khoan da ton tai");
      //   }
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
};

module.exports = AccountController;
