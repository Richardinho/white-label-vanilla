const renderResults = function (options) {

	const html = options.html;
	const resultTemplate = options.resultTemplate;
  const paginationTemplate = options.paginationTemplate;
  const buildQueryStringFromCriteria = options.buildQueryStringFromCriteria;

	return function(el, results, meta, criteria) {
		let frag = document.createDocumentFragment();
		const loadingPanel = document.createElement('div');

		loadingPanel.className = 'loading-panel';
		frag.appendChild(loadingPanel)

		frag = results.reduce(function (frag, resultData) {
			html(frag, resultTemplate(resultData));
			return frag;
		}, frag);

		el.appendChild(frag);

    function buildURL(offset) {
      const newCriteria = {...criteria, offset: offset }; 
      return '/' + buildQueryStringFromCriteria(newCriteria);
    }

    const numberOfLinks = Math.ceil(meta.totalResults / meta.limit);

    function calculateActive(index, offset) {
      const currentOffset = index * meta.limit;
      const result = (currentOffset === parseInt(offset, 10) ? 'active' : '');
      console.log(index, offset, result);
      return result;
    }

    console.log('calculate', calculateActive(1, criteria.offset));

    const links = [...Array(numberOfLinks)].map((item, index) => ({
      label: index + 1,
      href: buildURL(index * meta.limit), 
      active: 'pagination-link ' + calculateActive(index, criteria.offset),
    }))
console.log(links);
    html(el, paginationTemplate({
      links, 
    }));
	}
}
renderResults.inject = [
  'html',
  'resultTemplate',
  'paginationTemplate',
  'buildQueryStringFromCriteria',
];

module.exports = renderResults;
