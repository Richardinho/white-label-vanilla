let renderAside = function (options) {

	var getTemplate = options.getTemplate;
	var html = options.html;
	var TemplateEngine = options.TemplateEngine;
	var delegate = options.delegate;
	var filters = options.filters;

	return function (el, model) {

		var asideTemplate = getTemplate('aside-template');
		html(el, TemplateEngine(asideTemplate, model.getRefinements()));

		delegate(el, {
			'change #simple-styling' : filters.createHandleSortByToggle(model),
			'change #dynasties' :      filters.createFilterByDynasty(model),
			'change #year-from' :      filters.createFilterByYearFrom(model),
			'change #year-to' :        filters.createFilterByYearTo(model)
		});

	}
}
renderAside.inject = ['getTemplate', 'html', 'TemplateEngine', 'delegate', 'filters'];

module.exports = renderAside;