// 2-global.js
// 내장된 전역변수에 대한 이해

// GLOBALS - NO WINDOW !!!

// __dirname - 최근 디렉토리 경로
// __filename - 파일 이름
// require - 모듈을 사용하기 위한 함수
// module - 최근 모듈의 정보
// process - 실행중인 프로그램의 환경 정보

console.log(__dirname)
setInterval(() => {
    console.log("hello World!");
},1000);
