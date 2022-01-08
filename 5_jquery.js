const express = require('express')
const app = express()
const { products } = require('./2_json.js')

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href = "/api/products">products</a>`)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newProducts)
})

// app.get('/api/products/1', (req, res) => {
//     const singleProducts = products.find((product) => product.id === 1)


//     res.json(singleProducts)
// })
app.get('/api/products/:productId', (req, res) => {
    // console.log(req)
    // console.log(req.params)

    const { productId } = req.params

    const singleProduct = products.find((product) => product.id === Number(productId))

    // console.log(singleProduct)
    if (!singleProduct) {
        return res.status(404).send('Page doesnot found')
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params)
    res.send('Hello World')
})
//jquery.........................................................
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query

    let sortedProducts = [...products]
    // console.log(req.query)
    // res.send('Hello World')
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no product are matches you search')
        return res.status(200).json({ success: true ,  data: [] })
    }
    res.status(200).json(sortedProducts)

})

app.listen(5000, () => {
    console.log('server is listening on port 5000.............');
})
