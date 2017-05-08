
var handleRequest = function(options) {
	var injector = options.injector;
	return function (controllerKey) {
		return function (queryString) {
			var controller = injector.get(controllerKey);
			controller.handleRequest(queryString);
		}
	}
}
handleRequest.inject = ['injector'];
module.exports = handleRequest;