var getTemplate = function () {

	return function (id) {
		return document.getElementById(id).textContent;
	};

};

getTemplate.inject = [];

module.exports = getTemplate;