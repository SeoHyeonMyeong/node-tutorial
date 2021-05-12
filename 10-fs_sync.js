// 10-fs_sync.js
// fs 모듈을 이용한 동기 파일 읽기/쓰기 

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Contents/first.txt','utf8');

writeFileSync(
    './Contents/result.txt',
    `Here is the result : ${first}`,
    { flag: 'a' }   // append 속성 추가
);
