/**
<<<<<<< HEAD
 * `sync`
=======
 * A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
>>>>>>> chat
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
<<<<<<< HEAD
 * This task synchronizes one directory with another (like rsync).
 * In the default Sails asset pipeline, it plays very similar role
 * to `grunt-contrib-copy`, but copies only those files that have
 * actually changed since the last time the task was run.
 *
 * For usage docs see:
 *   https://github.com/tomusdrw/grunt-sync
=======
 * For usage docs see:
 * 		https://github.com/tomusdrw/grunt-sync
>>>>>>> chat
 *
 */
module.exports = function(grunt) {

<<<<<<< HEAD
  grunt.config.set('sync', {
    dev: {
      files: [{
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');
=======
	grunt.config.set('sync', {
		dev: {
			files: [{
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-sync');
>>>>>>> chat
};
