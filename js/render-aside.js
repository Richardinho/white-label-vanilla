'use strict';

let renderAside = function (options) {

	var html = options.html;
	var delegate = options.delegate;
	var filters = options.filters;
	var asideTemplate = options.asideTemplate;

	return function (el, model) {

		html(el, asideTemplate(model.getRefinements()));

		delegate(el, {
			'change #simple-styling' : filters.createHandleSortByToggle(model),
			'change #dynasties' :      filters.createFilterByDynasty(model),
			'change #year-from' :      filters.createFilterByYearFrom(model),
			'change #year-to' :        filters.createFilterByYearTo(model)
		});

	}
}
renderAside.inject = ['html', 'delegate', 'filters', 'asideTemplate'];

module.exports = renderAside;