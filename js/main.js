'use strict';

const Injector           = require('Diogenes');
const SelectionBox       = require('selection-box');
const Router             = require('./router');
const delegate           = require('./delegate');
const Bootstrap          = require('./bootstrap');
const HomeController     = require('./home-controller');
const emperorController  = require('./emperor-controller');
const createEmperorModel = require('./create-emperor-model');
const handleInternalLink = require('./handle-internal-link');
const html               = require('./html');
const LoadingPanel       = require('./loading-panel');
const DataService        = require('./data-service');
const renderAside        = require('./render-aside');
const renderResults      = require('./render-results');
const resultTemplate     = require('./templates/result');
const asideTemplate      = require('./templates/aside');
const footerTemplate     = require('./templates/footer');
const bannerTemplate     = require('./templates/banner');
const paginationTemplate = require('./templates/pagination');
const emperorTemplate    = require('./templates/emperor');
const handleRequest      = require('./handle-request');
const buildCriteriaFromQueryString = require('./build-criteria-from-query-string');
const buildQueryStringFromCriteria = require('./build-query-string-from-criteria');

const app = document.getElementById('app');
const injector = new Injector();

injector.register('router',             Router,             Injector.CACHE_INSTANCE);
injector.register('dataService',        DataService,        Injector.CACHE_INSTANCE);
injector.register('HomeController',     HomeController,     Injector.INSTANCE, [app]);
injector.register('emperorController',  emperorController,  Injector.FACTORY_FUNCTION, [app]);
injector.register('createEmperorModel', createEmperorModel, Injector.FACTORY_FUNCTION);
injector.register('handleInternalLink', handleInternalLink, Injector.FACTORY_FUNCTION);
injector.register('html',               html,               Injector.FACTORY_FUNCTION);
injector.register('loadingPanel',       LoadingPanel,       Injector.INSTANCE);
injector.register('delegate',           delegate,           Injector.VALUE);
injector.register('renderAside',        renderAside,        Injector.FACTORY_FUNCTION);
injector.register('renderResults',      renderResults,      Injector.FACTORY_FUNCTION);
injector.register('SelectionBox',       SelectionBox,       Injector.VALUE);
injector.register('bootstrap',          Bootstrap,          Injector.INSTANCE);
injector.register('resultTemplate',     resultTemplate,     Injector.VALUE);
injector.register('asideTemplate',      asideTemplate,      Injector.VALUE);
injector.register('footerTemplate',     footerTemplate,     Injector.VALUE);
injector.register('bannerTemplate',     bannerTemplate,     Injector.VALUE);
injector.register('paginationTemplate', paginationTemplate, Injector.VALUE);
injector.register('emperorTemplate',    emperorTemplate,    Injector.VALUE);
injector.register('handleRequest',      handleRequest,      Injector.FACTORY_FUNCTION);

injector.register('buildCriteriaFromQueryString',
  buildCriteriaFromQueryString,
  Injector.VALUE);

injector.register('buildQueryStringFromCriteria',
  buildQueryStringFromCriteria,
  Injector.VALUE);

injector.register('injector',           injector,           Injector.VALUE);

injector.start('bootstrap', function (bootstrap) {

	bootstrap.start();

});






























