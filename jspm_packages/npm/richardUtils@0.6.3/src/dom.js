/* */ 
"format cjs";
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['./sundry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./sundry'));
  } else {
    root.domutils = factory(sundry);
  }
}(this, function(sundry) {
  'use strict';
  var domutils = {
    $: function(selector, context) {
      return (context || document).querySelector(selector);
    },
    $$: function() {},
    prev: function(el, selector) {
      var prevSibling = el.previousElementSibling;
      return prevSibling && domutils.matches(prevSibling, selector) ? prevSibling : null;
    },
    next: function(el, selector) {
      var nextSibling = el.nextElementSibling;
      return nextSibling && domutils.matches(nextSibling, selector) ? nextSibling : null;
    },
    parent: function(el, selector) {
      var parent = el.parentNode;
      return parent && domutils.matches(parent, selector) ? parent : null;
    },
    matches: function(elm, selector) {
      var matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== elm) {}
      return i > -1;
    },
    insertAfter: function(newEl, referenceEl) {
      var parentEl = referenceEl.parentElement;
      var nextSibling = referenceEl.nextElementSibling;
      parentEl.insertBefore(newEl, nextSibling);
    },
    searchAncestors: function(descendant, condition, ancestor) {
      var parent = descendant.parentNode,
          conditionFunc;
      if (sundry.isString(condition)) {
        conditionFunc = function(el) {
          return domutils.matches(el, condition);
        };
      } else if (sundry.isFunction(condition)) {
        conditionFunc = condition;
      } else {
        throw {message: 'condition must be a string or a function'};
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
    delegate: function(el, eventType, targetSelector, handler, context) {
      if (context) {
        handler = handler.bind(context);
      }
      el.addEventListener(eventType, function(event) {
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
    nthChild: function(el, index) {
      return el.children[index];
    }
  };
  return domutils;
}));
