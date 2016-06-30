var express = require('express');
var app = express();

const PORT = 8080;

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/html/form.html');
});

app.get('/process_get', function (request, response) {
    var total = 0;
    // TODO: Add code here.
    response.end(String(total));
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
