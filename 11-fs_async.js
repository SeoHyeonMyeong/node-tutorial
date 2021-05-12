// 11-fs_async.js
// fs 모듈을 이용한 비동기 파일 읽기 쓰기 예제

const { readFile, writeFile } = require('fs');

readFile("./Contents/first.txt", 'utf8', (err,result) =>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    console.log("Done : Reading first file ...")
    readFile('./Contents/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result;
        console.log("Done : Reading second file ...")
        writeFile(
            './Contents/result.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result)=>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
                console.log("Done : Writing result file ...")
            }
        )
    })
})

console.log("Program is end.")
