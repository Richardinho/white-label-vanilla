'use strict';

var templateEngine = require('./js/template-engine.js');
var fs = require('fs');
var replaceExt = require('replace-ext');

var getTemplateFunction = templateEngine.getTemplateFunction;

var TEMPLATE_FOLDER = __dirname + '/templates/';
var COMPILED_TEMPLATE_FOLDER = __dirname + '/js/templates/';


fs.readdir(TEMPLATE_FOLDER, function (err, paths) {

	if(err) {
		return console.log(err);
	}
	Promise.all(paths.map(compileTemplate)).then(function () {
		console.log('all files compiled');
	}, function (err) {
		console.log('error occurred', err);
	});
});

function compileTemplate(fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(TEMPLATE_FOLDER + fileName, function (err, data) {

			if (err) {
				console.log(err);
			  reject(err);
			}
			var template = data.toString();
			var templateFunction = getTemplateFunction(template);
			var script = createScriptFromFunction(templateFunction);

			fs.writeFile(COMPILED_TEMPLATE_FOLDER + replaceExt(fileName, '.js'), script, function (err) {
				if (err) {
					console.log('error writing', err);
					reject(err);
				}
				resolve('compiled', fileName);
			});
		});
	});
};


function createScriptFromFunction(func) {
	return 'module.exports = function (data) { return (' + func.toString() +  ').apply(data); };';
}






