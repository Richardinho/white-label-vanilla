const handleRequest = function(options) {
	const injector = options.injector;

	return function (controllerKey) {
		return function (queryString) {
			const controller = injector.get(controllerKey);
			controller.handleRequest(queryString);
		};
	};
};

handleRequest.inject = ['injector'];
module.exports = handleRequest;
