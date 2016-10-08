'use strict';

var handleInternalLink = function(options) {

	var router = options.router;

	return function (event) {
		event.preventDefault();
		var href = event.target.getAttribute('href');
		router.navigate(href);
	}

}

handleInternalLink.inject = ['router'];

module.exports = handleInternalLink;