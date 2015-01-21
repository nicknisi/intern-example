/*jshint node:true*/
module.exports = function (grunt) {
	grunt.initConfig({
		intern: {
			ios: {
				options: {
					runType: 'runner',
					config: 'tests/intern.ios',
					reporters: [ 'console' ]
				}
			},
			android: {
				options: {
					runType: 'runner',
					config: 'tests/intern.android',
					reporters: [ 'console' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('intern');

	grunt.registerTask('default', [ 'intern:client' ]);
};
