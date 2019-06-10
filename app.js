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

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = parseInt(req.query.shift);
  let output = '';
  for (let i=0;i < text.length; i++) {
    if ( text.charCodeAt(i) === 90 || text.charCodeAt(i) === 122 ) {
      output += String.fromCharCode(text.charCodeAt(i) + shift - 26);
    } else {
      output += String.fromCharCode(text.charCodeAt(i) + shift);
    }
  }
  res.send( output.toString() );
});

app.get('/lotto', (req, res) => {
  const numbers = req.query.arr;
  let random = [];
  let counter = 0;
  let output = '';
  for (let i=0;i < 6; i++){
    random.push(Math.floor(Math.random() * 20));
    for (let j=0;j < 6; j++){
      if ( random[i] === parseInt(numbers[j]) ) {
        counter = counter + 1;
      }
    }

  }
  if ( counter < 4 ) {
    output = 'Sorry, you lose';
  }
  if ( counter === 4 ) {
    output = 'Congratulations, you win a free ticket';
  }
  if ( counter === 5 ) {
    output = 'Congratulations! You win $100!';
  }

  if ( counter === 6 ) {
    output = 'Wow! Unbelievable! You could have won the mega millions!';
  }

  res.send( output.toString() );

});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});