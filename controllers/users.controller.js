const usersModel = require('../models/user.model');
const bcrypt = require('bcrypt')
const validator = require('validator')
const getUser = async(req, res) => {
    try {
        console.log('Úser is ', req.user);
        res.status(200).json(req.user)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, msg: err.message });
    }
}

const register = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        if (typeof username !== 'string')
            return res.status(400).send('úser name Incorrect(you ugly)')
        if (!validator.isEmail(email))
            return res.status(400).send('email Incorrect(you ugly)')
        if (password.length < 8)
            return res.status(400).send('password must be atleast 8 characters(you ugly)')

        const user = await usersModel.User.findOne({ username: username, email: email })
        if (user) return res.status(400).send("wrong credentials")
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = new usersModel.User({
            username: username,
            email: email,
            password: hashedPassword,

        })
        console.log(newUser);
        newUser.save((err, data) => {
            if (err) return res.status(404).send(err);
            console.log(data);
            return res.status(200).json(data);
        });
    } catch (err) {
        return res.status(400).send(err)
    }
}
const login = async(req, res) => {
    try {
        const { username, password } = req.body
        const user = await usersModel.User.findOne({ username: username })
        if (!user) return res.status(400).send("user name doesn't exist")
        const passwordValidation = await bcrypt.compare(password, user.password)
        if (!passwordValidation) return res.status(400).send("invalid password")
        console.log('user');
        console.log('sss');
        await user.generateAuthToken()
        console.log('ádeeb');
        res.status(200).json(user)
    } catch (err) {
        return res.status(400).send(err)
    }


}
const deleteUser = (req, res) => {
    const { id } = req.params;
    usersModel.User.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}
const updateUser = (req, res) => {
    const { id } = req.params;
    const { xp, money } = req.body;
    usersModel.User.findByIdAndUpdate(id, { xp: xp, money: money }, { new: true, runValidators: true }, (err, data) => {
        if (err) return res.status(404).send(err);
        console.log('data', data);
        return res.status(200).send(data);
    });
}
module.exports = {
    getUser,
    register,
    deleteUser,
    login,
    updateUser,
}