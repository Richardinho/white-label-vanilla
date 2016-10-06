
'use strict';

var html = function () {


	return function (el, htmlString) {
		//  todo should also handle case where string represents more than single root element
		//  iterate through children and append each to node.
		var tempEl = document.createElement('div');
		tempEl.innerHTML = htmlString;
		el.appendChild(tempEl.firstElementChild);
	}


};
html.inject = [];

module.exports = html;