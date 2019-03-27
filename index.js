const express = require('express');
const bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/login', function(request, response){
  response.sendFile('login.html', {root: __dirname + '/public'});
});

app.get('/', (req, response) => {
  response.sendFile('main.html', { root: __dirname + '/public' });
});

app.get('/booking', (req, response) => {
  response.sendFile('booking.html', { root: __dirname + '/public' });
});

// displays json data
app.get('/database_read', (req, response) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("bookings");
    dbo.collection("bookingInfo").find({}).toArray(function (err, result) {
      if (err) throw err;
      response.json(result);
      db.close();
    });
  });
});

// updates the json database
app.post('/database_update', (req, response) => {
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("bookings");

    let insertData = {
      "firstName": req.body.firstName, 
      "lastName": req.body.lastName,
      "Date": req.body.Date,
      "Style": req.body.Style
    };
    dbo.collection("bookingInfo").insertOne(insertData, function (err, result) {
      if (err) throw err;
      console.log("Inserted one row");
      db.close();
    });
  });
});

app.listen(3000, function () {
  console.log("Listening...");
});

