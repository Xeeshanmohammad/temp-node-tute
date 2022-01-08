// const http = require('http')
// const server = http.createServer((req,res)=>{
//    res.write('Welcome Home page')
//    res.end()
// })
// server.listen(3000)







const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
       return res.end('<h1>Welcome to our Home Page</h1>')
    }
    if(req.url==='/about'){
       return res.end('Here our short story')
    }
res.end(`<h1>Oops</h1>
<p>We cannot find to seems which you are looking for</p>
<a href ="/">Back Home</a>`)
})
server.listen(5000)