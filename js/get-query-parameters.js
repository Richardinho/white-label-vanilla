'use strict';

var getQueryParams = function() {

	return function (queryString) {
		//  http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
		var queryParams = {};

		queryString.replace(
			new RegExp("([^?=&]+)(=([^&]*))?", "g"),
			function($0, $1, $2, $3) {
				queryParams[$1] = $3;
			}
		);
		return queryParams;
	}
}

module.exports = getQueryParams;