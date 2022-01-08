const express = require('express')
const app = express()

const { people } = require('./2_json')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400)
        .json({ sucess: false, msg: 'Provide suitable contents' })
    }
    res.status(201).send({ success: true, person: name })

})
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
        .status(400)
        .json({ sucess: false, msg: 'Provide suitable contents' })
    }
    res.status(201).send({ success: true, data: [...people,name] })
})
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide crudential')

})


app.listen(5000, () => {
    console.log('server is listening on port(5000)................');
})
