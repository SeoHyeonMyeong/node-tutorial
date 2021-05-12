// 8-os_module.js
// os 모듈을 사용하는 예제 

const os = require('os')

const user = os.userInfo()
console.log(user)
console.log(`시스템 업타임은 ${os.uptime()} 초`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
