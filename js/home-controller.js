'use strict';

function buildPaginationData(offset, limit, totalResults) {
  const pages = Math.ceil(totalResults / limit);

  const links = [];

  for (let i = 0; i < pages; i++) {
    links.push({
      href: i,
      label: i + 1,
    });
  }

  return {
    links: links,
  };
}

function HomeController (options, locals) {
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
  this.paginationTemplate = options.paginationTemplate;
	this.bannerTemplate = options.bannerTemplate;
  this.buildCriteriaFromQueryString = options.buildCriteriaFromQueryString;
  this.buildQueryStringFromCriteria = options.buildQueryStringFromCriteria;
}

HomeController.prototype = {

	handleRequest : function (queryString) {
    const criteria = this.buildCriteriaFromQueryString(queryString);

		this.loadingPanel.addLoadingPanel();

    this.appEl.innerHTML = '';

    const el = document.createElement('div');
    const asideEl = document.createElement('div');
    const mainEl = document.createElement('div');

    this.html(el, this.bannerTemplate({}));
    this.renderAside(asideEl, criteria);

    el.className = 'container';
    asideEl.className = 'aside';
    mainEl.className = 'content';

    el.appendChild(asideEl);
    el.appendChild(mainEl);

    this.html(el, this.footerTemplate({}));

    this.appEl.appendChild(el);

    this.dataService
      .getData(this.buildQueryStringFromCriteria(criteria))
      .then(response => {
        this.delegate(el, {
          'click [data-internal-link]' : this.handleInternalLink
        });

        this.renderResults(mainEl, response.results, response.meta, criteria);

        new this.SelectionBox('#simple-styling');
        new this.SelectionBox('#dynasties');

        this.loadingPanel.removeLoadingPanel();
      });
  }
};

HomeController.inject = [
	'dataService',
	'delegate',
	'handleInternalLink',
	'loadingPanel',
	'renderAside',
	'renderResults',
	'SelectionBox',
	'footerTemplate',
	'bannerTemplate',
  'paginationTemplate',
	'html',
  'buildCriteriaFromQueryString',
  'buildQueryStringFromCriteria',
	];


module.exports = HomeController;
