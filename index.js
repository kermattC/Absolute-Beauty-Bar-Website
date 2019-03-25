const express = require('express');
const router = express.Router();
var path = require('path')
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, response) => {
  response.sendFile('main.html', { root: __dirname  + '/public'});
});

app.get('/booking', (req, response) => {
  response.sendFile('booking.html', { root: __dirname  + '/public'});
});

app.listen(3000, function(){
  console.log("Listening...");
});

