import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3005;

// let books = []
console.log(process.env.MY_SECRET);
console.log(process.env.PORT);

app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.post('/book', (req, res) => {

// });

app.get('/',(req,res) => {
  res.send('seed task server');
});

app.listen(port, () => console.log(`Seed task tracker server listening on port ${port}`));
