const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3005;

// let books = []

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.post('/book', (req, res) => {

// });

app.get('/',(req,res) => {
  res.send('seed task server');
});

app.listen(port, () => console.log(`Seed task tracker server listening on port ${port}`));
