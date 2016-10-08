'use strict';

var createEmperorModel = function () {

	return function (text) {
		return {
			getEmperor : function () {
				return {
					text : text
				}
			}
		};
	}

}

module.exports = createEmperorModel;