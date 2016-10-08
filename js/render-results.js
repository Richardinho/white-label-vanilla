'use strict';

var renderResults = function (options) {

	var html = options.html;
	var resultTemplate = options.resultTemplate;

	return function(el, results) {

		var frag = document.createDocumentFragment();
		var loadingPanel = document.createElement('div');
		loadingPanel.className = 'loading-panel';
		frag.appendChild(loadingPanel)

		frag = results.reduce(function (frag, resultData) {
			html(frag, resultTemplate(resultData));
			return frag;
		}, frag);

		el.appendChild(frag);
	}
}
renderResults.inject = ['html', 'resultTemplate'];

module.exports = renderResults;