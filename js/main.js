'use strict';

let Injector           = require('Diogenes');
let SelectionBox       = require('selection-box');
let Router             = require('./router');
let delegate           = require('./delegate');
let Bootstrap          = require('./bootstrap');
let HomeController     = require('./home-controller');
let emperorController  = require('./emperor-controller');
let getQueryParams     = require('./get-query-parameters');
let createEmperorModel = require('./create-emperor-model');
let handleInternalLink = require('./handle-internal-link');
let html               = require('./html');
let LoadingPanel       = require('./loading-panel');
let Filters            = require('./filters');
let DataService        = require('./data-service');
let renderAside        = require('./render-aside');
let renderResults      = require('./render-results');
let resultTemplate     = require('./templates/result');
let asideTemplate      = require('./templates/aside');
let footerTemplate     = require('./templates/footer');
let bannerTemplate     = require('./templates/banner');
let paginationTemplate = require('./templates/pagination');
let emperorTemplate    = require('./templates/emperor');
let handleRequest      = require('./handle-request');

let app = document.getElementById('app');
let injector = new Injector();

injector.register('router',             Router,             Injector.CACHE_INSTANCE);
injector.register('dataService',        DataService,        Injector.CACHE_INSTANCE);
injector.register('HomeController',     HomeController,     Injector.INSTANCE, [app]);
injector.register('emperorController',  emperorController,  Injector.FACTORY_FUNCTION, [app]);
injector.register('getQueryParams',     getQueryParams,     Injector.FACTORY_FUNCTION);
injector.register('createEmperorModel', createEmperorModel, Injector.FACTORY_FUNCTION);
injector.register('handleInternalLink', handleInternalLink, Injector.FACTORY_FUNCTION);
injector.register('html',               html,               Injector.FACTORY_FUNCTION);
injector.register('filters',            Filters,            Injector.INSTANCE);
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
injector.register('injector',           injector,           Injector.VALUE);

injector.start('bootstrap', function (bootstrap) {

	bootstrap.start();

});






























