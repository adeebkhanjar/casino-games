const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,

    },
    xp: {
        type: Number,
        default: 0


    },
    money: {
        type: Number,
        default: 5000

    }
});
userSchema.methods.toJSON = function() {
    const userObject = this.toObject()
    delete userObject.password
    return userObject
}
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = await jwt.sign({ _id: user._id.toString() }, process.env.SECRET_TOKEN)
    console.log('token', token);
    user["token"] = token
    await user.save()
    return token
}
userSchema.set('toJSON', { virtuals: true });
const User = mongoose.model('Users', userSchema);

module.exports = {
    User
}