const fs = require('fs')

// fs.readFile('file.txt', 'utf-8', (data,err )=>{
//     console.log(data,err)
// })

const a  = fs.readFileSync('file.txt')

console.log(a.toString())
console.log("finished reading a file")

b = fs.writeFileSync('file3.txt', "this is the data")
console.log(b)
