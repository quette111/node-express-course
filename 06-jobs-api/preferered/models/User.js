const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 20,
        require: [true, 'Please provide username'],
    },
    email: {
        type: String,
        require: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'
        ],
        unique: true,
    },
    password: {
        type: String,
        minlength: 10,
        require: [true, 'Please provide password'],
    }
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash

})

UserSchema.methods.tokenCheck = async function () {
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME }
    )
}

UserSchema.methods.loginCheck = async function (person) {
    const checking = await bcrypt.compare(person, this.password)
    return checking
}


module.exports = mongoose.model('NewLifter', UserSchema)

