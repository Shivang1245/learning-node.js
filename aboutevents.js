const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()
myEmitter.on('waterfull', ()=>{
    console.log("please turn off the motor")
    setTimeout(()=>{
        console.log("a gentle reminder please turn off the motor")
    }, 3000)
})
console.log("the script is still running")
