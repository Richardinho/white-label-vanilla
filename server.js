var express = require('express');

var app = express();
var ejs = require('ejs');
ejs.delimiter = '$';

var port = process.env.PORT || 5000;
var isDev = process.argv[2] && process.argv[2] === 'dev';
var apiUrl = isDev ? 'http://localhost:5000' : 'https://white-label-api.herokuapp.com';

app.set('view engine', 'ejs');

if (isDev) {
	port = 3000;
  app.use('/bundle.js', express.static('./dist/bundle.js'));
} else {
  app.use('/bundle.js', express.static('./dist/bundle.js'));
}
app.use('/main.css', express.static('./jspm_packages/npm/selection-box@0.1.1/build/css/main.css'));


var config = {
	title: 'develop environment' ,
	apiUrl : apiUrl,
	isDev : isDev
};

app.get('*', function (req, res) {
  res.render('index', config);
});

function bootstrap() {
	console.log('listening on:', port);
}

app.listen(port, bootstrap);
