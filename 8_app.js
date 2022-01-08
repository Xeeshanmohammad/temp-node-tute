const os = require('os')
const user = os.userInfo()
console.log(user);
console.log(`The system is starting :${os.uptime}`)
const currentOs = {
    name:os.type(),
    release:os.release(),
    freeMemory:os.freemem(),
    totalMermory: os.totalmem()
}
console.log(currentOs);