// 12-http.js
// http 모듈을 이용한 예제

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/error'){
        res.end(`
            <h1>Oops</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>`)
    }
})

// 포트번호로 웹 서비스
server.listen(8080)
