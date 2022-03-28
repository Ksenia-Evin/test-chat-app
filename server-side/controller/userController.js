const User = require("../repo/userRepo");

const register = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const usernameCheck = await User.findOne({username})
        if (usernameCheck) return res.json({msg: "Username already used", status: false});
        const user = await User.create({
            username, password
        });
        delete user.password;
        return res.json({status: true, user})
    }
    catch(err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if (!user) return res.json({msg: "Incorrect username or password", status: false});
        const isPasswordValid = password === user.password;
        if (!isPasswordValid) return res.json({msg: "Incorrect username or password", status: false});
        delete user.password;
        return res.json({status: true, user})
    }
    catch(err) {
        next(err)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({_id: {$ne: req.params.id }}).select([
            "username", "_id"
        ]);

        return res.json(users)
    }
    catch(err) {
        next(err)
    }
}

module.exports = {
    register,
    login,
    getAllUsers
}
