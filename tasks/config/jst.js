/**
<<<<<<< HEAD
 * `jst`
 *
 * ---------------------------------------------------------------
 *
 * Precompile HTML templates using Underscore/Lodash notation into
 * functions, creating a `.jst` file.  This can be brought into your HTML
 * via a <script> tag in order to expose your templates as `window.JST`
 * for use in your client-side JavaScript.
 *
 * (i.e. in other words it takes HTML files in `assets/templates/` and
 *  turns them into tiny little javascript functions that return HTML strings
 *  when you pass a data dictionary into them.  This approach is called
 *  "precompiling", and it can considerably speed up template rendering on
 *  the client, and even reduce bandwidth usage and related expenses.)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-jst
=======
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jst
>>>>>>> chat
 *
 */

module.exports = function(grunt) {

<<<<<<< HEAD
  grunt.config.set('jst', {
    dev: {

      // To use other sorts of templates, specify a regexp like the example below:
      // options: {
      //   templateSettings: {
      //     interpolate: /\{\{(.+?)\}\}/g
      //   }
      // },

      // Note that the interpolate setting above is simply an example of overwriting lodash's
      // default interpolation. If you want to parse templates with the default _.template behavior
      // (i.e. using <div></div>), there's no need to overwrite `templateSettings.interpolate`.


      files: {
        // e.g.
        // 'relative/path/from/gruntfile/to/compiled/template/destination'  : ['relative/path/to/sourcefiles/**/*.html']
        '.tmp/public/jst.js': require('../pipeline').templateFilesToInject
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
=======
	grunt.config.set('jst', {
		dev: {

			// To use other sorts of templates, specify a regexp like the example below:
			// options: {
			//   templateSettings: {
			//     interpolate: /\{\{(.+?)\}\}/g
			//   }
			// },

			// Note that the interpolate setting above is simply an example of overwriting lodash's
			// default interpolation. If you want to parse templates with the default _.template behavior
			// (i.e. using <div></div>), there's no need to overwrite `templateSettings.interpolate`.


			files: {
				// e.g.
				// 'relative/path/from/gruntfile/to/compiled/template/destination'  : ['relative/path/to/sourcefiles/**/*.html']
				'.tmp/public/jst.js': require('../pipeline').templateFilesToInject
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jst');
>>>>>>> chat
};
