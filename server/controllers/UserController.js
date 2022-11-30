const User = require('../model/User');

const UserController = {
    // ADD USER
    addUser: async(req, res) => {
        try {
            const newUser = new User(req.body);
            // const saveUser = await newUser.save();
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }

};


module.exports = UserController;