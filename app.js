var express = require('express');
var app = express();
const PORT = 8081;

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('pages/index');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
