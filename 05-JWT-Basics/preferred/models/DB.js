const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema



const user = new Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

user.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash
        next()
    } catch (err) {
        next(err)
    }
})



const Model = mongoose.model('users', user)

module.exports = Model



 