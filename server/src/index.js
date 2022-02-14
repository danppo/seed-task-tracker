import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import routes deom './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   // do something
//   console.log(req.body);
//   next();
// });

// const date = Date.parse(req.body.date);
// const count = Number(req.body.count);

// let books = []
console.log(process.env.MY_SECRET);
console.log(process.env.PORT);

app.use('./growing', routes.growing);
app.use('./login', routes.login);
app.use('./register', routes.register);
app.use('./catalogue', routes.catalogue);



app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.post('/book', (req, res) => {

// });

app.get('/',(req,res) => {
  res.send('seed task server GET');
});
app.post('/',(req,res) => {
  res.send('seed task server POST');
});
app.put('/',(req,res) => {
  res.send('seed task server PUT');
});
app.delete('/',(req,res) => {
  res.send('seed task server DELETE');
});


app.get('/user',(req,res) => {
  res.send('user seed task server GET');
});
app.post('/user',(req,res) => {
  res.send('user seed task server POST');
});
app.put('/user/:userId',(req,res) => {
  res.send(`user seed task server PUT ${req.params.userId}`);
});
app.delete('/user',(req,res) => {
  res.send('user seed task server DELETE');
});

app.listen(process.env.PORT, () =>
  console.log(`Seed task tracker server listening on port ${process.env.PORT}`)
);
