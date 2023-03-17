const express = require('express');
const app = express();
const port = 3000;

// body-parser 미들웨어 등록
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const ask = require("./sample") ;

// GET 요청에 대한 응답
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// POST 요청에 대한 응답
app.post('/submit', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // openai
  const result = await ask(name) ;
  
  // 받은 데이터 처리
  // ...

  res.send(result);
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중입니다.`);
});
