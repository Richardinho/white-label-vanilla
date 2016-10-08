'use strict';

function homeController (options, locals) {
	var appEl = locals[0]
	    ,loadingPanel = options.loadingPanel
	    ,dataService = options.dataService
	    ,delegate = options.delegate
	    ,handleInternalLink = options.handleInternalLink
	    ,renderAside = options.renderAside
	    ,renderResults = options.renderResults
	    ,SelectionBox = options.SelectionBox
	    ,footerTemplate = options.footerTemplate
	    ,html = options.html
	    ,bannerTemplate = options.bannerTemplate
	    ;


	return function handleRequest(queryString) {

		loadingPanel.addLoadingPanel();

		dataService.getData(queryString).then(function (model) {

			var el = document.createElement('div');
			el.className = 'container';
			appEl.innerHTML = '';

			delegate(el, {
				'click [data-internal-link]' : handleInternalLink
			});

			var asideEl = document.createElement('div');
			asideEl.className = 'aside';
			renderAside(asideEl, model);

			var mainEl = document.createElement('div');
			mainEl.className = 'content';

			html(el, bannerTemplate({}));

			renderResults(mainEl, model.getResults());

			el.appendChild(asideEl);
			el.appendChild(mainEl);

			html(el, footerTemplate({}));

			appEl.appendChild(el);

			new SelectionBox('#simple-styling');
			new SelectionBox('#dynasties');

			loadingPanel.removeLoadingPanel();

		});
	}
}

homeController.inject = [
	'dataService'
	,'delegate'
	,'handleInternalLink'
	,'loadingPanel'
	,'renderAside'
	,'renderResults'
	,'SelectionBox'
	,'footerTemplate'
	,'bannerTemplate'
	,'html'
	];


module.exports = homeController;