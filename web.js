var express = require('express');

var buffer = new Buffer(100);

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
buffer = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
