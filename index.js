const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/style.css', (req, res) => {
	res.sendFile(path.join(__dirname, '/public', 'style.css'));
});

app.get('/main.js', (req, res) => {
 res.sendFile(path.join(__dirname, '/public', 'main.js'));
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
