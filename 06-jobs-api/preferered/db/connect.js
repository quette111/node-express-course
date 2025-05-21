const mongoose = require('mongoose')
require('dotenv').config()

const connectMongoose = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }) 
}
module.exports = connectMongoose