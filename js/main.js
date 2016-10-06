'use strict';



let Injector           = require('Diogenes');
let SelectionBox       = require('selection-box');
let Router             = require('js/router.js');
let delegate           = require('js/delegate.js');
let Bootstrap          = require('js/bootstrap.js');
let homeController     = require('js/home-controller.js');
let emperorController  = require('js/emperor-controller.js');
let getQueryParams     = require('js/get-query-parameters.js');
let createEmperorModel = require('js/create-emperor-model.js');
let handleInternalLink = require('js/handle-internal-link.js');
let addSection         = require('js/add-section.js');
let html               = require('js/html.js');
let getTemplate        = require('js/get-template.js');
let TemplateEngine     = require('js/template-engine.js');
let LoadingPanel       = require('js/loading-panel.js');
let Filters            = require('js/filters.js');
let DataService        = require('js/data-service.js');
let renderAside        = require('js/render-aside.js');
let renderResults      = require('js/render-results.js');

let app = document.getElementById('app');
let injector = new Injector();

injector.register('router',             Router,             Injector.CACHE_INSTANCE);
injector.register('dataService',        DataService,        Injector.CACHE_INSTANCE);
injector.register('homeController',     homeController,     Injector.FACTORY_FUNCTION, [app]);
injector.register('emperorController',  emperorController,  Injector.FACTORY_FUNCTION, [app]);
injector.register('getQueryParams',     getQueryParams,     Injector.FACTORY_FUNCTION);
injector.register('createEmperorModel', createEmperorModel, Injector.FACTORY_FUNCTION);
injector.register('handleInternalLink', handleInternalLink, Injector.FACTORY_FUNCTION);
injector.register('addSection',         addSection,         Injector.FACTORY_FUNCTION);
injector.register('getTemplate',        getTemplate,        Injector.FACTORY_FUNCTION);
injector.register('html',               html,               Injector.FACTORY_FUNCTION);
injector.register('TemplateEngine',     TemplateEngine,     Injector.VALUE);
injector.register('filters',            Filters,            Injector.INSTANCE);
injector.register('loadingPanel',       LoadingPanel,       Injector.INSTANCE);
injector.register('delegate',           delegate,           Injector.VALUE);
injector.register('renderAside',        renderAside,        Injector.FACTORY_FUNCTION);
injector.register('renderResults',      renderResults,      Injector.FACTORY_FUNCTION);
injector.register('SelectionBox',       SelectionBox,       Injector.VALUE);
injector.register('bootstrap',          Bootstrap,          Injector.INSTANCE);


injector.start('bootstrap', function (bootstrap) {

	bootstrap.start();

});






























