module.exports = function(grunt){
	//load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-link-checker',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	//configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
		},
		jshint: {
			app: [ 'meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js' ],
			qa: [ 'Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js' ],
		},
		linkChecker: {
			options: { maxConcurrency: 20 },
			dev: { site: 'localhost', options: { initialPort: 3000 } },
		},
	});

	//register tasks
	grunt.registerTask('default', ['cafemocha','jshint','linkChecker']);
};
