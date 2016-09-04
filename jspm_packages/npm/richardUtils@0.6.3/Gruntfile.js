/* */ 
module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        karma: {

            unit: {
                configFile: 'karma.conf.js'
            }
        },

        clean: {
            docs: ["./docs/"]
        },

        jshint: {

            options : {
                jshintrc : '.jshintrc',
                ignores : [
                    'src/deferredTest/**/*.js',
                    'src/promises/**/*.js',
                    'src/Draggable.js',
                    'src/enhancedObject.js',
                    'src/eventNode.js'
                ]
            },
            all: ['Gruntfile.js', 'src/**/*.js']
        },

        jsdoc : {
            src: ['src/**/*.js'],
            options: {
                destination: 'docs'
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("default", ['karma']);
    grunt.registerTask("docs", ['clean:docs', 'jsdoc']);


};