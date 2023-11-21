// OS MODULE

const os = require('os') // just putting os in the brackets lets node you're looking for the built-in module.
// note that just writing os after const in line 1 followed by accessing methods of the module as done below is just one setup,
// you can have multiple ways of doing this where you use curly brackets after const to directly access the method that way.

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is  ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)