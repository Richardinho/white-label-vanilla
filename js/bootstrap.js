'use strict';

function Bootstrap(options) {

	this.router = options.router;
	this.router.addRoute('', options.handleRequest('HomeController'));
	//this.router.addRoute('emperor', options.handleRequest('emperorController'));

}

Bootstrap.prototype = {

	start : function () {

		this.router.start();

	}
};

Bootstrap.inject = ['router', 'emperorController', 'handleRequest'];

module.exports = Bootstrap;