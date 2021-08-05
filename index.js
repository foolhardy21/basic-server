const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname

    const filename = pathname === '/' ? './index.html' : 
            pathname === '/contact' ? './contact-me.html' :
            pathname === '/about' ? './about.html' : '404.html'

    fs.readFile(filename, (error, data) => {
        if(error) {
            res.writeHead(404)
            res.write('Error 404')
            
        } else {
            res.writeHead(200, { 'Content-Type':'text/html' })
            res.write(data)
        }
        res.end()
    })
    
})

server.listen(8080, () => {
    console.log('server running')
})

