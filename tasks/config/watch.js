/**
<<<<<<< HEAD
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
=======
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
>>>>>>> chat
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
<<<<<<< HEAD
 *   https://github.com/gruntjs/grunt-contrib-watch
=======
 * 		https://github.com/gruntjs/grunt-contrib-watch
>>>>>>> chat
 *
 */
module.exports = function(grunt) {

<<<<<<< HEAD
  grunt.config.set('watch', {
    assets: {

      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['syncAssets' , 'linkAssets' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
=======
	grunt.config.set('watch', {
		assets: {

			// Assets to watch:
			files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

			// When assets are changed:
			tasks: ['syncAssets' , 'linkAssets']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
>>>>>>> chat
};
