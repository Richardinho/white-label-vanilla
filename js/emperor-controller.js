'use strict';
//  todo page manager

function emperorController(options, locals) {

	var appEl = locals[0]
	    ,loadingPanel = options.loadingPanel
	    ,dataService = options.dataService
	    ,delegate = options.delegate
	    ,handleInternalLink = options.handleInternalLink
	    ,bannerTemplate = options.bannerTemplate
	    ,emperorTemplate = options.emperorTemplate
	    ,html = options.html
	    ;

	return function handleRequest(queryString) {

		loadingPanel.addLoadingPanel();

		dataService.getEmperorData(queryString).then(function(model){
			appEl.innerHTML = '';
			var el = document.createElement('div');
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
	'loadingPanel'
	,'dataService'
	,'delegate'
	,'handleInternalLink'
	,'bannerTemplate'
	,'emperorTemplate'
	,'html'
	]

module.exports = emperorController;