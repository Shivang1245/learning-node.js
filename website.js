const fs = require('fs')
const { text } = require('express')
const http = require('http')

const port  = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url=='/'){
        res.statusCode == 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
        console.log("this is the html file")
        
    }else if(req.url == '/hello'){
        res.end('<h1>This is code with harry</h1> <p>this is the way to earn</p>')
    }
    else{

        res.statusCode = 404
        
    }
})
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})
