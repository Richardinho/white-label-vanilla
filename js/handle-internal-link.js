const handleInternalLink = function(options) {
	const router = options.router;

	return function (event) {
		event.preventDefault();
		const href = event.target.getAttribute('href');
		router.navigate(href);
	}
}

handleInternalLink.inject = ['router'];

module.exports = handleInternalLink;
