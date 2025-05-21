console.log('Task Manager App')
const connectDB = require('./db/connect')
const express = require('express');
const app = express()
const tasks = require('./routes/task')
require('dotenv').config()
//middelware
const notFound = require('../middleware/notFound.js');
const errorHandler = require('../middleware/errorhandler.js');

app.use(express.json())


// routes 

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)
 const port = 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()
