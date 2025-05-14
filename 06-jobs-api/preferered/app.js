require('dotenv').config()
require('express-async-errors');

const connectMongoose = require('./db/connect')
const liftRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')
const auth = require('./middleware/authentication')

const express = require('express');
const app = express()
app.use(express.json())
const port = process.env.port || 3000


app.use('/api/v1/lift', auth, liftRouter)
app.use('/api/v1/auth', authRouter)

const start = async () => {
  try{
    await connectMongoose(process.env.MONGO_URI)
    app.listen(port, console.log(`Server running on port: ${port} . . .  DB CONNECTED`))
  } catch (error) {
console.log(error, 'connection error')
  }
} 

start()
