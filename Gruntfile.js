/**
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {

    if(grunt.file.exists('.extra/grunt-thinkingmedia')) {
        grunt.loadTasks('.extra/grunt-thinkingmedia/tasks');
    } else {
        grunt.loadNpmTasks('grunt-thinkingmedia');
    }

    grunt.initConfig({
        config: {
            name: 'angular-assert',
            webroot: './src',
            build: './dist',
            src: [
                './src'
            ],
            templates: false
        }
    });
};
