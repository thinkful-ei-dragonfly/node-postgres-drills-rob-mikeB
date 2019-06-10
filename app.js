/* eslint-disable strict */


const express = require('express');
const morgan = require('morgan');

const app = express();

// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan('dev'));

//This is the final request handler
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/sum', (req, res) => {
  let a = req.query.a;
  let b = req.query.b;
  let sumNums = parseInt(a) + parseInt(b);
  // sumNums = sumNums.toString();
  // console.log(req.query);
  // let sumNums
  res.send( sumNums.toString() );
});



app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});