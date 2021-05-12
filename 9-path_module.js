// 9-path_module.js
// path 모듈을 사용한 예제
// 파일의 절대경로, 상대경로, 파일명 등등을 다양하게 다룰 수 있다.

const path = require('path');

// 경로 구분자 출력
console.log(path.sep)

// 파일 경로 이어 붙이기
const filePath = path.join('/css','index.css')
console.log(filePath)

// 파일 경로 마지막 이름
const base = path.basename(filePath)
console.log(base)

// 파일 절대 경로
const absolute = path.resolve(__dirname, 'css','index.css')
console.log(absolute)
