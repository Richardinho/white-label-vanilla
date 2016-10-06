function homeController (options, locals) {
	var appEl = locals[0],
	    loadingPanel = options.loadingPanel,
      dataService = options.dataService,
      delegate = options.delegate,
      handleInternalLink = options.handleInternalLink,
      addSection = options.addSection,
      renderAside = options.renderAside,
      renderResults = options.renderResults,
      SelectionBox = options.SelectionBox;


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
			debugger;
			renderAside(asideEl, model);

			var mainEl = document.createElement('div');
			mainEl.className = 'content';

			addSection(el, 'banner-template', {});

			renderResults(mainEl, model.getResults());

			el.appendChild(asideEl);
			el.appendChild(mainEl);

			addSection(el, 'footer-template', {});

			appEl.appendChild(el);

			new SelectionBox('#simple-styling');
			new SelectionBox('#dynasties');
			loadingPanel.removeLoadingPanel();

		});
	}
}

homeController.inject = [
	'dataService',
	'delegate',
	'handleInternalLink',
	'addSection',
	'loadingPanel',
	'renderAside',
	'renderResults',
	'SelectionBox'];


module.exports = homeController;