function DataService (options) {
	this.getQueryParams = options.getQueryParams;
	this.createEmperorModel = options.createEmperorModel;
}

var url = window.config.API_URL;

DataService.inject = ['getQueryParams', 'createEmperorModel'];

DataService.prototype = {

	getData : function (queryString) {
		var self = this;
		return fetch(url + '/api/emperors' + '?' + queryString).then(function (response) {
			return response.json().then(function(json)  {

				let queryParams= {};

	      if(queryString) {
	        queryParams = self.getQueryParams(queryString);
	      }
	      return {
					setSortBy : function (sortBy) {
						queryParams['sort-by'] = sortBy;
					},

					setYearFrom : function (yearFrom) {
						queryParams['year-from'] = yearFrom;
					},

					setYearTo : function (yearTo) {
						queryParams['year-to'] = yearTo;
					},

					setFilterByDynasty : function (dynasty) {
						queryParams['dynasty'] = dynasty;
					},

					getRefinements : function () {
						//  get refinements from query string
						//  Need to only return properties for existing params
						//  let server handle default results
						return json.criteria;
					},

					getResults : function () {
						return json.results;
					},

					getQueryString : function () {
						return Object.keys(queryParams).reduce((memo, key, index) => {
							var amper = (index > 0) ? '&' : '';
							return memo + amper + key + '=' + queryParams[key];
						}, '?');
					},

					getPagination : function () {}

					};
			});
		});
	},

	getEmperorData : function (queryString) {
		var self = this;
		return fetch(url + '/api/emperor' + '?' + queryString).then(function (response) {
			return response.text().then(function (text) {
				return self.createEmperorModel(text);
			});
		});
	}


};

module.exports = DataService;

