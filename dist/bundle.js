/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/bootstrap.js":
/*!*************************!*\
  !*** ./js/bootstrap.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Bootstrap(options) {\n\n\tthis.router = options.router;\n\tthis.router.addRoute('', options.handleRequest('HomeController'));\n\t//this.router.addRoute('emperor', options.handleRequest('emperorController'));\n\n}\n\nBootstrap.prototype = {\n\n\tstart : function () {\n\n\t\tthis.router.start();\n\n\t}\n};\n\nBootstrap.inject = ['router', 'emperorController', 'handleRequest'];\n\nmodule.exports = Bootstrap;\n\n//# sourceURL=webpack:///./js/bootstrap.js?");

/***/ }),

/***/ "./js/create-emperor-model.js":
/*!************************************!*\
  !*** ./js/create-emperor-model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createEmperorModel = function () {\n\n\treturn function (text) {\n\t\treturn {\n\t\t\tgetEmperor : function () {\n\t\t\t\treturn {\n\t\t\t\t\ttext : text\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t}\n\n}\n\nmodule.exports = createEmperorModel;\n\n//# sourceURL=webpack:///./js/create-emperor-model.js?");

/***/ }),

/***/ "./js/data-service.js":
/*!****************************!*\
  !*** ./js/data-service.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction DataService (options) {\n\tthis.getQueryParams = options.getQueryParams;\n\tthis.createEmperorModel = options.createEmperorModel;\n}\n\nvar url = window.config.API_URL;\n\nDataService.inject = ['getQueryParams', 'createEmperorModel'];\n\nDataService.prototype = {\n\n\tgetData : function (queryString) {\n\t\tvar self = this;\n\t\treturn fetch(url + '/api/emperors' + '?' + queryString).then(function (response) {\n\t\t\treturn response.json().then(function(json)  {\n\n\t\t\t\tlet queryParams= {};\n\n\t      if(queryString) {\n\t        queryParams = self.getQueryParams(queryString);\n\t      }\n\t      return {\n\t\t\t\t\tsetSortBy : function (sortBy) {\n\t\t\t\t\t\tqueryParams['sort-by'] = sortBy;\n\t\t\t\t\t},\n\n\t\t\t\t\tsetYearFrom : function (yearFrom) {\n\t\t\t\t\t\tqueryParams['year-from'] = yearFrom;\n\t\t\t\t\t},\n\n\t\t\t\t\tsetYearTo : function (yearTo) {\n\t\t\t\t\t\tqueryParams['year-to'] = yearTo;\n\t\t\t\t\t},\n\n\t\t\t\t\tsetFilterByDynasty : function (dynasty) {\n\t\t\t\t\t\tqueryParams['dynasty'] = dynasty;\n\t\t\t\t\t},\n\n\t\t\t\t\tgetRefinements : function () {\n\t\t\t\t\t\t//  get refinements from query string\n\t\t\t\t\t\t//  Need to only return properties for existing params\n\t\t\t\t\t\t//  let server handle default results\n\t\t\t\t\t\treturn json.criteria;\n\t\t\t\t\t},\n\n\t\t\t\t\tgetResults : function () {\n\t\t\t\t\t\treturn json.results;\n\t\t\t\t\t},\n\n\t\t\t\t\tgetQueryString : function () {\n\t\t\t\t\t\treturn Object.keys(queryParams).reduce((memo, key, index) => {\n\t\t\t\t\t\t\tvar amper = (index > 0) ? '&' : '';\n\t\t\t\t\t\t\treturn memo + amper + key + '=' + queryParams[key];\n\t\t\t\t\t\t}, '?');\n\t\t\t\t\t},\n\n\t\t\t\t\tgetPagination : function () {}\n\n\t\t\t\t\t};\n\t\t\t});\n\t\t});\n\t},\n\n\tgetEmperorData : function (queryString) {\n\t\tvar self = this;\n\t\treturn fetch(url + '/api/emperor' + '?' + queryString).then(function (response) {\n\t\t\treturn response.text().then(function (text) {\n\t\t\t\treturn self.createEmperorModel(text);\n\t\t\t});\n\t\t});\n\t}\n\n\n};\n\nmodule.exports = DataService;\n\n\n\n//# sourceURL=webpack:///./js/data-service.js?");

/***/ }),

/***/ "./js/delegate.js":
/*!************************!*\
  !*** ./js/delegate.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n'use strict';\n\nfunction delegate(el, config) {\n\n\tObject.keys(config).forEach(function (key) {\n\t\tvar listener = config[key];\n\t\tvar event;\n\t\tvar selector;\n\n\t\tif(key.search(/\\s/) == -1) {\n\t\t\tevent = key;\n\t\t} else {\n\t\t\tvar eventSelector = splitEventFromSelector(key);\n\t\t\tevent = eventSelector[0];\n\t\t\tselector = eventSelector[1];\n\t\t}\n\n\t\tel.addEventListener(event, function (event) {\n\t\t\tif(!selector) {\n\t\t\t\tlistener(event);\n\t\t\t} else {\n\t\t\t\tvar target = event.target;\n\t\t\t\twhile(target !== el) {\n\t\t\t\t\tif (target.matches(selector)) {\n\t\t\t\t\t\tlistener(convertEvent(event, el, target))\n\t\t\t\t\t}\n\t\t\t\t\ttarget = target.parentNode\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t});\n}\n\nfunction splitEventFromSelector(srcString) {\n\treturn srcString.match(/^(\\S+)\\s+(\\S.*)?$/).slice(1);\n}\n\nfunction convertEvent(event, currentTarget, target){\n\treturn Object.assign({}, event, {\n\t\tcurrentTarget : currentTarget,\n\t\ttarget : target,\n\t\tpreventDefault : event.preventDefault.bind(event),\n\t\tstopPropagation : event.stopPropagation.bind(event)\n\t});\n}\n\nmodule.exports = delegate;\n\n//# sourceURL=webpack:///./js/delegate.js?");

/***/ }),

/***/ "./js/emperor-controller.js":
/*!**********************************!*\
  !*** ./js/emperor-controller.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//  todo page manager\n\nfunction emperorController(options, locals) {\n\n\tvar appEl = locals[0]\n\t    ,loadingPanel = options.loadingPanel\n\t    ,dataService = options.dataService\n\t    ,delegate = options.delegate\n\t    ,handleInternalLink = options.handleInternalLink\n\t    ,bannerTemplate = options.bannerTemplate\n\t    ,emperorTemplate = options.emperorTemplate\n\t    ,html = options.html\n\t    ;\n\n\treturn function handleRequest(queryString) {\n\n\t\tloadingPanel.addLoadingPanel();\n\n\t\tdataService.getEmperorData(queryString).then(function(model){\n\t\t\tappEl.innerHTML = '';\n\t\t\tvar el = document.createElement('div');\n\t\t\tdelegate(el, {\n\t\t\t\t'click [data-internal-link]' : handleInternalLink\n\t\t\t});\n\t\t\tel.className = 'container';\n\t\t\thtml(el, bannerTemplate({}));\n\t\t\thtml(el, emperorTemplate(model.getEmperor()));\n\t\t\tappEl.appendChild(el);\n\t\t\tloadingPanel.removeLoadingPanel();\n\t\t});\n\t};\n}\nemperorController.inject = [\n\t'loadingPanel'\n\t,'dataService'\n\t,'delegate'\n\t,'handleInternalLink'\n\t,'bannerTemplate'\n\t,'emperorTemplate'\n\t,'html'\n\t]\n\nmodule.exports = emperorController;\n\n//# sourceURL=webpack:///./js/emperor-controller.js?");

/***/ }),

/***/ "./js/filters.js":
/*!***********************!*\
  !*** ./js/filters.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Filters = function(options) {\n\tthis.router = options.router;\n}\n\nfunction createPath(model) {\n\treturn '' + model.getQueryString();\n}\n\nFilters.prototype = {\n\n\tcreateHandleSortByToggle : function(model) {\n\t\treturn function handleSortByToggle(event) {\n\t\t\tmodel.setSortBy(event.target.value);\n\t\t\tthis.router.navigate(createPath(model));\n\t\t}.bind(this);\n\t},\n\n\tcreateFilterByDynasty : function (model) {\n\t\treturn function filterByDynasty(event) {\n\t\t\tmodel.setFilterByDynasty(event.target.value);\n\t\t\tthis.router.navigate(createPath(model));\n\t\t}.bind(this);\n\t},\n\n\tcreateFilterByYearFrom : function(model) {\n\t\treturn function (event) {\n\t\t\tmodel.setYearFrom(event.target.value);\n\t\t\tthis.router.navigate(createPath(model));\n\t\t}.bind(this);\n\t},\n\n\tcreateFilterByYearTo : function (model) {\n\t\treturn function (event) {\n\t\t\tmodel.setYearTo(event.target.value);\n\t\t\tthis.router.navigate(createPath(model));\n\t\t}.bind(this);\n\t}\n\n};\n\nFilters.inject = ['router'];\n\n\nmodule.exports = Filters;\n\n\n\n//# sourceURL=webpack:///./js/filters.js?");

/***/ }),

/***/ "./js/get-query-parameters.js":
/*!************************************!*\
  !*** ./js/get-query-parameters.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getQueryParams = function() {\n\n\treturn function (queryString) {\n\t\t//  http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/\n\t\tvar queryParams = {};\n\n\t\tqueryString.replace(\n\t\t\tnew RegExp(\"([^?=&]+)(=([^&]*))?\", \"g\"),\n\t\t\tfunction($0, $1, $2, $3) {\n\t\t\t\tqueryParams[$1] = $3;\n\t\t\t}\n\t\t);\n\t\treturn queryParams;\n\t}\n}\n\nmodule.exports = getQueryParams;\n\n//# sourceURL=webpack:///./js/get-query-parameters.js?");

/***/ }),

/***/ "./js/handle-internal-link.js":
/*!************************************!*\
  !*** ./js/handle-internal-link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar handleInternalLink = function(options) {\n\n\tvar router = options.router;\n\n\treturn function (event) {\n\t\tevent.preventDefault();\n\t\tvar href = event.target.getAttribute('href');\n\t\trouter.navigate(href);\n\t}\n\n}\n\nhandleInternalLink.inject = ['router'];\n\nmodule.exports = handleInternalLink;\n\n//# sourceURL=webpack:///./js/handle-internal-link.js?");

/***/ }),

/***/ "./js/handle-request.js":
/*!******************************!*\
  !*** ./js/handle-request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nvar handleRequest = function(options) {\n\tvar injector = options.injector;\n\treturn function (controllerKey) {\n\t\treturn function (queryString) {\n\t\t\tvar controller = injector.get(controllerKey);\n\t\t\tcontroller.handleRequest(queryString);\n\t\t}\n\t}\n}\nhandleRequest.inject = ['injector'];\nmodule.exports = handleRequest;\n\n//# sourceURL=webpack:///./js/handle-request.js?");

/***/ }),

/***/ "./js/home-controller.js":
/*!*******************************!*\
  !*** ./js/home-controller.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction HomeController (options, locals) {\n\tconsole.log('create new controller');\n\tthis.appEl = locals[0];\n\tthis.loadingPanel = options.loadingPanel;\n\tthis.dataService = options.dataService;\n\tthis.delegate = options.delegate;\n\tthis.handleInternalLink = options.handleInternalLink;\n\tthis.renderAside = options.renderAside;\n\tthis.renderResults = options.renderResults;\n\tthis.SelectionBox = options.SelectionBox;\n\tthis.footerTemplate = options.footerTemplate;\n\tthis.html = options.html;\n  this.paginationTemplate = options.paginationTemplate;\n\tthis.bannerTemplate = options.bannerTemplate;\n}\n\nHomeController.prototype = {\n\n\thandleRequest : function (queryString) {\n\n\t\tthis.loadingPanel.addLoadingPanel();\n\n\t\tthis.dataService.getData(queryString).then((model) => {\n\n\t\t\tvar el = document.createElement('div');\n\t\t\tel.className = 'container';\n\t\t\tthis.appEl.innerHTML = '';\n\n      //  this can be abstracted into a superclass\n\t\t\tthis.delegate(el, {\n\t\t\t\t'click [data-internal-link]' : this.handleInternalLink\n\t\t\t});\n\n\t\t\tvar asideEl = document.createElement('div');\n\t\t\tasideEl.className = 'aside';\n\t\t\tthis.renderAside(asideEl, model);\n\t\t\tel.appendChild(asideEl);\n\n\t\t\tvar mainEl = document.createElement('div');\n\t\t\tmainEl.className = 'content';\n\n\t\t\tthis.html(el, this.bannerTemplate({}));\n\n\t\t\tthis.renderResults(mainEl, model.getResults());\n\n\t\t\tel.appendChild(mainEl);\n\n      this.html(el, this.paginationTemplate({\n        links: [\n          { href: '', label: 1, },  \n          { href: '', label: 2, },  \n          { href: '', label: 3, },  \n          { href: '', label: 4, },  \n        ] \n      }));\n\n\t\t\tthis.html(el, this.footerTemplate({}));\n\n\t\t\tthis.appEl.appendChild(el);\n\n\t\t\tnew this.SelectionBox('#simple-styling');\n\t\t\tnew this.SelectionBox('#dynasties');\n\n\t\t\tthis.loadingPanel.removeLoadingPanel();\n\n\t\t});\n\t}\n};\n\nHomeController.inject = [\n\t'dataService'\n\t,'delegate'\n\t,'handleInternalLink'\n\t,'loadingPanel'\n\t,'renderAside'\n\t,'renderResults'\n\t,'SelectionBox'\n\t,'footerTemplate'\n\t,'bannerTemplate'\n  ,'paginationTemplate'\n\t,'html'\n\t];\n\n\nmodule.exports = HomeController;\n\n\n//# sourceURL=webpack:///./js/home-controller.js?");

/***/ }),

/***/ "./js/html.js":
/*!********************!*\
  !*** ./js/html.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\nvar html = function () {\n\n\n\treturn function (el, htmlString) {\n\t\t//  todo should also handle case where string represents more than single root element\n\t\t//  iterate through children and append each to node.\n\t\tvar tempEl = document.createElement('div');\n\t\ttempEl.innerHTML = htmlString;\n\t\tel.appendChild(tempEl.firstElementChild);\n\t}\n\n\n};\nhtml.inject = [];\n\nmodule.exports = html;\n\n//# sourceURL=webpack:///./js/html.js?");

/***/ }),

/***/ "./js/loading-panel.js":
/*!*****************************!*\
  !*** ./js/loading-panel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar LoadingPanel = function() {}\n\n\nLoadingPanel.prototype = {\n\n\n\t//  no need to remove as will be wiped out when page is re-rendered\n\taddLoadingPanel : function () {\n\t\tdocument.body.classList.add('loading');\n\t},\n\n\tremoveLoadingPanel : function () {\n\t\tdocument.body.classList.remove('loading');\n\t}\n\n};\n\nLoadingPanel.inject = [];\n\nmodule.exports = LoadingPanel;\n\n//# sourceURL=webpack:///./js/loading-panel.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet Injector           = __webpack_require__(/*! Diogenes */ \"./node_modules/Diogenes/lib/injector.js\");\nlet SelectionBox       = __webpack_require__(/*! selection-box */ \"./node_modules/selection-box/build/selection-box.js\");\nlet Router             = __webpack_require__(/*! ./router */ \"./js/router.js\");\nlet delegate           = __webpack_require__(/*! ./delegate */ \"./js/delegate.js\");\nlet Bootstrap          = __webpack_require__(/*! ./bootstrap */ \"./js/bootstrap.js\");\nlet HomeController     = __webpack_require__(/*! ./home-controller */ \"./js/home-controller.js\");\nlet emperorController  = __webpack_require__(/*! ./emperor-controller */ \"./js/emperor-controller.js\");\nlet getQueryParams     = __webpack_require__(/*! ./get-query-parameters */ \"./js/get-query-parameters.js\");\nlet createEmperorModel = __webpack_require__(/*! ./create-emperor-model */ \"./js/create-emperor-model.js\");\nlet handleInternalLink = __webpack_require__(/*! ./handle-internal-link */ \"./js/handle-internal-link.js\");\nlet html               = __webpack_require__(/*! ./html */ \"./js/html.js\");\nlet LoadingPanel       = __webpack_require__(/*! ./loading-panel */ \"./js/loading-panel.js\");\nlet Filters            = __webpack_require__(/*! ./filters */ \"./js/filters.js\");\nlet DataService        = __webpack_require__(/*! ./data-service */ \"./js/data-service.js\");\nlet renderAside        = __webpack_require__(/*! ./render-aside */ \"./js/render-aside.js\");\nlet renderResults      = __webpack_require__(/*! ./render-results */ \"./js/render-results.js\");\nlet resultTemplate     = __webpack_require__(/*! ./templates/result */ \"./js/templates/result.js\");\nlet asideTemplate      = __webpack_require__(/*! ./templates/aside */ \"./js/templates/aside.js\");\nlet footerTemplate     = __webpack_require__(/*! ./templates/footer */ \"./js/templates/footer.js\");\nlet bannerTemplate     = __webpack_require__(/*! ./templates/banner */ \"./js/templates/banner.js\");\nlet paginationTemplate = __webpack_require__(/*! ./templates/pagination */ \"./js/templates/pagination.js\");\nlet emperorTemplate    = __webpack_require__(/*! ./templates/emperor */ \"./js/templates/emperor.js\");\nlet handleRequest      = __webpack_require__(/*! ./handle-request */ \"./js/handle-request.js\");\n\nlet app = document.getElementById('app');\nlet injector = new Injector();\n\ninjector.register('router',             Router,             Injector.CACHE_INSTANCE);\ninjector.register('dataService',        DataService,        Injector.CACHE_INSTANCE);\ninjector.register('HomeController',     HomeController,     Injector.INSTANCE, [app]);\ninjector.register('emperorController',  emperorController,  Injector.FACTORY_FUNCTION, [app]);\ninjector.register('getQueryParams',     getQueryParams,     Injector.FACTORY_FUNCTION);\ninjector.register('createEmperorModel', createEmperorModel, Injector.FACTORY_FUNCTION);\ninjector.register('handleInternalLink', handleInternalLink, Injector.FACTORY_FUNCTION);\ninjector.register('html',               html,               Injector.FACTORY_FUNCTION);\ninjector.register('filters',            Filters,            Injector.INSTANCE);\ninjector.register('loadingPanel',       LoadingPanel,       Injector.INSTANCE);\ninjector.register('delegate',           delegate,           Injector.VALUE);\ninjector.register('renderAside',        renderAside,        Injector.FACTORY_FUNCTION);\ninjector.register('renderResults',      renderResults,      Injector.FACTORY_FUNCTION);\ninjector.register('SelectionBox',       SelectionBox,       Injector.VALUE);\ninjector.register('bootstrap',          Bootstrap,          Injector.INSTANCE);\ninjector.register('resultTemplate',     resultTemplate,     Injector.VALUE);\ninjector.register('asideTemplate',      asideTemplate,      Injector.VALUE);\ninjector.register('footerTemplate',     footerTemplate,     Injector.VALUE);\ninjector.register('bannerTemplate',     bannerTemplate,     Injector.VALUE);\ninjector.register('paginationTemplate', paginationTemplate, Injector.VALUE);\ninjector.register('emperorTemplate',    emperorTemplate,    Injector.VALUE);\ninjector.register('handleRequest',      handleRequest,      Injector.FACTORY_FUNCTION);\ninjector.register('injector',           injector,           Injector.VALUE);\n\ninjector.start('bootstrap', function (bootstrap) {\n\n\tbootstrap.start();\n\n});\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/render-aside.js":
/*!****************************!*\
  !*** ./js/render-aside.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet renderAside = function (options) {\n\n\tvar html = options.html;\n\tvar delegate = options.delegate;\n\tvar filters = options.filters;\n\tvar asideTemplate = options.asideTemplate;\n\n\treturn function (el, model) {\n\n\t\thtml(el, asideTemplate(model.getRefinements()));\n\n\t\tdelegate(el, {\n\t\t\t'change #simple-styling' : filters.createHandleSortByToggle(model),\n\t\t\t'change #dynasties' :      filters.createFilterByDynasty(model),\n\t\t\t'change #year-from' :      filters.createFilterByYearFrom(model),\n\t\t\t'change #year-to' :        filters.createFilterByYearTo(model)\n\t\t});\n\n\t}\n}\nrenderAside.inject = ['html', 'delegate', 'filters', 'asideTemplate'];\n\nmodule.exports = renderAside;\n\n//# sourceURL=webpack:///./js/render-aside.js?");

/***/ }),

/***/ "./js/render-results.js":
/*!******************************!*\
  !*** ./js/render-results.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar renderResults = function (options) {\n\n\tvar html = options.html;\n\tvar resultTemplate = options.resultTemplate;\n\n\treturn function(el, results) {\n\n\t\tvar frag = document.createDocumentFragment();\n\t\tvar loadingPanel = document.createElement('div');\n\t\tloadingPanel.className = 'loading-panel';\n\t\tfrag.appendChild(loadingPanel)\n\n\t\tfrag = results.reduce(function (frag, resultData) {\n\t\t\thtml(frag, resultTemplate(resultData));\n\t\t\treturn frag;\n\t\t}, frag);\n\n\t\tel.appendChild(frag);\n\t}\n}\nrenderResults.inject = ['html', 'resultTemplate'];\n\nmodule.exports = renderResults;\n\n//# sourceURL=webpack:///./js/render-results.js?");

/***/ }),

/***/ "./js/router.js":
/*!**********************!*\
  !*** ./js/router.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Router(routeConfig) {\n\tthis.routes = Object.keys(routeConfig || {}).map(function (route) {\n\t\treturn this.createRoute(route, routeConfig[route]);\n\t}, this);\n}\n\nRouter.prototype = {\n\n\taddRoute : function (route, handler) {\n\t\tthis.routes.push(this.createRoute(route, handler));\n\t},\n\n\tcreateRoute : function (route, handler) {\n\t\treturn { 'routeRegex' : this.routeToRegex(route), 'handler' : handler };\n\t},\n\n\trouteToRegex : function (route) {\n\t\t// stolen from Backbone!\n\t\tvar optionalParam = /\\((.*?)\\)/g;\n\t\tvar namedParam    = /(\\(\\?)?:\\w+/g;\n\t\tvar splatParam    = /\\*\\w+/g;\n\t\tvar escapeRegExp  = /[\\-{}\\[\\]+?.,\\\\\\^$|#\\s]/g;\n\n\t\troute = route.replace(escapeRegExp, '\\\\$&')\n\t\t\t.replace(optionalParam, '(?:$1)?')\n\t\t\t.replace(namedParam, function(match, optional) {\n\t\t\t\treturn optional ? match : '([^/?]+)';\n\t\t\t})\n\t\t\t.replace(splatParam, '([^?]*?)');\n\t\treturn new RegExp('^' + route + '(?:\\\\?([\\\\s\\\\S]*))?$');\n\t},\n\n\tnavigate : function (path, options) {\n\t\tif(options && options.replace) {\n\t\t\thistory.replaceState(path);\n\t\t} else {\n\t\t\thistory.pushState({page: 1}, \"title 1\", path);\n\t\t}\n\t\t//  call router to update page based on new url\n\t\tthis.router();\n\t},\n\n\trouter : function () {\n\t\tvar path = this.getPath();\n\t\tvar route = this.routes.find(function (route) {\n\t\t\treturn this.matchRoute(path, route.routeRegex);\n\t\t}, this);\n\t\troute.handler.apply(null, this.extractParameters(route.routeRegex, path));\n\t},\n\n\textractParameters: function(route, fragment) {\n\t\tvar params = route.exec(fragment).slice(1);\n\t\treturn params.map(function(param, i) {\n\t\t\t// Don't decode the search params.\n\t\t\tif (i === params.length - 1) return param || null;\n\t\t\treturn param ? decodeURIComponent(param) : null;\n\t\t});\n\t},\n\n\tgetPath : function () {\n\t\treturn (window.location.pathname + window.location.search).substring(1);  // strip leading slash\n\t},\n\n\tmatchRoute : function (path, route) {\n\t\treturn route.test(path);\n\t},\n\n\tstart : function () {\n\t\twindow.addEventListener('popstate', this.router.bind(this));\n\t\tthis.router();\n\t}\n};\n\n\nmodule.exports = Router;\n\n\n\n\n//# sourceURL=webpack:///./js/router.js?");

/***/ }),

/***/ "./js/templates/aside.js":
/*!*******************************!*\
  !*** ./js/templates/aside.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div class=\\\"menu\\\"><h2>Filters</h2><ul class=\\\"filters\\\"><h3>Time range</h3><li class=\\\"range-filters\\\"><label for=\\\"year-from\\\">from</label><input id=\\\"year-from\\\" type=\\\"range\\\" step=\\\"1\\\" min=\\\"\");r.push( this.minYear );r.push(\"\\\" value='\");r.push( this.yearFrom );r.push(\"' max=\\\"\");r.push( this.maxYear );r.push(\"\\\"><label for=\\\"year-from\\\">\");r.push( this.yearFrom );r.push(\"</label></li><li class=\\\"range-filters\\\"><label for=\\\"year-to\\\">to</label><input id=\\\"year-to\\\" type=\\\"range\\\" step=\\\"1\\\" min=\\\"\");r.push( this.minYear );r.push(\"\\\" value='\");r.push( this.yearTo );r.push(\"' max=\\\"\");r.push( this.maxYear );r.push(\"\\\"><label for=\\\"year-to\\\">\");r.push( this.yearTo );r.push(\"</label></li></ul><h4 for='dynasties'>Dynasty</h4><select id='dynasties'><option \"); if(this.dynasty=='all') { r.push(\" selected \"); } r.push(\">all</option><option \"); if(this.dynasty=='Julio-Claudian') { r.push(\" selected \"); } r.push(\">Julio-Claudian</option><option \"); if(this.dynasty=='Flavian') { r.push(\" selected \"); } r.push(\">Flavian</option><option \"); if(this.dynasty=='Nerva-Antonine') { r.push(\" selected \"); } r.push(\" value='Nerva-Antonine'>Nerva–Antonine</option><option \"); if(this.dynasty=='Severan') { r.push(\" selected \"); } r.push(\">Severan</option><option \"); if(this.dynasty=='Gordian') { r.push(\" selected \"); } r.push(\">Gordian</option></select><h3>Sort by</h3><select id='simple-styling'><option value='reign-asc' \"); if(this.sortBy=='reign-asc') { r.push(\" selected \"); } r.push(\">reign shortest first</option><option value='reign-desc' \"); if(this.sortBy=='reign-desc') { r.push(\" selected \"); } r.push(\">reign longest first</option><option value='succession' \"); if(this.sortBy=='succession') { r.push(\" selected \"); } r.push(\">succession ascending</option></select></div>\");return r.join(\"\");\n}).apply(data); };\n\n//# sourceURL=webpack:///./js/templates/aside.js?");

/***/ }),

/***/ "./js/templates/banner.js":
/*!********************************!*\
  !*** ./js/templates/banner.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div class=\\\"banner\\\"><h1><a href=\\\"\\\">White Label Vanilla</a></h1></div>\");return r.join(\"\");\n}).apply(data); };\n\n\n//# sourceURL=webpack:///./js/templates/banner.js?");

/***/ }),

/***/ "./js/templates/emperor.js":
/*!*********************************!*\
  !*** ./js/templates/emperor.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div class='emperor'><p>\");r.push( this.text );r.push(\"</p></div>\");return r.join(\"\");\n}).apply(data); };\n\n//# sourceURL=webpack:///./js/templates/emperor.js?");

/***/ }),

/***/ "./js/templates/footer.js":
/*!********************************!*\
  !*** ./js/templates/footer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div class=\\\"footer _14px\\\">©richard hunter the best 2016</div>\");return r.join(\"\");\n}).apply(data); };\n\n//# sourceURL=webpack:///./js/templates/footer.js?");

/***/ }),

/***/ "./js/templates/pagination.js":
/*!************************************!*\
  !*** ./js/templates/pagination.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div>  Pagination</div>\");return r.join(\"\");\n}).apply(data); };\n\n//# sourceURL=webpack:///./js/templates/pagination.js?");

/***/ }),

/***/ "./js/templates/result.js":
/*!********************************!*\
  !*** ./js/templates/result.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (data) { return (function anonymous() {\nvar r=[];r.push(\"<div class=\\\"media search-result-item _10px\\\"><a class=\\\"media-image\\\" class='search-result-item-image'><img alt=\\\"\\\" src=\\\"https://white-label-elements.herokuapp.com/images/medium/\");r.push( this.id );r.push(\".jpg\\\"></a><div class=\\\"media-body\\\"><h3><a data-internal-link href=\\\"/emperor?id=\");r.push( this.id );r.push(\"\\\">\");r.push( this.name );r.push(\"</a></h3><div class=\\\"add-info\\\">\");r.push( this.from );r.push(\" \");r.push( this.to );r.push(\"</div></div></div>\");return r.join(\"\");\n}).apply(data); };\n\n//# sourceURL=webpack:///./js/templates/result.js?");

/***/ }),

/***/ "./node_modules/Diogenes/lib/injector.js":
/*!***********************************************!*\
  !*** ./node_modules/Diogenes/lib/injector.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;\n(function (root, factory) {\n\tif (true) {\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\t\treturn (root.returnExportsGlobal = factory());\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}(this, function () {\n\n\t'use strict';\n\n\tfunction Injector() {\n\n\t\tthis.container = {};\n\n\t}\n\n\tInjector.INSTANCE = 1;\n\tInjector.CACHE_INSTANCE = 2;\n\tInjector.FACTORY_FUNCTION = 3;\n\tInjector.VALUE = 4;\n\n\n\tInjector.prototype = {\n\n\t\t/**\n\t\t*\n\t\t*  mode can either be a string or an object\n\t\t*\n\t\t*\n\t\t*/\n\t\tregister : function (key, injectable, mode, locals) {\n\n\t\t\tthis.container[key] = {\n\t\t\t\tinjectable : injectable,\n\t\t\t\tmode : mode || Injector.INSTANCE,\n\t\t\t\tlocals : locals || []\n\t\t\t};\n\t\t},\n\n\t\thas : function (key) {\n\t\t\treturn !!this.container[key];\n\t\t},\n\n\t\t/**\n\t\t*\n\t\t*\n\t\t*\n\t\t*/\n\t\tget : function (key, keychain) {\n\n\t\t\tvar injectableConfig = this.container[key],\n\t\t\t    instance,\n\t\t\t    injectable;\n\n\t\t\tkeychain = (keychain || []).slice();\n\n\t\t\tif(keychain.indexOf(key) != -1) {\n\n\t\t\t\tthrow Error('cyclical dependency detected for key: ' + key + ' in keychain ' + keychain);\n\n\t\t\t} else {\n\n\t\t\t\tkeychain.unshift(key);\n\n\t\t\t}\n\n\t\t\tif(!injectableConfig) {\n\t\t\t\tthrow Error('non existent injectable: ' + key);\n\t\t\t}\n\n\t\t\tinjectable = injectableConfig.injectable;\n\n\t\t\tif(injectableConfig.mode === Injector.CACHE_INSTANCE) {\n\t\t\t\tif(injectableConfig.cachedInstance) {\n\t\t\t\t\treturn injectableConfig.cachedInstance;\n\t\t\t\t} else {\n\t\t\t\t\tinstance = this.createInstance(injectableConfig, keychain);\n\t\t\t\t\tinjectableConfig.cachedInstance = instance;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tinstance = this.createInstance(injectableConfig, keychain);\n\t\t\t}\n\n\t\t\treturn instance;\n\n\t\t},\n\n\t\tcreateInstance : function (config, keychain) {\n\n\t\t\tvar Injectable,\n\t\t\t    dependencies,\n\t\t\t    InjectableOptions = {},\n\t\t\t    result;\n\n\t\t\tInjectable = config.injectable;\n\n\t\t\tdependencies = Injectable.inject || [];\n\n\t\t\tdependencies.forEach(function (dependencyKey) {\n\n\t\t\t\tInjectableOptions[dependencyKey] = this.get(dependencyKey, keychain);\n\n\t\t\t}, this);\n\n\t\t\tswitch(config.mode) {\n\t\t\tcase Injector.INSTANCE:\n\t\t\tcase Injector.CACHE_INSTANCE:\n\t\t\t\tresult = new Injectable(InjectableOptions, config.locals);\n\t\t\t\tbreak;\n\t\t\tcase Injector.FACTORY_FUNCTION:\n\t\t\t\tresult = Injectable(InjectableOptions, config.locals);\n\t\t\t\tbreak;\n\t\t\tcase Injector.VALUE:\n\t\t\t\tresult = Injectable;\n\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\treturn result;\n\n\t\t},\n\n\t\tstart : function (key, callback) {\n\n\t\t\tvar injectable = this.get(key);\n\n\t\t\tcallback(injectable);\n\n\t\t}\n\n\n\t};\n\n\treturn Injector;\n\n}));\n\n//# sourceURL=webpack:///./node_modules/Diogenes/lib/injector.js?");

/***/ }),

/***/ "./node_modules/richardUtils/src/dom.js":
/*!**********************************************!*\
  !*** ./node_modules/richardUtils/src/dom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\t// if the module has no dependencies, the above pattern can be simplified to\n\t(function (root, factory) {\n\t\t'use strict';\n\n\t\tif (true) {\n\t\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./sundry */ \"./node_modules/richardUtils/src/sundry.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\t} else {}\n\t}(this, function (sundry) {\n\n\t\t'use strict';\n\n\t\tvar domutils =  {\n\n\t\t\t/**\n\t\t\t*  alias for querySelector()\n\t\t\t*  @function\n\t\t\t*  @name $\n\t\t\t*  @param selector {String} CSS selector\n\t\t\t*  @param {Element} context\n\t\t\t*  @returns {Element} or {Null} if none found\n\t\t\t*/\n\t\t\t$ : function(selector, context) {\n\t\t\t\treturn (context || document).querySelector(selector);\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*  alias for querySelectorAll - still to be implemented\n\t\t\t*  @function\n\t\t\t*  @name $$\n\t\t\t*/\n\t\t\t$$ : function () {},\n\n\t\t\t/**\n\t\t\t*\n\t\t\t*  Get the immediately preceding sibling of the given element.\n\t\t\t*  If a selector is provided, it retrieves the previous\n\t\t\t*  sibling only if it matches that selector.\n\t\t\t*\n\t\t\t*  @function\n\t\t\t*  @name prev\n\t\t\t*  @param {Element} el reference element\n\t\t\t*  @param {String} selector selector to match candidate elements to\n\t\t\t*  @returns {Element} or null if none found\n\t\t\t*/\n\t\t\tprev : function (el, selector) {\n\t\t\t\tvar prevSibling = el.previousElementSibling;\n\t\t\t\treturn prevSibling && domutils.matches(prevSibling, selector) ? prevSibling : null;\n\t\t\t},\n\n\n\t\t\t/**\n\t\t\t*  Get the next sibling of the given element.\n\t\t\t*  If a selector is provided, it retrieves the next\n\t\t\t*  sibling only if it matches that selector.\n\t\t\t*\n\t\t\t*  @function\n\t\t\t*  @name next\n\t\t\t*  @param {Element} reference element\n\t\t\t*  @param {String} selector selector to match candidate elements to\n\t\t\t*  @returns {Element} or null if none found\n\t\t\t*/\n\t\t\tnext : function (el, selector) {\n\t\t\t\tvar nextSibling = el.nextElementSibling;\n\t\t\t\treturn nextSibling && domutils.matches(nextSibling, selector) ? nextSibling : null;\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*  Get the parent  of the given element.\n\t\t\t*  If a selector is provided, it retrieves the parent\n\t\t\t*  only if it matches that selector.\n\t\t\t*\n\t\t\t*  @function\n\t\t\t*  @name parent\n\t\t\t*  @param {Element} reference element\n\t\t\t*  @param {String} selector selector to match candidate elements to\n\t\t\t*  @returns {Element} or null if none found\n\t\t\t*/\n\t\t\tparent : function (el, selector) {\n\t\t\t\tvar parent = el.parentNode;\n\t\t\t\treturn parent && domutils.matches(parent, selector) ? parent : null;\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*  polyfill for Element.matches function\n\t\t\t*  method returns true if the element would be selected by the specified selector string;\n\t\t\t*  otherwise, returns false.\n\t\t\t*\n\t\t\t*/\n\t\t\tmatches : function (elm, selector) {\n\t\t\t\tvar matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),\n\t\t\t\t\t\ti = matches.length;\n\t\t\t\twhile (--i >= 0 && matches.item(i) !== elm) {}\n\t\t\t\treturn i > -1;\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*\n\t\t\t* @function insertAfter\n\t\t\t*\n\t\t\t*\n\t\t\t*/\n\t\t\tinsertAfter : function (newEl, referenceEl) {\n\n\t\t\t\tvar parentEl = referenceEl.parentElement;\n\t\t\t\tvar nextSibling = referenceEl.nextElementSibling;\n\t\t\t\t// if next sibling is null, insertBefore will insert newEl as the last child of the parent.\n\t\t\t\tparentEl.insertBefore(newEl, nextSibling);\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*  condition is either a selector string or a function as per strategy pattern\n\t\t\t*\n\t\t\t*  @function searchAncestors\n\t\t\t*\n\t\t\t*/\n\t\t\tsearchAncestors : function (descendant, condition, ancestor){\n\t\t\t\tvar parent = descendant.parentNode,\n\t\t\t\t    conditionFunc;\n\n\t\t\t\tif(sundry.isString(condition)) {\n\t\t\t\t\tconditionFunc = function (el) {\n\t\t\t\t\t\treturn domutils.matches(el, condition);\n\t\t\t\t\t};\n\t\t\t\t} else if(sundry.isFunction(condition)) {\n\t\t\t\t\tconditionFunc = condition;\n\t\t\t\t} else {\n\t\t\t\t\tthrow {\n\t\t\t\t\t\tmessage : 'condition must be a string or a function'\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tif(conditionFunc(descendant)) {\n\t\t\t\t\treturn descendant;\n\t\t\t\t} else if(parent === null) {\n\t\t\t\t\treturn false;\n\t\t\t\t} else if(parent === ancestor) {\n\t\t\t\t\treturn conditionFunc(parent) ? parent : false;\n\t\t\t\t} else {\n\t\t\t\t\treturn domutils.searchAncestors(parent, condition, ancestor);\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*\n\t\t\t*  Registers a handler on a delegate element which will handle event on behalf of delegator elements.\n\t\t\t*  The delegator element does not have to be the physical element on which the event originally\n\t\t\t*  fires on. Since the event bubbles up we can specify an ancestor element, defined by the targetSelector,\n\t\t\t*  on which we will call a handler along with a synthetic event as if the event fired on this element.\n\t\t\t*\n\t\t\t*  @function\n\t\t\t*  @name delegate\n\t\t\t*  @param el {Element} the delegate which will handle events on behalf of other elements\n\t\t\t*  @param eventType {String} event type\n\t\t\t*  @param targetSelector {Element} the delegator\n\t\t\t*  @param handler {Function} handler function\n\t\t\t*  @param context {Object} context to bind the handler to\n\t\t\t*/\n\t\t\tdelegate : function (el, eventType, targetSelector, handler, context) {\n\t\t\t\tif(context) {\n\t\t\t\t\thandler = handler.bind(context);\n\t\t\t\t}\n\t\t\t\tel.addEventListener(eventType, function (event){\n\t\t\t\t\t// are we on the element the handler is attached to?\n\t\t\t\t\tif(event.target === event.currentTarget) {\n\t\t\t\t\t\thandler(event);\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\tvar target = domutils.searchAncestors(event.target, targetSelector, event.currentTarget);\n\t\t\t\t\tif(target) {\n\t\t\t\t\t\t// how to create synthetic event as if it occurred on this target?\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\ttarget : target,\n\t\t\t\t\t\t\tcurrentTarget: el,\n\t\t\t\t\t\t\tpreventDefault : event.preventDefault.bind(event), // delegates to original event object\n\t\t\t\t\t\t\tstopPropagation : event.stopPropagation.bind(event),\n\t\t\t\t\t\t\twhich : event.which,\n\t\t\t\t\t\t\toriginalEvent : event\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t},\n\n\t\t\t/**\n\t\t\t*  Selects a child element by index\n\t\t\t*  @function nthChild\n\t\t\t*  @param {Element} parent element\n\t\t\t*  @param {Number} index of element to select within array of child elements\n\t\t\t*  @returns {Element} child element found\n\t\t\t*/\n\t\t\tnthChild : function (el, index) {\n\t\t\t\treturn el.children[index];\n\t\t\t}\n\t\t};\n\n\t\treturn domutils;\n\n\t}));\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/richardUtils/src/dom.js?");

/***/ }),

/***/ "./node_modules/richardUtils/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/richardUtils/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports.domUtils = __webpack_require__(/*! ./dom.js */ \"./node_modules/richardUtils/src/dom.js\");\nmodule.exports.sundry = __webpack_require__(/*! ./sundry.js */ \"./node_modules/richardUtils/src/sundry.js\");\n\n\n//# sourceURL=webpack:///./node_modules/richardUtils/src/index.js?");

/***/ }),

/***/ "./node_modules/richardUtils/src/sundry.js":
/*!*************************************************!*\
  !*** ./node_modules/richardUtils/src/sundry.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n(function (root, factory) {\n\t'use strict';\n\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}(this, function () {\n\n\t\"use strict\";\n\n\tvar sundry = {\n\n\t\t/**\n\t\t*  Converts array like object (e.g. a NodeList) to an actual array\n\t\t*\n\t\t*  @function toArray\n\t\t*  @param arrayLike {NodeList} array like object\n\t\t*  @returns {Array} an actual array\n\t\t*/\n\t\ttoArray : function (arrayLike){\n\t\t\treturn Array.prototype.slice.call(arrayLike);\n\t\t},\n\n\t\tisString : function (val) {\n\t\t\treturn typeof val === 'string';\n\t\t},\n\n\t\tisFunction : function (val) {\n\t\t\treturn typeof val === 'function';\n\t\t},\n\n\t\textend : function (target) {\n\n\t\t\tvar srcObjects = Array.prototype.slice.call(arguments, 1);\n\t\t\tsrcObjects.forEach(function (src) {\n\t\t\t\tObject.keys(src).forEach(function(key){\n\t\t\t\t\ttarget[key] = src[key];\n\t\t\t\t});\n\t\t\t});\n\t\t\treturn target;\n\t\t}\n\t};\n\n\treturn sundry;\n\n}));\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/richardUtils/src/sundry.js?");

/***/ }),

/***/ "./node_modules/selection-box/build/selection-box.js":
/*!***********************************************************!*\
  !*** ./node_modules/selection-box/build/selection-box.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {\n\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! richardUtils */ \"./node_modules/richardUtils/src/index.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(richardUtils) {\n\t\t\treturn factory(richardUtils);\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n})(window, function(richardUtils) {\n\n\tvar sundry = richardUtils.sundry;\n\tvar domutils = richardUtils.domUtils;\n\n\t\t'use strict';\n\n\tvar css = `\n\t\t.selection-box {\n\t\t  position: relative; }\n\t\t  .selection-box .display-area {\n\t\t    border: solid 1px #777; }\n\t\t  .selection-box .display-area:focus,\n\t\t  .selection-box .option:focus {\n\t\t    outline-color: lightblue;\n\t\t    outline-style: solid; }\n\t\t  .selection-box .option-list {\n\t\t    position: absolute;\n\t\t    left: 4px;\n\t\t    z-index: 4;\n\t\t    list-style: none;\n\t\t    overflow-y: auto;\n\t\t    width: 100%;\n\t\t    margin: 0;\n\t\t    padding: 0;\n\t\t    border: solid 1px #777;\n\t\t    display: block;\n\t\t    background: white; }\n\t\t    .selection-box .option-list.below {\n\t\t      top: calc(100% + 6px); }\n\t\t    .selection-box .option-list.above {\n\t\t      bottom: calc(100% + 6px); }\n\t\t  .selection-box[data-state=closed] .option-list {\n\t\t    visibility: hidden !important; }\n\t`;\n\n\tvar style = document.createElement('style');\n\tstyle.innerHTML = css;\n\tdocument.head.insertBefore(style, document.head.firstChild);\n\n\n\tvar RETURN = 13,\n\t    TAB    = 9,\n\t    ESCAPE = 27,\n\t    UP     = 38,\n\t    DOWN   = 40,\n\t    SPACE  = 32;\n\n\tvar optionSelector      = '.option',\n\t    displayAreaSelector = '.display-area',\n\t    optionListSelector  = '.option-list',\n\t    optionGroupSelector = '.option-group';\n\n\t/*\n\t\ttodo:\n\t\t1. multiselect support\n\t\t2. support for focus when clicking on any label belonging to select box\n\t*/\n\tfunction SelectionBox(selectEl, options){\n\n\t\tif( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {\n\n\t\t\t//  only work on desktop\n\t\t\t//  use native for mobile devices\n\n\t\t\tthis.defaults = {\n\t\t\t\t            ariaEnabled : true,\n\t\t\t\t           renderOption : function (text) { return text; },\n\t\t\t\t      renderDisplayArea : function(text, value) { return text; },\n\t\t\t\t         hideFoundation : true,\n\t\t\t\t    optionListMaxHeight : 150\n\t\t\t};\n\n\t\t\tthis.config = sundry.extend({}, this.defaults, options || {});\n\n\t\t\tthis.select = domutils.$(selectEl);\n\n\t\t\tif(!this.select) {\n\t\t\t\tthrow {\n\t\t\t\t\tname : 'NO_SELECT_ELEMENT',\n\t\t\t\t\tmessage : 'You need to supply an existing select element'\n\t\t\t\t};\n\t\t\t}\n\t\t\tthis.id = this.select.id;\n\t\t\tthis.el = this.render(this.select);\n\n\t\t\tif(this.config.hideFoundation) {\n\t\t\t\tthis.select.style.display = 'none';\n\t\t\t}\n\t\t\tdomutils.insertAfter(this.el, this.select)\n\n\t\t\tthis.el.style.display = 'block';\n\n\t\t\tthis.bindHandlers();\n\t\t}\n\t}\n\n\tSelectionBox.prototype = {\n\n\t\t//  only function that is intended to be called from outside\n\t\t//  re-renders option list\n\t\tupdate : function() {\n\t\t\tvar optionList = domutils.$(optionListSelector, this.el);\n\t\t\t//  clear out contents\n\t\t\toptionList.innerHTML = '';\n\t\t\tthis._renderOptions($optionList);\n\t\t},\n\n\t\tbindHandlers : function () {\n\n\t\t\tvar self = this;\n\n\t\t\t// handle events on display area\n\t\t\tdomutils.delegate(this.el,'click', displayAreaSelector, this._displayClickHandler, this);\n\t\t\tdomutils.delegate(this.el,'keyup', displayAreaSelector, this._displayKeyUpHandler, this);\n\n\t\t\t//  handle events on options\n\t\t\tdomutils.delegate(this.el, 'click', optionSelector, this._optionClickHandler, this);\n\t\t\tdomutils.delegate(this.el, 'keyup', optionSelector, this._optionKeyUpHandler, this);\n\n\t\t\t//  effectively disable keydown and keypress\n\t\t\tdomutils.delegate(this.el, 'keydown', optionSelector, function (event) {\n\t\t\t\tevent.preventDefault();\n\t\t\t});\n\t\t\tdomutils.delegate(this.el, 'keypress', optionSelector, function (event) {\n\t\t\t\tevent.preventDefault();\n\t\t\t});\n\t\t\t// attach window event handler\n\t\t\twindow.addEventListener('click', function (event) {\n\t\t\t\tif(!self.el.contains(event.target)) {\n\t\t\t\t\tself._closeOptionList();\n\t\t\t\t}\n\t\t\t});\n\t\t\t//  handle change events on foundation select\n\t\t\tthis.select.addEventListener('change', this._handleFoundationSelectChange.bind(this));\n\n\t\t\t//  because PhantomJS doesn't support MutationObserver!!\n\t\t\tif(typeof MutationObserver !== 'undefined') {\n\n\t\t\t\t//  handle mutation events on original select box\n\t\t\t\tvar observer = new MutationObserver(function(mutations) {\n\t\t\t\t\tself.update();\n\t\t\t\t});\n\t\t\t\t// configuration of the observer:\n\t\t\t\tvar config = { childList: true };\n\t      // pass in the target node, as well as the observer options\n\t      observer.observe(this.select, config);\n      }\n\t\t},\n\n\t\t//  handlers\n\n\t\t_displayClickHandler : function () {\n\t\t\tif(!this.select.disabled) {\n\t\t\t\tif(this.el.getAttribute('data-state') == 'closed') {\n\t\t\t\t\tthis._openOptionList();\n\t\t\t\t} else {\n\t\t\t\t\tthis._closeOptionList();\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\t_displayKeyUpHandler : function (event) {\n\t\t\tif(!this.select.disabled) {\n\t\t\t\tswitch(event.which) {\n\t\t\t\tcase  UP:\n\t\t\t\tcase DOWN :\n\t\t\t\t\tthis._openOptionList();\n\t\t\t\t\tbreak;\n\t\t\t\tdefault :\n\t\t\t\t\t//  do something else\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\t_optionClickHandler : function (event) {\n\t\t\tvar optionEl = event.target;\n\t\t\tvar a = !optionEl.classList.contains('__disabled');\n\t\t\tvar b = !optionEl.parentElement.classList.contains('__disabled');\n\t\t\tif(a && b ) {\n\t\t\t\tthis._selectValue(optionEl);\n\t\t\t}\n\t\t},\n\n\t\t_optionKeyUpHandler : function (event) {\n\t\t\tvar option = event.target;\n\n\t\t\tswitch(event.which) {\n\t\t\tcase  UP:\n\t\t\t\tthis._focusOnPreviousOption(option);\n\t\t\t\tbreak;\n\t\t\tcase DOWN :\n\t\t\t\tthis._focusOnNextOption(option);\n\t\t\t\tbreak;\n\t\t\tcase SPACE :\n\t\t\tcase RETURN :\n\t\t\t\tthis._selectValue(option);\n\t\t\t\tbreak;\n\t\t\tcase ESCAPE :\n\t\t\t\tthis._closeOptionList();\n\t\t\t\tdomutils.$(displayAreaSelector, this.el).focus();\n\t\t\t\tbreak;\n\t\t\tdefault :\n\t\t\t\t//  do nothing.\n\t\t\t}\n\t\t},\n\n\t\t_handleFoundationSelectChange : function(event) {\n\t\t\tthis._changeSelected(this._getCurrentSelected(), this._getOptionByIndex(event.target.selectedIndex));\n\t\t},\n\n\t\t//  end of handlers\n\n\t\t//  set value on foundation select\n\t\t//  this component will update via it's listener on the foundation select.\n\t\t_selectValue : function(optionEl) {\n\n\t\t\tvar value = optionEl.getAttribute('data-value') || optionEl.textContent;\n\n\t\t\t//  set value back on original select\n\t\t\tthis.select.value = value;\n\n\t\t\tvar event = document.createEvent('Event');\n      event.initEvent('change', true, true);\n      this.select.dispatchEvent(event);\n\t\t},\n\n\t\t//  performs actual change on this component, e.g changing aria values etc.\n\t\t_changeSelected : function(currentSelected, newSelected) {\n\n\t\t\tif(this.config.ariaEnabled) {\n\t\t\t\tcurrentSelected.setAttribute('aria-selected', false);\n\t\t\t\tnewSelected.setAttribute('aria-selected', true);\n\t\t\t}\n\n\t\t\tcurrentSelected.classList.remove('__selected');\n\t\t\tnewSelected.classList.add('__selected');\n\n\t\t\tdomutils.$(displayAreaSelector, this.el).remove();\n\t\t\tthis.el.insertBefore(this._renderDisplayArea(), this.el.firstChild  )\n\n\t\t\tdomutils.$(displayAreaSelector, this.el).focus();\n\n\t\t\tthis._closeOptionList();\n\t\t},\n\n\t\t_openOptionList : function () {\n\t\t\tvar optionList = domutils.$(optionListSelector, this.el);\n\t\t\tvar displayArea = domutils.$(displayAreaSelector, this.el);\n\t\t\tthis.el.setAttribute('data-state', 'open');\n\n\t\t\tif(this.config.ariaEnabled) {\n\t\t\t\toptionList.setAttribute('aria-hidden', false);\n\t\t\t}\n\n\t\t\tthis._positionOptionList(displayArea, optionList);\n\n\t\t\t//  focus on currently selected option\n\t\t\tvar selectedIndex = this.select.selectedIndex;\n\t\t\tthis.el.querySelectorAll(optionSelector)[selectedIndex].focus();\n\t\t},\n\n\t\t_closeOptionList : function () {\n\t\t\tvar optionList = domutils.$(optionListSelector, this.el);\n\t\t\tif(this.config.ariaEnabled) {\n\t\t\t\toptionList.setAttribute('aria-hidden', true);\n\t\t\t}\n\t\t\tthis.el.setAttribute('data-state', 'closed');\n\t\t},\n\n\t\t_focusOn : function(el) {\n\t\t\tel.focus();\n\t\t},\n\n\t\t_focusOnPreviousOption : function(option) {\n\t\t\tvar prevOption = domutils.prev(option, optionSelector);\n\t\t\tif(prevOption) {\n\t\t\t\t//  if there is a previous option and it isn't disabled, focus on it. Otherwise recursively call this function\n\t\t\t\tif(prevOption.classList.contains('__disabled')) {\n\t\t\t\t\tthis._focusOnPreviousOption(prevOption);\n\t\t\t\t} else {\n\t\t\t\t\tthis._focusOn(prevOption);\n\t\t\t\t}\n\t\t\t} else if(domutils.parent(option, optionGroupSelector)) {\n\t\t\t\t//  if option is in a group, try a previous group\n\t\t\t\tvar parent = domutils.parent(option, optionGroupSelector);\n\t\t\t\tvar prevGroup = this._getPrevGroup(parent);\n\t\t\t\tif(prevGroup) {\n\t\t\t\t\tprevOption = _toArray(prevGroup.querySelectorAll(optionSelector)).pop();\n\t\t\t\t\tif(prevOption){\n\t\t\t\t\t\tif(!prevOption.classList.contains('__disabled')) {\n\t\t\t\t\t\t\tthis._focusOn(prevOption);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tthis._focusOnPreviousOption(prevOption);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\n\t\t_focusOnNextOption : function(option) {\n\t\t\tvar nextOption = domutils.next(option, optionSelector);\n\t\t\tif(nextOption) {\n\t\t\t\tif(nextOption.classList.contains('__disabled')) {\n\t\t\t\t\tthis._focusOnNextOption(nextOption);\n\t\t\t\t} else {\n\t\t\t\t\tthis._focusOn(nextOption);\n\t\t\t\t}\n\t\t\t} else if(domutils.parent(option, optionGroupSelector)) {\n\t\t\t\tvar parent = domutils.parent(option, optionGroupSelector);\n\t\t\t\tvar nextGroup = this._getNextGroup(parent);\n\t\t\t\tif(nextGroup) {\n\t\t\t\t\tvar nextOption = _toArray(nextGroup.querySelectorAll(optionSelector)).shift();\n\t\t\t\t\tif(nextOption) {\n\t\t\t\t\t\tif(!nextOption.classList.contains('__disabled')) {\n\t\t\t\t\t\t\tthis._focusOn(nextOption);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tthis._focusOnNextOption(nextOption);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\n\t\t_getPrevGroup : function(group) {\n\t\t\tvar prevGroup = domutils.prev(group,optionGroupSelector);\n\t\t\tif(prevGroup) {\n\t\t\t\tif(prevGroup.classList.contains('__disabled')) {\n\t\t\t\t\t// skip this group\n\t\t\t\t\treturn this._getPrevGroup(prevGroup);\n\t\t\t\t} else {\n\t\t\t\t\treturn prevGroup;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t},\n\n\t\t_getNextGroup : function(group) {\n\t\t\tvar nextGroup = domutils.next(group, optionGroupSelector);\n\t\t\tif(nextGroup) {\n\t\t\t\tif(nextGroup.classList.contains('__disabled')) {\n\t\t\t\t\t// skip this group\n\t\t\t\t\treturn this._getNextGroup(nextGroup);\n\t\t\t\t} else {\n\t\t\t\t\treturn nextGroup;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t},\n\n\t\t//  render functions\n\t\trender : function (select) {\n\t\t\tvar self = this;\n\t\t\tvar ariaEnabled = this.config.ariaEnabled;\n\n\t\t\tvar el = document.createElement('div');\n\t\t\tel.id = this.select.id + '-selection-box';\n\t\t\tel.classList.add('selection-box');\n\t\t\tel.setAttribute('data-state', 'closed');\n\n\t\t\tif(select.disabled) {\n\t\t\t\tel.classList.add('__disabled');\n\t\t\t}\n\n\t\t\tvar displayArea = this._renderDisplayArea(select.disabled);\n\n\t\t\tvar optionList = document.createElement('div');\n\t\t\toptionList.id = this._generateId('option-list');\n\t\t\toptionList.classList.add('option-list');\n\t\t\toptionList.setAttribute('role', 'listbox');\n\t\t\toptionList.setAttribute('aria-hidden', true);\n\t\t\toptionList.setAttribute('aria-labelledby', this._generateId('display-area'));\n\n\t\t\tel.appendChild(displayArea);\n\t\t\tel.appendChild(optionList);\n\n\t\t\tthis._renderOptions(optionList);\n\n\t\t\treturn el;\n\t\t},\n\n\t\t_shouldOpenAboveDisplayArea : function (displayAreaDimensions, optionListDimensions) {\n\n\t\t\t//  default is to display option list below the display area.\n\t\t\t//  if there is not sufficient space, then we should display it above the display area.\n\t\t\tvar spaceBelowDisplayArea = window.innerHeight - (displayAreaDimensions.height + displayAreaDimensions.top)\n\t\t\treturn this.config.optionListMaxHeight > spaceBelowDisplayArea;\n\n\t\t},\n\n\t\t_positionOptionList : function (displayArea, optionList) {\n\n\t\t\tvar displayAreaDimensions = _getElementDimensions(displayArea);\n\t\t\tif (this._shouldOpenAboveDisplayArea(displayAreaDimensions)) {\n\t\t\t\toptionList.classList.remove('below');\n\t\t\t\toptionList.classList.add('above');\n\t\t\t} else {\n\t\t\t\toptionList.classList.remove('above');\n        optionList.classList.add('below');\n\n\t\t\t}\n\t\t\toptionList.style.maxHeight = this.config.optionListMaxHeight + 'px';\n\t\t},\n\n\t\t_renderOptions : function(optionList) {\n\t\t\tvar self = this;\n\t\t\tvar select = this.select;\n\t\t\tvar ariaEnabled = this.config.ariaEnabled;\n\n\t\t\tif(_hasGroups(select)) {\n\t\t\t\tvar groups = _toArray(select.querySelectorAll('optgroup'));\n\t\t\t\tgroups.forEach(function(optionGroup) {\n\t\t\t\t\toptionList.appendChild(self._renderOptionGroup(optionGroup, ariaEnabled));\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tvar options = _toArray(select.querySelectorAll('option'));\n\t\t\t\toptions.forEach(function(option) {\n\t\t\t\t\toptionList.appendChild(self._renderOption(option, select.disabled, ariaEnabled));\n\t\t\t\t});\n\t\t\t}\n\t\t},\n\n\t\t_renderDisplayArea : function (disabled) {\n\n\t\t\tvar displayArea = document.createElement('div');\n\n\t\t\tvar selectedOption = this._getSelectedOptionFromFoundationSelect();\n\n\t\t\tdisplayArea.classList.add('display-area');\n\t\t\tdisplayArea.setAttribute('tabindex', disabled ? null : 0);\n\t\t\tdisplayArea.id = this._generateId('display-area')\n\n\t\t\tvar text = _getSelectedTextFromOption(selectedOption);\n\t\t\tvar value = selectedOption.value;\n\t\t\tdisplayArea.innerHTML = this.config.renderDisplayArea(text, value);\n\n\t\t\tif(this.config.ariaEnabled) {\n\n\t\t\t\tdisplayArea.setAttribute('role', 'button');\n\t\t\t\tdisplayArea.setAttribute('aria-haspopup', true);\n\t\t\t\tdisplayArea.setAttribute('aria-owns', this._generateId('option-list'));\n\t\t\t}\n\t\t\treturn displayArea;\n\t\t},\n\t\t//  tested\n\t\t_renderOptionGroup : function (optionGroup, ariaEnabled) {\n\n\t\t\tvar self = this;\n\n\t\t\tvar optionGroupEl = document.createElement('div');\n\t\t\toptionGroupEl.classList.add('option-group');\n\n\t\t\toptionGroupEl.appendChild(_renderOptionGroupLabel(optionGroup.label));\n\n\t\t\tif(optionGroup.disabled) {\n\t\t\t\toptionGroupEl.classList.add('__disabled');\n\t\t\t}\n\t\t\t_toArray(optionGroup.querySelectorAll('option')).forEach(function (option){\n\t\t\t\toptionGroupEl.appendChild(self._renderOption(option, optionGroup.disabled, ariaEnabled));\n\t\t\t});\n\n\t\t\treturn optionGroupEl;\n\t\t},\n\t\t//  tested\n\t\t_renderOption : function(option, parentDisabled, ariaEnabled) {\n\n\t\t\tvar optionEl = document.createElement('div');\n\t\t\toptionEl.classList.add('option');\n\t\t\t//  todo : should set to '' if disabled?\n\t\t\toptionEl.setAttribute('tabindex', (option.disabled || parentDisabled) ? null : -1);\n\t\t\toptionEl.setAttribute('data-value', option.value || option.innerHTML );\n\n\t\t\tvar text = option.label || option.innerHTML;\n\n\t\t\toptionEl.innerHTML = this.config.renderOption(text)\n\n\t\t\tif(ariaEnabled) {\n\t\t\t\toptionEl.setAttribute('role', 'option');\n\t\t\t\toptionEl.setAttribute('aria-selected', option.selected);\n\t\t\t}\n\n\t\t\tif(option.selected) {\n\t\t\t\toptionEl.classList.add('__selected');\n\t\t\t}\n\n\t\t\tif(option.disabled || parentDisabled) {\n\t\t\t\toptionEl.classList.add('__disabled');\n\t\t\t}\n\t\t\treturn optionEl;\n\t\t},\n\t\t//  tested\n\t\t_getOptionByIndex : function (index) {\n\t\t\treturn this.el.querySelectorAll(optionSelector)[index];\n\t\t},\n\n\t\t_getCurrentSelected : function () {\n\t\t\treturn domutils.$('.__selected', this.el);\n\t\t},\n\n\t\t_generateId : function (suffix) {\n\t\t\treturn this.id + '-' + suffix;\n\t\t},\n\n\t\t// foundation select functions\n\n\t\t_getSelectedOptionFromFoundationSelect : function () {\n      return this.select.options[ this.select.selectedIndex ];\n\t\t}\n\t};\n\n\t//  stateless functions\n\n\tfunction _renderOptionGroupLabel(label) {\n\n\t\tvar optionGroupLabel = document.createElement('div');\n\t\toptionGroupLabel.classList.add('option-group-label');\n\t\toptionGroupLabel.appendChild(document.createTextNode(label));\n\n\t\treturn optionGroupLabel;\n\n\t}\n\n\t//  foundation select utility functions\n\n\tfunction _getSelectedTextFromOption(option) {\n\t\treturn option.label || option.innerHTML;\n\t}\n\n\tfunction _hasGroups(select) {\n\t\treturn select.querySelectorAll('optgroup').length > 0;\n\t}\n\n\t// other utils\n\tfunction _toArray(arrayLike){\n\t\treturn Array.prototype.slice.call(arrayLike);\n\t}\n\n\tfunction _getElementDimensions(el) {\n\t\treturn el.getBoundingClientRect();\n\t}\n\n\n\n\n\treturn SelectionBox;\n});\n\n//# sourceURL=webpack:///./node_modules/selection-box/build/selection-box.js?");

/***/ })

/******/ });