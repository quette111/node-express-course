console.log('Express Tutorial')

const express = require('express')
const app = express()
const PORT = 5007
const { products } = require("./data");


app.use(express.static('public'))


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