var renderResults = function (options) {

	var getTemplate = options.getTemplate;
	var html = options.html;
	var TemplateEngine = options.TemplateEngine;

	return function(el, results) {
		var resultTemplate = getTemplate('result-template');
		var frag = document.createDocumentFragment();
		var loadingPanel = document.createElement('div');
		loadingPanel.className = 'loading-panel';
		frag.appendChild(loadingPanel)
		frag = results.reduce(function (frag, resultData) {
			html(frag, TemplateEngine(resultTemplate, resultData));
			return frag;
		}, frag);
		el.appendChild(frag);
	}
}
renderResults.inject = ['getTemplate', 'html', 'TemplateEngine'];

module.exports = renderResults;