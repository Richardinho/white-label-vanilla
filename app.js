!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	function Router(routeConfig) {
		this.routes = Object.keys(routeConfig).map(function (route) {
			return this.createRoute(route, routeConfig[route]);
		}, this);
	}

	Router.prototype = {

		createRoute: function (route, handler) {
			return { 'routeRegex': this.routeToRegex(route), 'handler': handler };
		},

		routeToRegex: function (route) {
			// stolen from Backbone!
			var optionalParam = /\((.*?)\)/g;
			var namedParam = /(\(\?)?:\w+/g;
			var splatParam = /\*\w+/g;
			var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

			route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
				return optional ? match : '([^/?]+)';
			}).replace(splatParam, '([^?]*?)');
			return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
		},

		navigate: function (path, options) {
			if (options && options.replace) {
				history.replaceState(path);
			} else {
				history.pushState({ page: 1 }, "title 1", path);
			}
			//  call router to update page based on new url
			this.router();
		},

		router: function () {
			var path = this.getPath();
			var route = this.routes.find(function (route) {
				return this.matchRoute(path, route.routeRegex);
			}, this);
			route.handler.apply(null, this.extractParameters(route.routeRegex, path));
		},

		extractParameters: function (route, fragment) {
			var params = route.exec(fragment).slice(1);
			return params.map(function (param, i) {
				// Don't decode the search params.
				if (i === params.length - 1) return param || null;
				return param ? decodeURIComponent(param) : null;
			});
		},

		getPath: function () {
			return (window.location.pathname + window.location.search).substring(1); // strip leading slash
		},

		matchRoute: function (path, route) {
			return route.test(path);
		},

		start: function () {
			window.addEventListener('popstate', this.router.bind(this));
			this.router();
		}
	};

	module.exports = Router;
	return module.exports;
});
$__System.registerDynamic('3', [], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	function delegate(el, config) {

		Object.keys(config).forEach(function (key) {
			var listener = config[key];
			var event;
			var selector;

			if (key.search(/\s/) == -1) {
				event = key;
			} else {
				var eventSelector = splitEventFromSelector(key);
				event = eventSelector[0];
				selector = eventSelector[1];
			}

			el.addEventListener(event, function (event) {
				if (!selector) {
					listener(event);
				} else {
					var target = event.target;
					while (target !== el) {
						if (target.matches(selector)) {
							listener(convertEvent(event, el, target));
						}
						target = target.parentNode;
					}
				}
			});
		});
	}

	function splitEventFromSelector(srcString) {
		return srcString.match(/^(\S+)\s+(\S.*)?$/).slice(1);
	}

	function convertEvent(event, currentTarget, target) {
		return Object.assign({}, event, {
			currentTarget: currentTarget,
			target: target,
			preventDefault: event.preventDefault.bind(event),
			stopPropagation: event.stopPropagation.bind(event)
		});
	}

	module.exports = delegate;
	return module.exports;
});
$__System.registerDynamic('4', [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	//  adapted from Krasimir Tsonev's 20 line template engine
	//  http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line

	var TemplateEngine = function (tpl, data) {
		var re = /<%([^%>]+)?%>/g,
		    code = 'var r=[];\n',
		    cursor = 0,
		    match;

		while (match = re.exec(tpl)) {
			code += addHTML(tpl.slice(cursor, match.index));
			code += addJS(match[1]);
			cursor = match.index + match[0].length;
		}
		code += addHTML(tpl.substr(cursor, tpl.length - cursor));
		code += 'return r.join("");'; // <-- return the result
		return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
	};

	function addHTML(line) {
		//  double backslash all double quotes
		return 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
	}

	function addJS(line) {
		if (line.match(/(^(\s)?(if|for|else|switch|case|break|{|}))(.*)?/g)) {
			return line + '\n';
		} else {
			return 'r.push(' + line + ');\n';
		}
	}

	module.exports = TemplateEngine;
	return module.exports;
});
$__System.registerDynamic('5', ['6'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var define,
      global = this || self,
      GLOBAL = global;
  (function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
      define(['./sundry'], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory($__require('6'));
    } else {
      root.domutils = factory(sundry);
    }
  })(this, function (sundry) {
    'use strict';

    var domutils = {
      $: function (selector, context) {
        return (context || document).querySelector(selector);
      },
      $$: function () {},
      prev: function (el, selector) {
        var prevSibling = el.previousElementSibling;
        return prevSibling && domutils.matches(prevSibling, selector) ? prevSibling : null;
      },
      next: function (el, selector) {
        var nextSibling = el.nextElementSibling;
        return nextSibling && domutils.matches(nextSibling, selector) ? nextSibling : null;
      },
      parent: function (el, selector) {
        var parent = el.parentNode;
        return parent && domutils.matches(parent, selector) ? parent : null;
      },
      matches: function (elm, selector) {
        var matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== elm) {}
        return i > -1;
      },
      insertAfter: function (newEl, referenceEl) {
        var parentEl = referenceEl.parentElement;
        var nextSibling = referenceEl.nextElementSibling;
        parentEl.insertBefore(newEl, nextSibling);
      },
      searchAncestors: function (descendant, condition, ancestor) {
        var parent = descendant.parentNode,
            conditionFunc;
        if (sundry.isString(condition)) {
          conditionFunc = function (el) {
            return domutils.matches(el, condition);
          };
        } else if (sundry.isFunction(condition)) {
          conditionFunc = condition;
        } else {
          throw { message: 'condition must be a string or a function' };
        }
        if (conditionFunc(descendant)) {
          return descendant;
        } else if (parent === null) {
          return false;
        } else if (parent === ancestor) {
          return conditionFunc(parent) ? parent : false;
        } else {
          return domutils.searchAncestors(parent, condition, ancestor);
        }
      },
      delegate: function (el, eventType, targetSelector, handler, context) {
        if (context) {
          handler = handler.bind(context);
        }
        el.addEventListener(eventType, function (event) {
          if (event.target === event.currentTarget) {
            handler(event);
            return;
          }
          var target = domutils.searchAncestors(event.target, targetSelector, event.currentTarget);
          if (target) {
            handler({
              target: target,
              currentTarget: el,
              preventDefault: event.preventDefault.bind(event),
              stopPropagation: event.stopPropagation.bind(event),
              which: event.which,
              originalEvent: event
            });
          }
        });
      },
      nthChild: function (el, index) {
        return el.children[index];
      }
    };
    return domutils;
  });
  return module.exports;
});
$__System.registerDynamic('6', [], true, function ($__require, exports, module) {
	/* */
	"format cjs";

	var define,
	    global = this || self,
	    GLOBAL = global;
	(function (root, factory) {
		'use strict';

		if (typeof define === 'function' && define.amd) {
			define(factory);
		} else if (typeof module === 'object' && module.exports) {
			module.exports = factory();
		} else {
			// Browser globals (root is window)
			root.domutils = factory();
		}
	})(this, function () {

		"use strict";

		var sundry = {

			/**
   *  Converts array like object (e.g. a NodeList) to an actual array
   *
   *  @function toArray
   *  @param arrayLike {NodeList} array like object
   *  @returns {Array} an actual array
   */
			toArray: function (arrayLike) {
				return Array.prototype.slice.call(arrayLike);
			},

			isString: function (val) {
				return typeof val === 'string';
			},

			isFunction: function (val) {
				return typeof val === 'function';
			},

			extend: function (target) {

				var srcObjects = Array.prototype.slice.call(arguments, 1);
				srcObjects.forEach(function (src) {
					Object.keys(src).forEach(function (key) {
						target[key] = src[key];
					});
				});
				return target;
			}
		};

		return sundry;
	});
	return module.exports;
});
$__System.registerDynamic('7', ['5', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports.domUtils = $__require('5');
  module.exports.sundry = $__require('6');
  return module.exports;
});
$__System.registerDynamic("8", ["7"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("7");
  return module.exports;
});
$__System.registerDynamic('9', ['8'], true, function ($__require, exports, module) {
	/* */
	"format cjs";

	var define,
	    global = this || self,
	    GLOBAL = global;
	(function (root, factory) {

		if (typeof define === 'function' && define.amd) {
			define(['richardUtils'], function (richardUtils) {
				return factory(richardUtils);
			});
		} else if (typeof exports !== 'undefined') {
			module.exports = factory($__require('8'));
		} else {
			root.SelectionBox = factory(root.richardUtils);
		}
	})(window, function (richardUtils) {

		var sundry = richardUtils.sundry;
		var domutils = richardUtils.domUtils;

		'use strict';

		var RETURN = 13,
		    TAB = 9,
		    ESCAPE = 27,
		    UP = 38,
		    DOWN = 40,
		    SPACE = 32;

		var optionSelector = '.option',
		    displayAreaSelector = '.display-area',
		    optionListSelector = '.option-list',
		    optionGroupSelector = '.option-group';

		/*
  	todo:
  	1. multiselect support
  	2. support for focus when clicking on any label belonging to select box
  */
		function SelectionBox(selectEl, options) {

			if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

				//  only work on desktop
				//  use native for mobile devices

				this.defaults = {
					ariaEnabled: true,
					renderOption: function (text) {
						return text;
					},
					renderDisplayArea: function (text, value) {
						return text;
					},
					hideFoundation: true,
					optionListMaxHeight: 150
				};

				this.config = sundry.extend({}, this.defaults, options || {});

				this.select = domutils.$(selectEl);

				if (!this.select) {
					throw {
						name: 'NO_SELECT_ELEMENT',
						message: 'You need to supply an existing select element'
					};
				}
				this.id = this.select.id;
				this.el = this.render(this.select);

				if (this.config.hideFoundation) {
					this.select.style.display = 'none';
				}
				domutils.insertAfter(this.el, this.select);

				this.el.style.display = 'block';

				this.bindHandlers();
			}
		}

		SelectionBox.prototype = {

			//  only function that is intended to be called from outside
			//  re-renders option list
			update: function () {
				var optionList = domutils.$(optionListSelector, this.el);
				//  clear out contents
				optionList.innerHTML = '';
				this._renderOptions($optionList);
			},

			bindHandlers: function () {

				var self = this;

				// handle events on display area
				domutils.delegate(this.el, 'click', displayAreaSelector, this._displayClickHandler, this);
				domutils.delegate(this.el, 'keyup', displayAreaSelector, this._displayKeyUpHandler, this);

				//  handle events on options
				domutils.delegate(this.el, 'click', optionSelector, this._optionClickHandler, this);
				domutils.delegate(this.el, 'keyup', optionSelector, this._optionKeyUpHandler, this);

				//  effectively disable keydown and keypress
				domutils.delegate(this.el, 'keydown', optionSelector, function (event) {
					event.preventDefault();
				});
				domutils.delegate(this.el, 'keypress', optionSelector, function (event) {
					event.preventDefault();
				});
				// attach window event handler
				window.addEventListener('click', function (event) {
					if (!self.el.contains(event.target)) {
						self._closeOptionList();
					}
				});
				//  handle change events on foundation select
				this.select.addEventListener('change', this._handleFoundationSelectChange.bind(this));

				//  because PhantomJS doesn't support MutationObserver!!
				if (typeof MutationObserver !== 'undefined') {

					//  handle mutation events on original select box
					var observer = new MutationObserver(function (mutations) {
						self.update();
					});
					// configuration of the observer:
					var config = { childList: true };
					// pass in the target node, as well as the observer options
					observer.observe(this.select, config);
				}
			},

			//  handlers

			_displayClickHandler: function () {
				if (!this.select.disabled) {
					if (this.el.getAttribute('data-state') == 'closed') {
						this._openOptionList();
					} else {
						this._closeOptionList();
					}
				}
			},

			_displayKeyUpHandler: function (event) {
				if (!this.select.disabled) {
					switch (event.which) {
						case UP:
						case DOWN:
							this._openOptionList();
							break;
						default:
						//  do something else
					}
				}
			},

			_optionClickHandler: function (event) {
				var optionEl = event.target;
				var a = !optionEl.classList.contains('__disabled');
				var b = !optionEl.parentElement.classList.contains('__disabled');
				if (a && b) {
					this._selectValue(optionEl);
				}
			},

			_optionKeyUpHandler: function (event) {
				var option = event.target;

				switch (event.which) {
					case UP:
						this._focusOnPreviousOption(option);
						break;
					case DOWN:
						this._focusOnNextOption(option);
						break;
					case SPACE:
					case RETURN:
						this._selectValue(option);
						break;
					case ESCAPE:
						this._closeOptionList();
						domutils.$(displayAreaSelector, this.el).focus();
						break;
					default:
					//  do nothing.
				}
			},

			_handleFoundationSelectChange: function (event) {
				this._changeSelected(this._getCurrentSelected(), this._getOptionByIndex(event.target.selectedIndex));
			},

			//  end of handlers

			//  set value on foundation select
			//  this component will update via it's listener on the foundation select.
			_selectValue: function (optionEl) {

				var value = optionEl.getAttribute('data-value') || optionEl.textContent;

				//  set value back on original select
				this.select.value = value;

				var event = document.createEvent('Event');
				event.initEvent('change', true, true);
				this.select.dispatchEvent(event);
			},

			//  performs actual change on this component, e.g changing aria values etc.
			_changeSelected: function (currentSelected, newSelected) {

				if (this.config.ariaEnabled) {
					currentSelected.setAttribute('aria-selected', false);
					newSelected.setAttribute('aria-selected', true);
				}

				currentSelected.classList.remove('__selected');
				newSelected.classList.add('__selected');

				domutils.$(displayAreaSelector, this.el).remove();
				this.el.insertBefore(this._renderDisplayArea(), this.el.firstChild);

				domutils.$(displayAreaSelector, this.el).focus();

				this._closeOptionList();
			},

			_openOptionList: function () {
				var optionList = domutils.$(optionListSelector, this.el);
				var displayArea = domutils.$(displayAreaSelector, this.el);
				this.el.setAttribute('data-state', 'open');

				if (this.config.ariaEnabled) {
					optionList.setAttribute('aria-hidden', false);
				}

				this._positionOptionList(displayArea, optionList);

				//  focus on currently selected option
				var selectedIndex = this.select.selectedIndex;
				this.el.querySelectorAll(optionSelector)[selectedIndex].focus();
			},

			_closeOptionList: function () {
				var optionList = domutils.$(optionListSelector, this.el);
				if (this.config.ariaEnabled) {
					optionList.setAttribute('aria-hidden', true);
				}
				this.el.setAttribute('data-state', 'closed');
			},

			_focusOn: function (el) {
				el.focus();
			},

			_focusOnPreviousOption: function (option) {
				var prevOption = domutils.prev(option, optionSelector);
				if (prevOption) {
					//  if there is a previous option and it isn't disabled, focus on it. Otherwise recursively call this function
					if (prevOption.classList.contains('__disabled')) {
						this._focusOnPreviousOption(prevOption);
					} else {
						this._focusOn(prevOption);
					}
				} else if (domutils.parent(option, optionGroupSelector)) {
					//  if option is in a group, try a previous group
					var parent = domutils.parent(option, optionGroupSelector);
					var prevGroup = this._getPrevGroup(parent);
					if (prevGroup) {
						prevOption = _toArray(prevGroup.querySelectorAll(optionSelector)).pop();
						if (prevOption) {
							if (!prevOption.classList.contains('__disabled')) {
								this._focusOn(prevOption);
							} else {
								this._focusOnPreviousOption(prevOption);
							}
						}
					}
				};
			},

			_focusOnNextOption: function (option) {
				var nextOption = domutils.next(option, optionSelector);
				if (nextOption) {
					if (nextOption.classList.contains('__disabled')) {
						this._focusOnNextOption(nextOption);
					} else {
						this._focusOn(nextOption);
					}
				} else if (domutils.parent(option, optionGroupSelector)) {
					var parent = domutils.parent(option, optionGroupSelector);
					var nextGroup = this._getNextGroup(parent);
					if (nextGroup) {
						var nextOption = _toArray(nextGroup.querySelectorAll(optionSelector)).shift();
						if (nextOption) {
							if (!nextOption.classList.contains('__disabled')) {
								this._focusOn(nextOption);
							} else {
								this._focusOnNextOption(nextOption);
							}
						}
					}
				};
			},

			_getPrevGroup: function (group) {
				var prevGroup = domutils.prev(group, optionGroupSelector);
				if (prevGroup) {
					if (prevGroup.classList.contains('__disabled')) {
						// skip this group
						return this._getPrevGroup(prevGroup);
					} else {
						return prevGroup;
					}
				} else {
					return false;
				}
			},

			_getNextGroup: function (group) {
				var nextGroup = domutils.next(group, optionGroupSelector);
				if (nextGroup) {
					if (nextGroup.classList.contains('__disabled')) {
						// skip this group
						return this._getNextGroup(nextGroup);
					} else {
						return nextGroup;
					}
				} else {
					return false;
				}
			},

			//  render functions
			render: function (select) {
				var self = this;
				var ariaEnabled = this.config.ariaEnabled;

				var el = document.createElement('div');
				el.id = this.select.id + '-selection-box';
				el.classList.add('selection-box');
				el.setAttribute('data-state', 'closed');

				if (select.disabled) {
					el.classList.add('__disabled');
				}

				var displayArea = this._renderDisplayArea(select.disabled);

				var optionList = document.createElement('div');
				optionList.id = this._generateId('option-list');
				optionList.classList.add('option-list');
				optionList.setAttribute('role', 'listbox');
				optionList.setAttribute('aria-hidden', true);
				optionList.setAttribute('aria-labelledby', this._generateId('display-area'));

				el.appendChild(displayArea);
				el.appendChild(optionList);

				this._renderOptions(optionList);

				return el;
			},

			_shouldOpenAboveDisplayArea: function (displayAreaDimensions, optionListDimensions) {

				//  default is to display option list below the display area.
				//  if there is not sufficient space, then we should display it above the display area.
				var spaceBelowDisplayArea = window.innerHeight - (displayAreaDimensions.height + displayAreaDimensions.top);
				return this.config.optionListMaxHeight > spaceBelowDisplayArea;
			},

			_positionOptionList: function (displayArea, optionList) {

				var displayAreaDimensions = _getElementDimensions(displayArea);
				if (this._shouldOpenAboveDisplayArea(displayAreaDimensions)) {
					optionList.classList.remove('below');
					optionList.classList.add('above');
				} else {
					optionList.classList.remove('above');
					optionList.classList.add('below');
				}
				optionList.style.maxHeight = this.config.optionListMaxHeight + 'px';
			},

			_renderOptions: function (optionList) {
				var self = this;
				var select = this.select;
				var ariaEnabled = this.config.ariaEnabled;

				if (_hasGroups(select)) {
					var groups = _toArray(select.querySelectorAll('optgroup'));
					groups.forEach(function (optionGroup) {
						optionList.appendChild(self._renderOptionGroup(optionGroup, ariaEnabled));
					});
				} else {
					var options = _toArray(select.querySelectorAll('option'));
					options.forEach(function (option) {
						optionList.appendChild(self._renderOption(option, select.disabled, ariaEnabled));
					});
				}
			},

			_renderDisplayArea: function (disabled) {

				var displayArea = document.createElement('div');

				var selectedOption = this._getSelectedOptionFromFoundationSelect();

				displayArea.classList.add('display-area');
				displayArea.setAttribute('tabindex', disabled ? null : 0);
				displayArea.id = this._generateId('display-area');

				var text = _getSelectedTextFromOption(selectedOption);
				var value = selectedOption.value;
				displayArea.innerHTML = this.config.renderDisplayArea(text, value);

				if (this.config.ariaEnabled) {

					displayArea.setAttribute('role', 'button');
					displayArea.setAttribute('aria-haspopup', true);
					displayArea.setAttribute('aria-owns', this._generateId('option-list'));
				}
				return displayArea;
			},
			//  tested
			_renderOptionGroup: function (optionGroup, ariaEnabled) {

				var self = this;

				var optionGroupEl = document.createElement('div');
				optionGroupEl.classList.add('option-group');

				optionGroupEl.appendChild(_renderOptionGroupLabel(optionGroup.label));

				if (optionGroup.disabled) {
					optionGroupEl.classList.add('__disabled');
				}
				_toArray(optionGroup.querySelectorAll('option')).forEach(function (option) {
					optionGroupEl.appendChild(self._renderOption(option, optionGroup.disabled, ariaEnabled));
				});

				return optionGroupEl;
			},
			//  tested
			_renderOption: function (option, parentDisabled, ariaEnabled) {

				var optionEl = document.createElement('div');
				optionEl.classList.add('option');
				//  todo : should set to '' if disabled?
				optionEl.setAttribute('tabindex', option.disabled || parentDisabled ? null : -1);
				optionEl.setAttribute('data-value', option.value || option.innerHTML);

				var text = option.label || option.innerHTML;

				optionEl.innerHTML = this.config.renderOption(text);

				if (ariaEnabled) {
					optionEl.setAttribute('role', 'option');
					optionEl.setAttribute('aria-selected', option.selected);
				}

				if (option.selected) {
					optionEl.classList.add('__selected');
				}

				if (option.disabled || parentDisabled) {
					optionEl.classList.add('__disabled');
				}
				return optionEl;
			},
			//  tested
			_getOptionByIndex: function (index) {
				return this.el.querySelectorAll(optionSelector)[index];
			},

			_getCurrentSelected: function () {
				return domutils.$('.__selected', this.el);
			},

			_generateId: function (suffix) {
				return this.id + '-' + suffix;
			},

			// foundation select functions

			_getSelectedOptionFromFoundationSelect: function () {
				return this.select.options[this.select.selectedIndex];
			}
		};

		//  stateless functions

		function _renderOptionGroupLabel(label) {

			var optionGroupLabel = document.createElement('div');
			optionGroupLabel.classList.add('option-group-label');
			optionGroupLabel.appendChild(document.createTextNode(label));

			return optionGroupLabel;
		}

		//  foundation select utility functions

		function _getSelectedTextFromOption(option) {
			return option.label || option.innerHTML;
		}

		function _hasGroups(select) {
			return select.querySelectorAll('optgroup').length > 0;
		}

		// other utils
		function _toArray(arrayLike) {
			return Array.prototype.slice.call(arrayLike);
		}

		function _getElementDimensions(el) {
			return el.getBoundingClientRect();
		}

		return SelectionBox;
	});
	return module.exports;
});
$__System.registerDynamic("a", ["9"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("9");
  return module.exports;
});
$__System.registerDynamic('1', ['2', '3', '4', 'a'], true, function ($__require, exports, module) {
	'use strict';

	var define,
	    global = this || self,
	    GLOBAL = global;
	var Router = $__require('2');
	var delegate = $__require('3');
	var TemplateEngine = $__require('4');
	var SelectionBox = $__require('a');
	var app = document.getElementById('app');

	var router = new Router({
		'': homeController(app),
		'emperor': emperorController(app)
	});

	function emperorController(appEl) {
		return function handleRequest(queryString) {
			addLoadingPanel();
			getEmperorData(queryString).then(function (model) {
				appEl.innerHTML = '';
				var el = document.createElement('div');
				delegate(el, {
					'click [data-internal-link]': handleInternalLink
				});
				el.className = 'container';
				addSection(el, 'banner-template', {});
				addSection(el, 'emperor-template', model.getEmperor());
				appEl.appendChild(el);
				removeLoadingPanel();
			});
		};
	}

	function homeController(appEl) {
		return function handleRequest(queryString) {
			addLoadingPanel();
			getData(queryString).then(function (model) {
				var el = document.createElement('div');
				el.className = 'container';
				appEl.innerHTML = '';
				delegate(el, {
					'click [data-internal-link]': handleInternalLink
				});

				var asideEl = document.createElement('div');
				asideEl.className = 'aside';
				renderAside(asideEl, model);

				var mainEl = document.createElement('div');
				mainEl.className = 'content';

				addSection(el, 'banner-template', {});

				renderResults(mainEl, model.getResults());

				el.appendChild(asideEl);
				el.appendChild(mainEl);

				addSection(el, 'footer-template', {});

				appEl.appendChild(el);

				new SelectionBox('#simple-styling');
				new SelectionBox('#dynasties');
				removeLoadingPanel();
			});
		};
	}

	function renderAside(el, model) {
		var asideTemplate = getTemplate('aside-template');
		html(el, TemplateEngine(asideTemplate, model.getRefinements()));

		delegate(el, {
			'change #simple-styling': createHandleSortByToggle(model),
			'change #dynasties': createFilterByDynasty(model),
			'change #year-from': createFilterByYearFrom(model),
			'change #year-to': createFilterByYearTo(model)
		});
	}

	function renderResults(el, results) {
		var resultTemplate = getTemplate('result-template');
		var frag = document.createDocumentFragment();
		var loadingPanel = document.createElement('div');
		loadingPanel.className = 'loading-panel';
		frag.appendChild(loadingPanel);
		frag = results.reduce(function (frag, resultData) {
			html(frag, TemplateEngine(resultTemplate, resultData));
			return frag;
		}, frag);
		el.appendChild(frag);
	}

	function createHandleSortByToggle(model) {
		return function handleSortByToggle(event) {
			model.setSortBy(event.target.value);
			router.navigate(createPath(model));
		};
	}
	function createFilterByDynasty(model) {
		return function filterByDynasty(event) {
			model.setFilterByDynasty(event.target.value);
			router.navigate(createPath(model));
		};
	}

	function createFilterByYearFrom(model) {
		return function (event) {
			model.setYearFrom(event.target.value);
			router.navigate(createPath(model));
		};
	}

	function createFilterByYearTo(model) {
		return function (event) {
			model.setYearTo(event.target.value);
			router.navigate(createPath(model));
		};
	}

	function createPath(model) {
		return '' + model.getQueryString();
	}

	//  no need to remove as will be wiped out when page is re-rendered
	function addLoadingPanel() {
		document.body.classList.add('loading');
	}

	function removeLoadingPanel() {
		document.body.classList.remove('loading');
	}

	var url = window.config.API_URL;

	function getData(queryString) {
		return fetch(url + '/api/emperors' + '?' + queryString).then(function (response) {
			return response.json().then(function (json) {
				return createModel(json, queryString);
			});
		});
	}

	function getEmperorData(queryString) {
		return fetch(url + '/api/emperor' + '?' + queryString).then(function (response) {
			return response.text().then(function (text) {
				return createEmperorModel(text);
			});
		});
	}

	function getQueryParams(queryString) {
		//  http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
		var queryParams = {};

		queryString.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
			queryParams[$1] = $3;
		});
		return queryParams;
	}

	function createEmperorModel(text) {
		return {
			getEmperor: function () {
				return {
					text: text
				};
			}
		};
	}

	function createModel(json, queryString) {
		var queryParams = {};
		if (queryString) {
			queryParams = getQueryParams(queryString);
		}
		return {

			setSortBy: function (sortBy) {
				queryParams['sort-by'] = sortBy;
			},

			setYearFrom: function (yearFrom) {
				queryParams['year-from'] = yearFrom;
			},

			setYearTo: function (yearTo) {
				queryParams['year-to'] = yearTo;
			},

			setFilterByDynasty: function (dynasty) {
				queryParams['dynasty'] = dynasty;
			},

			getRefinements: function () {
				//  get refinements from query string
				//  Need to only return properties for existing params
				//  let server handle default results
				return json.criteria;
			},

			getResults: function () {
				return json.results;
			},

			getQueryString: function () {
				return Object.keys(queryParams).reduce(function (memo, key, index) {
					var amper = index > 0 ? '&' : '';
					return memo + amper + key + '=' + queryParams[key];
				}, '?');
			},

			getPagination: function () {}

		};
	}

	function handleInternalLink(event) {
		event.preventDefault();
		var href = event.target.getAttribute('href');
		router.navigate(href);
	}

	function html(el, htmlString) {
		//  todo should also handle case where string represents more than single root element
		//  iterate through children and append each to node.
		var tempEl = document.createElement('div');
		tempEl.innerHTML = htmlString;
		el.appendChild(tempEl.firstElementChild);
	}

	function getTemplate(id) {
		return document.getElementById(id).textContent;
	}

	function addSection(el, templateId, data) {
		var bannerTemplate = getTemplate(templateId);
		html(el, TemplateEngine(bannerTemplate, data));
	}

	router.start();
	return module.exports;
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=app.js.map