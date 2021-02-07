// 서버 종료: ctrl+c,  서버실행: npm start

const express = require('express'); //express 파일을 가져오기
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
  