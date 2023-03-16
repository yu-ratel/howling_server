//아키텍쳐
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

let corsOptions = {
  origin: '*',
  Credential: true,
};

app.use(cors(corsOptions));

app.listen(port, () => console.log(`${port}번 포트 대기`));

app.get('/kakao-login', (req, res) => {
  const code = req.query.code;
  console.log(code);
  res.send(`코드받는중`);
});
