'use strict';
//  todo page manager

function emperorController(options, locals) {

	const appEl = locals[0];
	const loadingPanel = options.loadingPanel;
	const dataService = options.dataService;
	const delegate = options.delegate;
	const handleInternalLink = options.handleInternalLink;
	const bannerTemplate = options.bannerTemplate;
	const emperorTemplate = options.emperorTemplate;
	const html = options.html;

	return function handleRequest(queryString) {

		loadingPanel.addLoadingPanel();

		dataService.getEmperorData(queryString).then(function(model){
			appEl.innerHTML = '';
			const el = document.createElement('div');
			delegate(el, {
				'click [data-internal-link]' : handleInternalLink
			});
			el.className = 'container';
			html(el, bannerTemplate({}));
			html(el, emperorTemplate(model.getEmperor()));
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
	'bannerTemplate',
	'emperorTemplate',
	'html',
	]

module.exports = emperorController;
