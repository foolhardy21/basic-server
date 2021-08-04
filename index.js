const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname

    const filename = pathname === '/' ? './index.html' : 
            pathname === '/contact' ? './contact-me.html' :
            pathname === '/about' ? './about.html' : '404.html'
    
    // console.log(filename)

    fs.readFile(filename, (error, data) => {
        if(error) {
            res.statusCode = 404
            res.setHeader('Content-Type','text/html')
            res.end('<h1>Error 404</h1>')
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type','text/html')
            res.end(data)
        }
    })
    
})

server.listen(8080, () => {
    console.log('server running')
})

