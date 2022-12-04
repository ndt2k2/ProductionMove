const Account = require('../model/Account');

const AccountController = {
    // ADD Account
    addAccount: async(req, res) => {
        try {
            const account = new Account(req.body);
            const saveAccount = await account.save();
            res.status(200).json(saveAccount);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // FIND BY USERNAME
    findByUsername: async(req, res) => {
        try {
            const username = req.body.username;
            await Account.find({username: username})
        } catch (error) {
            res.status(500).json(error);
        }
    },
};


module.exports = AccountController;