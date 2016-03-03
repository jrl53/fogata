var express = require('express');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);

});

app.post('/parse', function (req, res) {
  console.log("You've got mail!", req);
  }
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});