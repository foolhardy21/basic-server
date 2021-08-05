const express = require('express')
const fs = require('fs')

const app = express()

app.get('/',(req,res) => {
    // res.send('hi')
    fs.readFile('./index.html',(error,data) => {
        if(error) {
        // res.writeHead(404)
        res.send('error')    
        } else {
            // res.writeHead(200, {'Content Type': 'text/html'})
            res.send(data)
        }
        // res.end()
    })
})

app.listen(8080,() => {
    console.log('server running')
})


