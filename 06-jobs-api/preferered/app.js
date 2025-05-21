require('dotenv').config()
require('express-async-errors');

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express');
const app = express()

//connectDB
const connectMongoose = require('./db/connect')
const auth = require('./middleware/authentication')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//routers
const liftRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')


app.set('trust-proxy', 1)
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
}))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())


//routes
app.use('/api/v1/lift', auth, liftRouter)
app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000
app.get('/', (req, res)=> {res.send('HELLO')})
const start = async () => {
  try{
    await connectMongoose(process.env.MONGO_URI, console.log('Connected to DB'))
    app.listen(PORT, console.log(`Server running on port: ${PORT} . . . `)
    );
  } catch (error) {
    console.log(error)
  }
} 

start()
