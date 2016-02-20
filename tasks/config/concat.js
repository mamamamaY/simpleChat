/**
<<<<<<< HEAD
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
=======
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: '.tmp/public/concat/production.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/concat/production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
>>>>>>> chat
};
