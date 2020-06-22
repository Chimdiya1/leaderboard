const CSVToJSON = require('csvtojson');
const express = require('express');
const app = express();

let board = [];
app.use(express.static('./'));

function dynamicsort(property, order) {
  var sort_order = 1;
  if (order === 'desc') {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  };
}

app.get('/leaderdata', (req, res) => {
  console.log('yeesssss');
  CSVToJSON()
    .fromFile('list.csv')
    .then((users) => {
      // users is a JSON array
      // log the JSON array
      board = users;
      console.log(board);
      res.setHeader('Content-Type', 'application/json');
      res.json(board);
    })
    .catch((err) => {
      // log error if any
      console.log(err);
    });
});
app.get('/leaderdata/asc', (req, res) => {
  CSVToJSON()
    .fromFile('list.csv')
    .then((users) => {
      // users is a JSON array
      // log the JSON array
      board = users;
      board.sort(dynamicsort('points', 'asc'));
      res.setHeader('Content-Type', 'application/json');
      res.json(board);
    })
    .catch((err) => {
      // log error if any
      console.log(err);
    });
});

app.listen(3000);
console.log('Your are now listening on port 3000 bithcheeees');
