/* */ 
"format cjs";
/**
 * @author Micho García
 */
 // Modify as you need
require.config({
	baseUrl : "../",
	paths : {
		jasmine : 'jasmine/lib/jasmine-1.2.0/jasmine',
		'jasmine-html' : 'jasmine/lib/jasmine-1.2.0/jasmine-html',
		enhancedObject : 'src/enhancedObject'
	},
	shim : {

		jasmine : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : ['jasmine'],
			exports : 'jasmine'
		}
	}
});

window.store = "TestStore";
// override local storage store name - for testing

require([
    'jasmine-html'
    ],
    function(
        jasmine
    ) {


        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        var specs = [];

        //specs.push('path/to/whateverSpec');
        specs.push('test/nodeEventSpec.js');


        require(specs, function() {
            jasmineEnv.execute();
        });

    });