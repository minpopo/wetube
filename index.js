// 서버 종료: ctrl+c,  서버실행: npm start

const express = require('express'); //express 파일을 가져오기
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}


function handleHome(req, res){
    res.send('Hello from home!');
}

function handleProfile(req, res){
    res.send('You are on my profile');
}

app.get("/", handleHome); //GET만 있으면 안되고 응답이 있어야함

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
  