// const express = require('express')
// const app = express()
// const logger = require('./7_app_use.js')
// const authorize = require('./8_authorise.js')
// const morgan = require('morgan')


// // app.use(express.static('./public'))
// app.use([authorize,logger])
// app.get('/',logger,(req,res)=>{
//     res.send('Home Page')
// })

// app.get('/about',logger,(req,res)=>{
//     res.send('About Page')
// })
// app.get('/api/product',logger,(req,res)=>{
    
//     // console.log(req.user);
//     res.send('Products')
// })

// app.get('/api/item',logger,(req,res)=>{
//     console.log(req.user);
   
//     res.send('Items')
// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port(5000)................');
// })

//..........................................................................................
const express = require('express')
const app = express()
const logger = require('./7_app_use.js')
const authorize = require('./8_authorise.js')
const morgan = require('morgan')


// app.use(express.static('./public'))
app.use(morgan('tiny'))
app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/api/product',(req,res)=>{
    
    console.log(req.user);
    res.send('Products')
})

app.get('/api/item',(req,res)=>{
    console.log(req.user);
   
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('server is listening on port(5000)................');
})