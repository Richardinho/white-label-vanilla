'use strict';

function Bootstrap(options) {

	this.router = options.router;
	this.router.addRoute('', options.homeController);
	this.router.addRoute('emperor', options.emperorController);

}

Bootstrap.prototype = {

	start : function () {

		this.router.start();

	}
};

Bootstrap.inject = ['router', 'homeController', 'emperorController'];

module.exports = Bootstrap;