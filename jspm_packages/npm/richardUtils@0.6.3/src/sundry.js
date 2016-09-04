/* */ 
"format cjs";

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
}(this, function () {

	"use strict";

	var sundry = {

		/**
		*  Converts array like object (e.g. a NodeList) to an actual array
		*
		*  @function toArray
		*  @param arrayLike {NodeList} array like object
		*  @returns {Array} an actual array
		*/
		toArray : function (arrayLike){
			return Array.prototype.slice.call(arrayLike);
		},

		isString : function (val) {
			return typeof val === 'string';
		},

		isFunction : function (val) {
			return typeof val === 'function';
		},

		extend : function (target) {

			var srcObjects = Array.prototype.slice.call(arguments, 1);
			srcObjects.forEach(function (src) {
				Object.keys(src).forEach(function(key){
					target[key] = src[key];
				});
			});
			return target;
		}
	};

	return sundry;

}));





