module.exports = function(grunt) {
	grunt.initConfig({

		jshint: {
			options: {
				'-W069': true,
				globals: {
					'NORTH': true,
					'SOUTH': true,
					'EAST' : true,
					'WEST' : true,
					'PASS' : true,
					'TAKE' : true
				}
			},
			bot: ['bot/**/*.js', 'test/**/*.js']
		},

		mochaTest: {
			options: {
				clearRequireCache: true,
				ignoreLeaks:       false,
				timeout:           3000,
			},
			bot: {
				options: {
					reporter: 'dot',
					require:  ['should', 'test/globals', 'test/coverage/blanket'],
					ui:       'bdd'
				},
				src: ['test/**/*.test.js']
			},
			coverage: {
				options: {
					reporter: 'html-cov',
					quiet: true,
					captureFile: 'test/coverage/report.html'
				},
				src: ['bot/**/*.js', 'test/**/*.test.js']
			}
		},

		execute: {
			browserify: {
				src: ['compile/browserify.js']
			},
			closure: {
				src: ['compile/closure.js']
			}
		},

		watch: {
			test: {
				files: ['bot/**/*.js', 'test/**/*.js', 'gruntfile.js'],
				tasks: ['test']
			},
			bot: {
				files: ['bot/**/*.js', 'test/**/*.js', 'gruntfile.js'],
				tasks: ['build']
			}
		}

	});

	var load = [
		'grunt-contrib-jshint',
		'grunt-contrib-watch',
		'grunt-mocha-test',
		'grunt-execute'
	];

	var register = {
		test:     ['jshint', 'mochaTest'],
		build:    ['execute:browserify', 'execute:closure'],
		default:  ['watch']
	}

	for (var i = load.length - 1; i >= 0; i--) grunt.loadNpmTasks(load[i]);
	for (var task in register) grunt.registerTask(task, register[task]);
}
