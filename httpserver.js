const { text } = require('express')
const http = require('http')

const port  = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is code with harry</h1> <p>this is the way to earn</p>')
})
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})
