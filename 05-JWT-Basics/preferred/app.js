require('dotenv').config()
require('express-async-errors')
const auth = require('./middleware/auth')
const router = require('./routes/router')
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1', router)


app.get('/', (req, res) => { res.send('Hello world, server is running!') })

const start = async () => {

    try {
        app.listen(port, () => { console.log(`Server listening on port: ${port} . . . `) })
        mongoose.connect(process.env.MONGO_URI, console.log('Database successfully connected :-)'))

    } catch (error) {
        console.log(`Error: ${error}`)

    }
}

start()