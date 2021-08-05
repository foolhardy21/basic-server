const express = require('express')
const fs = require('fs')

const app = express()

app.get('/',(req,res) => {

    fs.readFile('./index.html',(error,data) => {
        if(error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('error')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
        res.end()
    })
})

app.get('/about',(req,res) => {

    fs.readFile('./about.html',(error,data) => {
        if(error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('error')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
        res.end()
    })
})

app.get('/contact',(req,res) => {

    fs.readFile('./contact-me.html',(error,data) => {
        if(error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('error')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
        res.end()
    })
})

app.get('/*',(req,res) => {

    fs.readFile('./404.html',(error,data) => {
        if(error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('error')
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
        res.end()
    })
})

app.listen(8080,() => {
    console.log('server running')
})


