'use strict';

let renderAside = function (options) {

	var html = options.html;
	var delegate = options.delegate;
	var asideTemplate = options.asideTemplate;
  const buildQueryStringFromCriteria = options.buildQueryStringFromCriteria;
  const router = options.router;

  const handleFilterChange = (key, criteria) => event => {
    const value = event.target.value;
    const newCriteria = { ...criteria, [key]: value };
    const queryString = buildQueryStringFromCriteria(newCriteria);
		router.navigate(queryString);
  };

	return function (el, criteria) {

		html(el, asideTemplate(criteria));

		delegate(el, {
      'change #simple-styling' : handleFilterChange('sortBy', criteria), 
      'change #dynasties' : handleFilterChange('dynasty', criteria),
      'change #year-from' : handleFilterChange('yearFrom', criteria),
      'change #year-to' : handleFilterChange('yearTo', criteria), 
		});

	}
}

renderAside.inject = [
  'html',
  'delegate',
  'asideTemplate',
  'buildQueryStringFromCriteria',
  'router',
];

module.exports = renderAside;
