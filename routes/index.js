
const express = require('express');

const router = express.Router();

var path = require('path')

var app = express();

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public'))


app.use(express.static('/public', express.static('public')));

router.get('/', (req, response) => {
  response.sendfile('routes/booking.html');
});


module.exports = router;
