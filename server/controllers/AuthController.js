const User = require("../model/Account");

const AuthController = {
  //log in
  logInPost: async (req, res) => {
    const username = req.body.username;
    try {
      const user = await User.findOne({ username: username });
      if (user !== null) {
        if (user.password !== req.body.password) {
          res.json({ status: "wrong password" });
        } else {
          res.json(user);
        }
      } else {
        res.json({ status: "dont have this account" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = AuthController;
