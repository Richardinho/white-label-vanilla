'use strict';

var Filters = function(options) {
	this.router = options.router;
}

function createPath(model) {
	return '' + model.getQueryString();
}

Filters.prototype = {

	createHandleSortByToggle : function(model) {
		return function handleSortByToggle(event) {
			model.setSortBy(event.target.value);
			this.router.navigate(createPath(model));
		}.bind(this);
	},

	createFilterByDynasty : function (model) {
		return function filterByDynasty(event) {
			model.setFilterByDynasty(event.target.value);
			this.router.navigate(createPath(model));
		}.bind(this);
	},

	createFilterByYearFrom : function(model) {
		return function (event) {
			model.setYearFrom(event.target.value);
			this.router.navigate(createPath(model));
		}.bind(this);
	},

	createFilterByYearTo : function (model) {
		return function (event) {
			model.setYearTo(event.target.value);
			this.router.navigate(createPath(model));
		}.bind(this);
	}

};

Filters.inject = ['router'];


module.exports = Filters;

