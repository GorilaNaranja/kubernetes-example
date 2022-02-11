var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const name = "";

app.get('/', async (req, res) => {
  console.log("Get log");
  res.json({ name });
})

app.get('/save', async (req, res) => {
  name = req.query.name;
  res.send("OK");
})

app.listen(3000, () => {
  console.log("Api started");
})