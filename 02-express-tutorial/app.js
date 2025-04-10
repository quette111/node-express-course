console.log('Express Tutorial')

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const PORT = 5011
const { products, people } = require("./data");
const peopleRouter = require('./routes/people');
const router = require('./routes/people');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", peopleRouter)
app.use(cookieParser());



const logger = function (req, res, next) {
    req.requestTime = new Date().toISOString()
    console.log(req.method)
    console.log(req.url)
    console.log(`Requested at: ${req.requestTime}`)

    next()
}

app.use(logger)

app.get("/test", (req, res) => {

    app.use(auth)
    return res.status(200).json({ message: `Welcome, ${req.user}` })
    
    })

app.post('/logon', (req, res) => {
    console.log(people)
    const { name } = req.body
    const user = people.find(person => person.name.toLowerCase() === name.toLowerCase());

    if (user) {
        res.cookie("name", name, { httpOnly: true, path: '/' })
        res.status(201).json({ message: `Hello ${name}` })
    }
    else {
        return res.status(400).json({ message: 'Name not found' })
    }
})

app.delete('/logoff'), (req, res) => {
    const { name } = req.body
    const user = people.find(person => person.name.toLowerCase() === name.toLowerCase());

    if (user) {
        res.clearCookie("name")
        res.status(200).json({ message: ` ${name} has logged out` })
    }
    else {
        return res.status(400).json({ message: 'Name not found' })
    }
}

const auth = ((req, res, next) => {
    console.log('Cookies:', req.cookies);

    if (req.cookies.name) {
        req.user = req.cookies.name
        next()
    }
    else {
        return res.status(401).json({ message: 'unauthorized' })
    }


})





app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
    res.json(products);
})




app.get('/api/v1/products/:productID', (req, res, err) => {
    if (err) {
        res.status(404).json({ message: "That product was not found." })
    }
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
    res.json(product);
})

app.get('/api/v1/query', (req, res, next) => {  //http://localhost:5005/api/v1/query?search=10.99&limit=-1
    console.log(req.query)
    try {
        const query = req.query //accessing query, a property in the req object which is a param of the .get()
        const limit = req.query.limit < 0 ? 0 : req.query.limit //handling edge case, if limit (property inside req.query object) is nan or negative limit = 0, else it is equal to defined limit

        const filteredProducts = products.filter((value) => {
            if (Number(query.search) >= 0) {
                console.log(query.search)
                console.log(value.price)
                return Number(query.search) === value.price
            }
            else {
                if (query.search.length < value.name.length) {
                    return value.name.startsWith(query.search)
                } else if (query.search.length > value.name.length) {
                    return query.search.includes(value.name)
                } else {
                    return value.name === query.search
                }
            }
        });

        return res.json(filteredProducts.length ? filteredProducts.slice(0, limit) : `No products matched ${query.search}`)

    } catch (err) {
        return res.status(404).json({ message: "That product was not found." })
    }


})


app.all('*', (req, res) => {
    res.status(404).send(
        `<h1>404 :(</h1>`
    )
})

app.listen(PORT, (err) => {
    if (err) console.log("error:", err)
    console.log("Server listening on Port", PORT);
})