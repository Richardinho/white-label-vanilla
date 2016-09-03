var express = require('express');

var app = express();
var ejs = require('ejs');
ejs.delimiter = '$';

var port = process.env.PORT || 5000;
var isDev = process.argv[2] && process.argv[2] === 'dev';
var apiUrl = isDev ? 'http://localhost:4000' : 'https://white-label-api.herokuapp.com';

app.set('view engine', 'ejs');

app.use('/system.js', express.static('./node_modules/systemjs/dist/system.js'));
app.use('/js', express.static('js'));
app.use('/selection-box', express.static('./bower_components/selection-box/build'));


var config = {
	title: 'develop environment' ,
	apiUrl : apiUrl
};

app.get('/', function (req, res) {
  res.render('index', config);
});

function bootstrap() {
	console.log('listening on:', port);
}

app.listen(port, bootstrap);