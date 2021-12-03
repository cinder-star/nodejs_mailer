const express = require('express');
const mail = require('./sendMail');


const app = express();

app.get('/', (req, res) => {
  mail.prepareMailAndSend();
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});