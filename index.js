const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, response) => {
  response.sendFile('main.html', { root: __dirname + '/public' });
});

app.get('/booking', (req, response) => {
  response.sendFile('booking.html', { root: __dirname + '/public' });
});

app.get('/database', (req, response) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("names").find({}).toArray(function(err, result) {
      if (err) throw err;
      response.json(result);
      db.close();
    });
  });
});

// app.get('/appointments', (req, response) =>{
//   response.sendFile('/images/thanos', {root: __dirname + '/public'});  
// });

app.listen(3000, function () {
  console.log("Listening...");
});

