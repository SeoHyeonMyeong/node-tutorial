// 3-use_module.js
// 모듈을 불러와서 사용하는 방법 예제

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)

sayHi(names.seo)
sayHi(names.john)
