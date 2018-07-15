var express = require('express');
var ssr = require('./js/ssr.js');

var app = express();

var port = process.env.PORT || 5000;
var isDev = process.argv[2] && process.argv[2] === 'dev';
var apiUrl = isDev ? 'http://localhost:5000' : 'https://white-label-api.herokuapp.com';
var ssr = require('./js/ssr.js');


if(isDev) {
	port = 4000;
	app.use('/system.js', express.static('./jspm_packages/system.js'));
	app.use('/jspm_packages', express.static('./jspm_packages'));
	app.use('/js', express.static('js'));
	app.use('/config.js', express.static('./config.js'));
} else {
	app.use('/app.js', express.static('./app.js'));
}
app.use('/main.css', express.static('./jspm_packages/npm/selection-box@0.1.1/build/css/main.css'));



app.get('*', function (req, res) {
  var host = 'http://localhost:3000'; 

  ssr(host + req.url).then(response => {
    res.send(response);
  });
});

function bootstrap() {
	console.log('listening on:', port);
}

app.listen(port, bootstrap);
