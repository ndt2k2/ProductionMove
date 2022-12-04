const User = require('../model/User');

const UserController = {
    // ADD USER
    addUser: async(req, res) => {
        try {
            const user = new User(req.body);
            const saveUser = await user.save();
            res.status(200).json(saveUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }

};


module.exports = UserController;