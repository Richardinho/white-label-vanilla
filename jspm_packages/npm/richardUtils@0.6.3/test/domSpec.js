/* */ 
"format cjs";
describe('dom', function () {
	var root;
	beforeEach(function () {
		root = document.createElement('div');
		document.body.appendChild(root);
	});

	afterEach(function () {
		document.body.removeChild(root);
	});

	describe('$()', function () {
  		var html;
  		beforeEach(function () {
  			html = ['<div id="bar">',
  			          '<div>',
  			            '<div class="foo">foo</div>',
  			          '</div>',
  			        '</div>'].join('');

  			root.innerHTML = html;
  		});
  		describe('when only a selector is passed in', function () {
  			it('should find element specified by selector', function () {
  				expect(domutils.$('#bar .foo').innerHTML).toBe('foo'); // what is best way to get inner text of a node?
  			});
  		})
  		describe('when selector and context are passed in', function () {
  			it('should find element specified by selector within context', function () {
  				expect(domutils.$('.foo', document.getElementById('bar')).innerHTML).toBe('foo'); // what is best way to get inner text of a node?
  			});
  		})
  	});

	describe('$$()', function () {});

	describe('prev()', function () {
		describe('When just element passed as argument', function () {
			describe('when element has previous element sibling', function () {
				it('should return previous element sibling', function () {

				});
			});
			describe('When element does not have previous element sibling', function () {
				it('should return NULL', function () {

				});
			});
		});
		describe('When selector argument is passed as second argument', function () {
			describe('When element has previous element sibling which matches the selector', function () {
				it('should return previous element sibling', function () {

				});
			});
			describe('When element has previous element sibling which does not match the selector', function () {
				it('should return NULL', function () {

				});
			});
		});
	});

	describe('next()', function () {});

	describe('parent()', function () {});

	describe('matches()', function () {});

	describe('insertAfter()', function () {
		var referenceEl, bar;
		beforeEach(function () {
			html = ['<div>',
								'<div>',

								'</div>',
								'<div id="reference">',

								'</div>',
								'<div>',

								'</div>',
							'</div>'].join('');
			root.innerHTML = html;
			referenceEl = document.getElementById('reference');
			bar = document.createElement('div');
			bar.id = 'bar';
		});
		it('should insert element after reference element', function () {
			domutils.insertAfter(bar, referenceEl);
			expect(referenceEl.nextElementSibling).toBe(document.getElementById('bar'));
		});
	});

	describe('insertAfter() when reference node is last child of parent', function () {
		var referenceEl, bar;
		beforeEach(function () {
			html = ['<div>',
								'<div>',
								'</div>',
								'<div id="reference">',
								'</div>',
							'</div>'].join('');
			root.innerHTML = html;
			referenceEl = document.getElementById('reference');
			bar = document.createElement('div');
			bar.id = 'bar';
		});
		it('should insert element after reference element', function () {
			domutils.insertAfter(bar, referenceEl);
			expect(referenceEl.nextElementSibling).toBe(document.getElementById('bar'));
		});
	});

	describe('delegate()', function () {
		var html, event, spyHandler;
		beforeEach(function () {
			html = ['<div id="ancestor">',
			          '<div id="target" class="target">',
			            '<div>',
			              '<div id="descendant"></div>',
			            '</div>',
			          '</div>',
			        '</div>'].join('');
			root.innerHTML = html;

			descendant = document.getElementById('descendant');
			ancestor = document.getElementById('ancestor');
			target = document.getElementById('target');

			event = document.createEvent('Event');
			event.initEvent('click', true, true);
			spyHandler = jasmine.createSpy('spy');

			domutils.delegate(ancestor, 'click', '.target', spyHandler);
			descendant.dispatchEvent(event);

		});

		it('should..', function () {
			expect(spyHandler).toHaveBeenCalled();
		});
	});

	describe('nthChild()', function () {
		var parentEl, fooEl;
		beforeEach(function () {
			root.innerHTML = [
				'<ul id="parent">',
					'<li></li>',
					'<li></li>',
					'<li></li>',
					'<li id="foo"></li>',
					'<li></li>',
				'</ul>'
			].join('');
			fooEl = document.getElementById('foo');
			parentEl = document.getElementById('parent');
		});
		it('should return child by index', function () {
			expect(domutils.nthChild(parentEl, 3)).toBe(fooEl);
		});
	});

	describe('searchAncestors()', function () {
		var html, descendant, ancestor, target, result;
		beforeEach(function () {
			html = ['<div id="apple">',
			          '<div id="banana">',
			            '<div id="carrot">',
			              '<div id="donut"></div>',
			            '</div>',
			          '</div>',
			        '</div>'].join('');
			root.innerHTML = html;
		});
		describe('when ancestor, descendant, and target are distinct elements', function(){
			beforeEach(function () {
				ancestor = document.getElementById('apple');
				descendant = document.getElementById('donut');
				target = document.getElementById('carrot');

			});
			it('should return target element', function () {
				result = domutils.searchAncestors(descendant, '#carrot', ancestor);
				expect(result).toBe(target);
			});
		});
		describe('when ancestor and target are same element', function(){
			beforeEach(function () {
				ancestor = document.getElementById('apple');
				descendant = document.getElementById('donut');
				target = document.getElementById('apple');
			});
			it('should return target element', function () {
				result = domutils.searchAncestors(descendant, '#apple', ancestor);
				expect(result).toBe(target);
			});
		});
		describe('when target and descendant are same element', function(){
			beforeEach(function () {
				ancestor = document.getElementById('apple');
				descendant = document.getElementById('donut');
				target = document.getElementById('donut');
			});
			it('should return target element', function () {
				result = domutils.searchAncestors(descendant, '#donut', ancestor);
				expect(result).toBe(target);
			});
		});
		describe('when ancestor, descendant, and target are same element', function(){
			beforeEach(function () {
				ancestor = document.getElementById('donut');
				descendant = document.getElementById('donut');
				target = document.getElementById('donut');
			});
			it('should return target element', function () {
				result = domutils.searchAncestors(descendant, '#donut', ancestor);
				expect(result).toBe(target);
			});
		});
	});


});