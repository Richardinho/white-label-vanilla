/* */ 
var express = require('express');
var app = express();
app.use(express.static('.'));
app.listen(2345, function () {
	console.log('listening on port', 2345);
});