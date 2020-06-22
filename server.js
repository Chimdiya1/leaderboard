const CSVToJSON = require('csvtojson');
const express = require('express');
const app = express();

let board = []
app.use(express.static('./'));


app.get('/1', (req, res) => {
    console.log('yeesssss')
  CSVToJSON()
    .fromFile('list.csv')
    .then((users) => {
      // users is a JSON array
      // log the JSON array
        board = users;
        console.log(board);
        res.setHeader('Content-Type', 'application/json');
        res.json({ username: 'Flavio' });
    })
    .catch((err) => {
      // log error if any
      console.log(err);
    });
    
});

//restcountries.eu/rest/v2/name/{name}?fullText=true
app.listen(3000);
console.log('Your are now listening on port 3000 bithcheeees');