var express = require('express');

var app = express();

var port = process.env.PORT || 3000;




app.post('/parse', function (req, res) {
  console.log("You've got mail!", req);

});

var server = app.listen(port, function() {
  console.log('Listening on port', port);
});

console.log("started");