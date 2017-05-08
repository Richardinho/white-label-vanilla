'use strict';

function HomeController (options, locals) {
	console.log('create new controller');
	this.appEl = locals[0];
	this.loadingPanel = options.loadingPanel;
	this.dataService = options.dataService;
	this.delegate = options.delegate;
	this.handleInternalLink = options.handleInternalLink;
	this.renderAside = options.renderAside;
	this.renderResults = options.renderResults;
	this.SelectionBox = options.SelectionBox;
	this.footerTemplate = options.footerTemplate;
	this.html = options.html;
	this.bannerTemplate = options.bannerTemplate;
}

HomeController.prototype = {

	handleRequest : function (queryString) {

		this.loadingPanel.addLoadingPanel();

		this.dataService.getData(queryString).then((model) => {

			var el = document.createElement('div');
			el.className = 'container';
			this.appEl.innerHTML = '';

			this.delegate(el, {
				'click [data-internal-link]' : this.handleInternalLink
			});

			var asideEl = document.createElement('div');
			asideEl.className = 'aside';
			this.renderAside(asideEl, model);

			var mainEl = document.createElement('div');
			mainEl.className = 'content';

			this.html(el, this.bannerTemplate({}));

			this.renderResults(mainEl, model.getResults());

			el.appendChild(asideEl);
			el.appendChild(mainEl);

			this.html(el, this.footerTemplate({}));

			this.appEl.appendChild(el);

			new this.SelectionBox('#simple-styling');
			new this.SelectionBox('#dynasties');

			this.loadingPanel.removeLoadingPanel();

		});
	}
};

HomeController.inject = [
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


module.exports = HomeController;