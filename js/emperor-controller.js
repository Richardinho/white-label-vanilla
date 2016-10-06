
function emperorController(options, locals) {

	var appEl = locals[0],
	    loadingPanel = options.loadingPanel,
	    dataService = options.dataService,
	    delegate = options.delegate,
	    handleInternalLink = options.handleInternalLink,
	    addSection = options.addSection;

	return function handleRequest(queryString) {

		loadingPanel.addLoadingPanel();

		dataService.getEmperorData(queryString).then(function(model){
			appEl.innerHTML = '';
			var el = document.createElement('div');
			delegate(el, {
				'click [data-internal-link]' : handleInternalLink
			});
			el.className = 'container';
			addSection(el, 'banner-template', {});
			addSection(el, 'emperor-template', model.getEmperor());
			appEl.appendChild(el);
			loadingPanel.removeLoadingPanel();
		});
	};
}
emperorController.inject = [
	'loadingPanel',
	'dataService',
	'delegate',
	'handleInternalLink',
	'addSection'];

module.exports = emperorController;