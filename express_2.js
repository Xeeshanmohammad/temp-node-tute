const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./styles.css')
const homeImage = readFileSync('./logo.svg')
const homeLogic = readFileSync('./browser-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url
    if (url == '/') {
        res.writeHead('200', { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (url == '/') {
        res.writeHead('200', { 'content-type': 'text/html' })
        res.write(homeStyle)
        res.end()
    }
    else if (url == '/about') {
        res.writeHead('200', { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else {
        res.writeHead('404', { 'content-type': 'text/html' })
        res.write('Page not Found')
        res.end()
    }

})
server.listen(5000)