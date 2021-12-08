const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const authentication = async(req, res, next) => {
    try {
        const userToken = req.header("Authorization").replace("Bearer ", "");
        const verify = jwt.verify(userToken, process.env.SECRET_TOKEN)
        const loggedUser = await userModel.User.findOne({ _id: verify._id.toString(), token: userToken })
        if (!loggedUser)
            throw ''
        req.user = loggedUser
        req.token = userToken
        next();
    } catch (err) {
        res.status(404).send('Please Authenticate')
    }
}
module.exports = authentication