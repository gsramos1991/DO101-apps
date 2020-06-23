var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('This file was updated, from Gabriel\n');
});

app.get('/mars', function (req, res) {
  res.send('Marte é um lugar legal para viver!\n');
});

app.get('/Saturno', function (req, res) {
  res.send('Hello Saturno!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

