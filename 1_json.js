const express = require('express')
const app = express()
const { products } = require('./2_json.js')

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log('server is listening on port 5000.............');
})